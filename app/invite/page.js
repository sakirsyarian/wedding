"use client";

// react and next
import { useState } from "react";
import Link from "next/link";

// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Invite() {
  const [url, setUrl] = useState("");
  const [guest, setGuest] = useState("");

  function generateUrl() {
    return `${url}?guest=${encodeURIComponent(guest)}`;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(generateUrl());
  }

  return (
    <>
      <section className="px-5 py-12 md:py-24 md:container space-y-10 text-slate-500">
        <h1 className="text-3xl text-center text-tertiary">Invite</h1>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setUrl("");
              setGuest("");
            }}
          >
            Reset
          </Button>
        </div>

        <div className="p-8 shadow-md rounded-lg space-y-5">
          <div className="space-y-3">
            <Label htmlFor="email">Link</Label>
            <Input
              className="focus-visible:ring-primary"
              type="text"
              id="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Masukan link"
            />
          </div>

          {url && (
            <div className="space-y-3">
              <Label htmlFor="email">Tamu</Label>
              <Input
                className="focus-visible:ring-primary"
                type="text"
                id="guest"
                name="guest"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                placeholder="Masukan nama tamu undangan"
              />
            </div>
          )}

          {url && guest && (
            <div className="space-y-3">
              <Label htmlFor="email">Hasil</Label>

              <div className="flex flex-wrap gap-5">
                <Input
                  className="focus-visible:ring-primary"
                  type="text"
                  id="result"
                  name="result"
                  value={generateUrl()}
                />

                <div className="flex gap-3">
                  <Button variant="primary" onClick={copyToClipboard}>
                    Copy
                  </Button>

                  <Link href={generateUrl()} target="_blank">
                    <Button variant="primary">Preview</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <Guidance />
      </section>
    </>
  );
}

function Guidance() {
  const guidances = [
    {
      number: "1.",
      description: "Masukan link undangan yang telah Anda dapatkan dari admin.",
      example: "Contoh : https://andaring.com/mita-angga",
    },
    {
      number: "2.",
      description: "Tuliskan nama tamu yang ingin Anda undang.",
      example: "Contoh : Ahmad Sarian",
    },
    {
      number: "3.",
      description: "Hasil akhirnya akan menjadi seperti ini,",
      example: "https://andaring.com/mita-angga?guest=Ahmad Sarian",
    },
    {
      number: "4.",
      description:
        "Jika semua data sudah terisi, Anda dapat klik tombol preview untuk melihat pratinjaunya",
      example: null,
    },
    {
      number: "5.",
      description:
        "Selanjutnya Anda bisa copy link undangan tersebut dan siap untuk disebarkan kepada para tamu undangan",
      example: null,
    },
  ];

  return (
    <div className="space-y-3 text-sm">
      <h2 className="font-semibold text-base">Panduan :</h2>

      <ul className="space-y-2">
        {guidances.map((guide, index) => (
          <li key={index} className="flex gap-1">
            <p>{guide.number}</p>
            <p>
              {guide.description}
              <span className="ml-1 italic">{guide.example || null}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
