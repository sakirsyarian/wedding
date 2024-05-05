// icons
import {
  LuMail,
  LuMapPin,
  LuUsers,
  LuMusic,
  LuCalendar,
  LuWallet2,
  LuBookMarked,
  LuImage as ImageIcon,
} from "react-icons/lu";

const features = [
  {
    icon: <LuUsers className="w-8 h-8" />,
    title: "Nama Tamu",
    description: "Menampilkan nama tamu undangan agar terasa special",
  },
  {
    icon: <LuMusic className="w-8 h-8" />,
    title: "Background Musik",
    description: "Hiasi undangan online kamu dengan musik favorit",
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Galeri Foto",
    description: "Bagikan momen kebahagiaan kamu kepada tamu undangan",
  },
  // {
  //   icon: <LuTimer className="w-8 h-8" />,
  //   title: "Countdown Timer",
  //   description: "Hitung mundur ke momen paling indah hidup kamu",
  // },
  {
    icon: <LuCalendar className="w-8 h-8" />,
    title: "Google Calendar",
    description: "Simpan momen penting di calendar agar tidak lupa",
  },
  {
    icon: <LuMail className="w-8 h-8" />,
    title: "Share Whatsapp",
    description: "Mempermudah kamu membagikan undangan melalui whatsapp",
  },
  {
    icon: <LuBookMarked className="w-8 h-8" />,
    title: "Buku Tamu",
    description:
      "Menerima ucapan dan doa serta status kehadiran dari tamu undangan",
  },
  {
    icon: <LuWallet2 className="w-8 h-8" />,
    title: "Amplop Digital",
    description: "Tamu undangan bisa memberikan amplop langsung secara digital",
  },
  {
    icon: <LuMapPin className="w-8 h-8" />,
    title: "Navigasi Maps",
    description: "Petunjuk maps yang dapat mempermudah tamu menuju ke lokasi",
  },
];

export default features;
