const keywords = [
  {
    title: "Undangan Nikah",
  },
  {
    title: "Undangan Online",
  },
  {
    title: "Undangan Online Pernikahan",
  },
  {
    title: "Undangan Pernikahan",
  },
  {
    title: "Undangan Pernikahan Digital",
  },
  {
    title: "Undangan Pernikahan Elegan",
  },
  {
    title: "Undangan Pernikahan Mewah",
  },
  {
    title: "Undangan Pernikahan Simple",
  },
  {
    title: "Undangan Pernikahan Unik",
  },
  {
    title: "Web Undangan Pernikahan",
  },
  {
    title: "Undangan Digital",
  },
  {
    title: "Undangan Digital Gratis",
  },
  {
    title: "Undangan Website",
  },
  {
    title: "Undangan Website Gratis",
  },
  {
    title: "Undangan Online Gratis",
  },
  {
    title: "Undangan Digital Website",
  },
  {
    title: "Undangan Wedding",
  },
  {
    title: "Website Undangan Digital",
  },
  {
    title: "Jasa Undangan Digital",
  },
  {
    title: "Undangan Pernikahan Aesthetic",
  },
];

keywords.forEach((keyword, index) => {
  // menambahkan id
  keyword.id = index + 1;

  // keyword lowercase
  keyword.name = keyword.title.toLowerCase();

  // keyword kebabcase
  keyword.link = keyword.name.replace(/ /g, "-");
});

export default keywords;
