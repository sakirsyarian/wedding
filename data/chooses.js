// icons
import {
  LuZap,
  LuWallet,
  LuPalette,
  LuThumbsUp,
  LuMessageCircle,
} from "react-icons/lu";

const chooses = [
  {
    icon: <LuWallet className="w-8 h-8" />,
    title: "Harga Kompetitif",
    description: "Harga undangan pernikahan sangat kompetitif dan terjangkau",
  },
  {
    icon: <LuZap className="w-8 h-8" />,
    title: "Proses Cepat",
    description:
      "Undangan digital bisa dibuat dengan cepat, mudah dan tanpa repot",
    // "Pembuatan undangan hanya butuh waktu 10 menit serta bisa diubah kapanpun",
  },
  {
    icon: <LuThumbsUp className="w-8 h-8" />,
    title: "Fitur Lengkap",
    description:
      "Punya banyak fitur unggul yang bisa mempermudah kamu dan tamu undangan",
  },
  {
    icon: <LuPalette className="w-8 h-8" />,
    title: "Tema Beragam",
    description:
      "Tersedia banyak contoh undangan pernikahan yang sesuai dengan kamu",
  },
  {
    icon: <LuMessageCircle className="w-8 h-8" />,
    title: "Support Terbaik",
    description:
      "Tim kami selalu bisa dihubungi dan diandalkan ketika kamu perlu bantuan",
  },
];

export default chooses;
