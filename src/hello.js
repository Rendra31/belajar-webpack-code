import _ from "lodash";

console.log("hello from hello.js");

const mhs = [
  {
    nama: "Muhammad",
    email: "rendrabootcamp@gmail.com",
    kelas: "frontend",
  },
  { nama: "Rendra", email: "rendra3211@gmail.com", kelas: "backend" },
  { nama: "Andriansyah", email: "mortumora@gmail.com", kelas: "UI/UX" },
];

const findMhs = _.find(mhs, { nama: "Rendra" });
console.log(findMhs);
