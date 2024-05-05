"use client";

// react
import { useState, useEffect } from "react";

// next
import Image from "next/image";

// icons
import { LuBadgeCheck } from "react-icons/lu";

// data
import fullName from "@/data/name";

const thirtySeconds = 30 * 1000;
const tenSeconds = 10 * 1000;

export default function Notification() {
  const [show, setShow] = useState(false);
  const [listName, setListName] = useState(fullName);
  const [notification, setNotification] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Mengatur tampilan
      setShow(!show);

      // Memilih nama secara acak dari listName
      const randomName = listName[Math.floor(Math.random() * listName.length)];

      // Memilih paket secara acak dari listPackage
      const listPackage = ["Premium", "Platinum"];

      // Menetapkan nama yang ditampilkan
      setNotification({
        randomName,
        randomPackage:
          listPackage[Math.floor(Math.random() * listPackage.length)],
        randomNumber: Math.floor(Math.random() * 10) + 1,
      });
    }, thirtySeconds);

    // Menghapus notifikasi
    if (show) {
      async function removeNotification() {
        await new Promise((resolve) => setTimeout(resolve, tenSeconds));
        setShow(!show);
      }

      removeNotification();
    }

    // Membersihkan interval pada pembongkaran komponen
    return () => clearInterval(intervalId);
  }, [show, listName, notification]); // Efek hanya dijalankan saat komponen dimuat dan ketika listName atau displayName berubah

  return (
    <>
      <section className={show ? "block" : "hidden"}>
        <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10">
          <div className="p-3 rounded-lg bg-white space-y-2 shadow">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" width={65} height={65} alt="andaring" />

              <div className="">
                <div className="flex items-center gap-1">
                  <LuBadgeCheck className="w-5 h-5 text-blue-500" />
                  <p className="font-semibold">{notification.randomName}</p>
                </div>

                <p className="text-sm">
                  Telah membeli paket {notification.randomPackage}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  {notification.randomNumber} minutes ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
