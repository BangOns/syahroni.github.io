// databese
let Data_Diri = {
  orang1: {
    Nama: "Syahroni",
    Divisi: "Front End Developer",
    quotes:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis, sequi, officia provident non asperiores ullam, deserunt id porro unde animi sit recusandae esse magni velit dolores nihil iste explicabo?",
    biotgl: {
      Lahir: "31 Mei 2003",
      Kota: "Jakarta",
      Negara: "Indonesia",
      Telepon: "08903561870",
    },
    bioUmur: {
      Umur: "19 Years",
      Sekolah: "Universitas Indraprasta PGRI",
      Email: '<a href="syahr9950@gmail.com">syahr9950@gmail.com</a>',
      Freelance: "Fresh Graduate",
    },
    sekolah: {
      sd: {
        namaSekolah: "SDN 011 Pagi",
        Tahun: "2009 - 2015",
        quotes: "Menjadi murid teladan yang baik dan berguna",
      },
      smp: {
        namaSekolah: "Mts Al-Mawaddah",
        Tahun: "2015 - 2018",
        quotes: "Menjadi manusia yang baik dan berperilaku jujur dan disiplin",
      },
      sma: {
        namaSekolah: "Ma Al-Mawaddah",
        Tahun: "2018 - 2021",
        quotes:
          "Menjadi manusia yang berguna bagi masyarakat disekitar lingkungan dan dimanapun berada",
      },
    },
    Pekerjaan: {
      kerja1: {
        namaPT: "PT.asalole",
        Tahun: "2012 - 2021",
        hasil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      },
      kerja2: {
        namaPT: "Master Of Comeback",
        Tahun: "2021 - 2022",
        hasil:
          "libero debitis nobis atque culpa placeat adipisci aliquid cum reiciendi ",
      },
      kerja3: {
        namaPT: "PT.FWC",
        Tahun: "2022 - Now",
        hasil:
          " aliquid cum reiciendis nulla labore repellendus aspernatur maiores, recusandae asperiores amet quasi! ",
      },
    },
    Skill: {
      skill1: {
        namaSkill: "HTML",
        persen: 85,
      },
      skill2: {
        namaSkill: "CSS",
        persen: 67,
      },
      skill3: {
        namaSkill: "javascript",
        persen: 40,
      },
    },
    Language: {
      bahasa1: {
        namaBahasa: "Indonesia",
        persen: 95,
      },
      bahasa2: {
        namaBahasa: "English",
        persen: 45,
      },
      bahasa3: {
        namaBahasa: "Arabic",
        persen: 35,
      },
    },
    hasil: {
      hasil1: 100,
      hasil2: 121,
      hasil3: 150,
    },
    Prooject: {
      Pro1: {
        gambar1: '<img src="img/Gradient-3.png" />',
        namePro: '<a href="#">Web Design</a>',
        desPro1: {
          type: "Web",
          Language: "Javascript",
          framework: "none",
          Complated: "31 mei 2022",
        },
      },
      Pro2: {
        gambar1: '<img src="img/minimal-digital.png" />',
        namePro: '<a href="#">My Blog</a>',
        desPro2: {
          type: "Web",
          Language: "typescript",
          framework: "none",
          Complated: "31 mei 2022",
        },
      },
      Pro3: {
        gambar1: '<img src="img/screeshot.png" />',
        namePro: '<a href="#">Portofolio</a>',
        desPro3: {
          type: "Web",
          Language: "HTML",
          framework: "none",
          Complated: "31 mei 2022",
        },
      },
    },
    pesan: {
      kontak: {
        email: '<a href="#" target="_blank">Syahroni</a>',
        lokasi:
          '<a href="#" target="_blank">Pekayon,Pasar rebo, Jakarta Timur </a>',
        NoWa: '<a href="#" target="_blank">Click Me</a>',
        telepon: '<a href="#" target="_blank">Click Me</a>',
      },
      sosmed: {
        linkedin: '<a href="#">Syahroni</a>',
        instagram: '<a href="#">syahroni18_</a>',
        youtube: '<a href="#">Syahroni</a>',
        facebook: '<a href="#">Syahroni</a>',
      },
    },
  },
};

// variable
const nama = document.querySelector(".nama");
const Divisi = document.querySelector(".divisi");
const quotes = document.querySelector(".quotes");
const pagination = document.querySelectorAll(".titik span");
const gambar = document.querySelectorAll(".gambar li img");
// home
const Home = document.querySelector(".home");
const Home2 = document.querySelector("#hash");
const Biodata = document.querySelector(".bio");
const resume = document.querySelector(".resume");
const pilihan = document.querySelectorAll(".pinggir li");
const birth = document.querySelector(".birth");
const age = document.querySelector(".age");
// resume
const sd = document.querySelector(".sd");
const smp = document.querySelector(".smp");
const sma = document.querySelector(".sma");
const kerja1 = document.querySelector(".pt1");
const kerja2 = document.querySelector(".pt2");
const kerja3 = document.querySelector(".pt3");
const skill1 = document.querySelector(".skill1");
const skill2 = document.querySelector(".skill2");
const skill3 = document.querySelector(".skill3");
const lang1 = document.querySelector(".lang1");
const lang2 = document.querySelector(".lang2");
const lang3 = document.querySelector(".lang3");
const hasil1 = document.querySelector(".persenKotak1");
const hasil2 = document.querySelector(".persenKotak2");
const hasil3 = document.querySelector(".persenKotak3");
// project
const project = document.querySelector(".projected");
const img1 = document.querySelector(".imgKotak1");
const img2 = document.querySelector(".imgKotak2");
const img3 = document.querySelector(".imgKotak3");
const jdl1 = document.querySelector(".jdldes1");
const jdl2 = document.querySelector(".jdldes2");
const jdl3 = document.querySelector(".jdldes3");
// contact
const contact = document.querySelector(".contact");
const txtcon1 = document.querySelector(".textEmail");
const txtcon2 = document.querySelector(".textLokasi");
const txtcon3 = document.querySelector(".textTelepon");
const txtcon4 = document.querySelector(".textWa");
const txtfol1 = document.querySelector(".textlink");
const txtfol2 = document.querySelector(".textig");
const txtfol3 = document.querySelector(".textyt");
const txtfol4 = document.querySelector(".textfb");
const input1 = document.querySelector(".inputNama");
const input2 = document.querySelector(".inputEmail");
const input3 = document.querySelector(".inputSubject");
const input4 = document.querySelector(".inputMassage");
const button = document.querySelector(".button");
const bungkus = document.querySelector(".bungkus");
const form = document.querySelector(".form");
const hasil = document.querySelector(".hasil");
const tampilHasil = document.querySelector(".tampilHasil p");
const hasilInput = document.querySelector(".hasilInput");
// menjalankan Fungsi

// slide Show
pagination.forEach(function (pilih) {
  pilih.addEventListener("click", function (e) {
    if (e.target.className == "pil1") {
      gambar[0].classList.add("active");
      gambar[1].className = "gam";
      gambar[2].className = "gam";
    } else if (e.target.className == "pil2") {
      gambar[0].className = "gam";
      gambar[1].classList.add("active");
      gambar[2].className = "gam";
    } else if (e.target.className == "pil3") {
      gambar[0].className = "gam";
      gambar[1].className = "gam";
      gambar[2].classList.add("active");
    }
  });
});
// Choose data
Biodata.style.display = "none";
resume.style.display = "none";
project.style.display = "none";
contact.style.display = "none";
pilihan.forEach((pilih) => {
  pilih.addEventListener("click", function (e) {
    if (e.target.className == "data homes") {
      Home.style.display = "flex";
      Biodata.style.display = "none";
      resume.style.display = "none";
      project.style.display = "none";
      contact.style.display = "none";

      window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 992px)").matches) {
          Home2.style.display = "block";
          Biodata.style.display = "none";
          resume.style.display = "none";
          project.style.display = "none";
          contact.style.display = "none";
        } else {
          Home.style.display = "flex";
          Biodata.style.display = "none";
          resume.style.display = "none";
          project.style.display = "none";
          contact.style.display = "none";
        }
      });
      if (window.matchMedia("(max-width: 992px)").matches) {
        Home2.style.display = "block";
      } else {
        Home.style.display = "flex";
      }
    } else if (e.target.className == "data biodata") {
      Home.style.display = "none";
      resume.style.display = "none";
      project.style.display = "none";
      contact.style.display = "none";
      Biodata.style.display = "block";
      window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 992px)").matches) {
          Home2.style.display = "none";
          resume.style.display = "none";
          project.style.display = "none";
          contact.style.display = "none";
          Biodata.style.display = "block";
        } else {
          Home.style.display = "none";
          resume.style.display = "none";
          project.style.display = "none";
          contact.style.display = "none";
          Biodata.style.display = "block";
        }
      });
      if (window.matchMedia("(max-width: 992px)").matches) {
        Biodata.style.display = "block";
      } else {
        Home.style.display = "none";
      }
    } else if (e.target.className == "data resumes") {
      Home.style.display = "none";
      Biodata.style.display = "none";
      project.style.display = "none";
      contact.style.display = "none";
      resume.style.display = "block";
      size1();
      size2();
      size3();
      size4();
      size5();
      size6();
      kotak1();
      kotak2();
      kotak3();

      window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 992px)").matches) {
          Home2.style.display = "none";
          Biodata.style.display = "none";
          project.style.display = "none";
          contact.style.display = "none";
          resume.style.display = "block";
          dataSkill1.style.width = "50%";
          dataSkill2.style.width = "50%";
          dataSkill3.style.width = "50%";
          dataLang1.style.width = "50%";
          dataLang2.style.width = "50%";
          dataLang3.style.width = "50%";
        } else {
          Home.style.display = "none";
          Biodata.style.display = "none";
          project.style.display = "none";
          contact.style.display = "none";
          resume.style.display = "block";
          dataSkill1.style.width = "100%";
          dataSkill2.style.width = "100%";
          dataSkill3.style.width = "100%";
          dataLang1.style.width = "100%";
          dataLang2.style.width = "100%";
          dataLang3.style.width = "100%";
        }
      });
      if (window.matchMedia("(max-width: 992px)").matches) {
        resume.style.display = "block";
        dataSkill1.style.width = "50%";
        dataSkill2.style.width = "50%";
        dataSkill3.style.width = "50%";
        dataLang1.style.width = "50%";
        dataLang2.style.width = "50%";
        dataLang3.style.width = "50%";
      } else {
        Biodata.style.display = "none";
        Home.style.display = "none";
        project.style.display = "none";
        contact.style.display = "none";
        dataSkill1.style.width = "100%";
        dataSkill2.style.width = "100%";
        dataSkill3.style.width = "100%";
        dataLang1.style.width = "100%";
        dataLang2.style.width = "100%";
        dataLang3.style.width = "100%";
      }
    } else if (e.target.className == "data project") {
      Home.style.display = "none";
      Biodata.style.display = "none";
      resume.style.display = "none";
      contact.style.display = "none";
      project.style.display = "block";
      window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 992px)").matches) {
          Home2.style.display = "none";
          Biodata.style.display = "none";
          resume.style.display = "none";
          contact.style.display = "none";

          project.style.display = "block";
        } else {
          Home.style.display = "none";
          Biodata.style.display = "none";
          resume.style.display = "none";
          contact.style.display = "none";
          project.style.display = "block";
        }
      });
      if (window.matchMedia("(max-width: 992px)").matches) {
        project.style.display = "block";
      } else {
        project.style.display = "block";
      }
    } else if (e.target.className == "data pesan") {
      Home.style.display = "none";
      Biodata.style.display = "none";
      resume.style.display = "none";
      project.style.display = "none";
      contact.style.display = "block";
      window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 992px)").matches) {
          Home2.style.display = "none";
          Biodata.style.display = "none";
          resume.style.display = "none";
          project.style.display = "none";
          contact.style.display = "block";
        } else {
          Home.style.display = "none";
          Biodata.style.display = "none";
          resume.style.display = "none";
          project.style.display = "none";
          contact.style.display = "block";
        }
      });
      if (window.matchMedia("(max-width: 992px)").matches) {
        contact.style.display = "block";
      } else {
        contact.style.display = "block";
      }
    }
  });
});

// menampilkan databese
// data diri
nama.innerHTML = Data_Diri.orang1.Nama;
Divisi.innerHTML = Data_Diri.orang1.Divisi;
quotes.innerHTML = Data_Diri.orang1.quotes;
// about me
// data 1
let objData = `<ul class="list_bio1">
${Object.keys(Data_Diri.orang1.biotgl)
  .map((data) => {
    return `
    <li><h3 class="txt_list">${data}</h3><span>: ${Data_Diri.orang1.biotgl[data]}</span></li>
    `;
  })
  .join("")}</ul>`;
birth.innerHTML = objData;
// data 2
let objData2 = `<ul class="list_bio2">
${Object.keys(Data_Diri.orang1.bioUmur)
  .map((datas) => {
    return `
    <li><h3 class="txt_listU">${datas}</h3><span>: ${Data_Diri.orang1.bioUmur[datas]}</span></li>
    `;
  })
  .join("")}</ul>`;
age.innerHTML = objData2;

// resume
// education
const dataSD = `<ul>
<li><h3>${Data_Diri.orang1.sekolah.sd.namaSekolah}</h3></li>
<li><p>${Data_Diri.orang1.sekolah.sd.Tahun}</p></li>
<li><p>${Data_Diri.orang1.sekolah.sd.quotes}</p></li>
</ul>`;

const dataSMP = `<ul>
<li><h3>${Data_Diri.orang1.sekolah.smp.namaSekolah}</h3></li>
<li><p>${Data_Diri.orang1.sekolah.smp.Tahun}</p></li>
<li><p>${Data_Diri.orang1.sekolah.smp.quotes}</p></li>
</ul>`;

const dataSMA = `<ul>
<li><h3>${Data_Diri.orang1.sekolah.sma.namaSekolah}</h3></li>
<li><p>${Data_Diri.orang1.sekolah.sma.Tahun}</p></li>
<li><p>${Data_Diri.orang1.sekolah.sma.quotes}</p></li>
</ul>`;
sd.innerHTML = dataSD;
smp.innerHTML = dataSMP;
sma.innerHTML = dataSMA;

// resume
// experience
const dataKerja1 = `<ul>
<li><h3>${Data_Diri.orang1.Pekerjaan.kerja1.namaPT}</h3></li>
<li><p>${Data_Diri.orang1.Pekerjaan.kerja1.Tahun}</p></li>
<li><p>${Data_Diri.orang1.Pekerjaan.kerja1.hasil}</p></li>
</ul>`;

const datakerja2 = `<ul>
<li><h3>${Data_Diri.orang1.Pekerjaan.kerja2.namaPT}</h3></li>
<li><p>${Data_Diri.orang1.Pekerjaan.kerja2.Tahun}</p></li>
<li><p>${Data_Diri.orang1.Pekerjaan.kerja2.hasil}</p></li>
</ul>`;

const datakerja3 = `<ul>
<li><h3>${Data_Diri.orang1.Pekerjaan.kerja3.namaPT}</h3></li>
<li><p>${Data_Diri.orang1.Pekerjaan.kerja3.Tahun}</p></li>
<li><p>${Data_Diri.orang1.Pekerjaan.kerja3.hasil}</p></li>
</ul>`;
kerja1.innerHTML = dataKerja1;
kerja2.innerHTML = datakerja2;
kerja3.innerHTML = datakerja3;

// resume
// Skill 1
const txtskill1 = document.createElement("div");
const dataSkill1 = document.createElement("div");
const persenSkill1 = document.createElement("div");
dataSkill1.classList.add("persen-skill1");
txtskill1.classList.add("txtskill1");
skill1.appendChild(txtskill1);
dataSkill1.appendChild(persenSkill1);
txtskill1.after(dataSkill1);
const texth1 = `<h2>${Data_Diri.orang1.Skill.skill1.namaSkill}</h2>`;
persenSkill1.style.width = Data_Diri.orang1.Skill.skill1.persen;
persenSkill1.style.height = "5px";
persenSkill1.style.backgroundColor = "#b15247";
persenSkill1.style.borderRadius = "3px";
dataSkill1.style.borderRadius = "3px";
dataSkill1.style.width = "100%";
dataSkill1.style.height = "5px";
dataSkill1.style.backgroundColor = "rgb(193 177 177)";
txtskill1.innerHTML = texth1;
// persentase 1
function size1() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.Skill.skill1.persen) {
      clearInterval;
    } else {
      i++;
      persenSkill1.style.width = i + "%";
    }
  }, 10);
}

// skill 2
const txtskill2 = document.createElement("div");
const dataSkill2 = document.createElement("div");
const persenSkill2 = document.createElement("div");
dataSkill2.classList.add("persen-skill2");
txtskill2.classList.add("txtskill2");
skill2.appendChild(txtskill2);
dataSkill2.appendChild(persenSkill2);
txtskill2.after(dataSkill2);
const texth2 = `<h2>${Data_Diri.orang1.Skill.skill2.namaSkill}</h2>`;
persenSkill2.style.height = "5px";
persenSkill2.style.backgroundColor = "#b15247";
persenSkill2.style.borderRadius = "3px";
dataSkill2.style.borderRadius = "3px";
dataSkill2.style.width = "100%";
dataSkill2.style.height = "5px";
dataSkill2.style.backgroundColor = "rgb(193 177 177)";
txtskill2.innerHTML = texth2;
// persentase 2
function size2() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.Skill.skill2.persen) {
      clearInterval;
    } else {
      i++;
      persenSkill2.style.width = i + "%";
    }
  }, 10);
}
// skill 3
const txtskill3 = document.createElement("div");
const dataSkill3 = document.createElement("div");
const persenSkill3 = document.createElement("div");
dataSkill3.classList.add("persen-skill3");
txtskill3.classList.add("txtskill3");
skill3.appendChild(txtskill3);
dataSkill3.appendChild(persenSkill3);
txtskill3.after(dataSkill3);
const texth3 = `<h2>${Data_Diri.orang1.Skill.skill3.namaSkill}</h2>`;
persenSkill3.style.height = "5px";
persenSkill3.style.backgroundColor = "#b15247";
persenSkill3.style.borderRadius = "3px";
dataSkill3.style.borderRadius = "3px";
dataSkill3.style.width = "100%";
dataSkill3.style.height = "5px";
dataSkill3.style.backgroundColor = "rgb(193 177 177)";
txtskill3.innerHTML = texth3;
// persentase 3
function size3() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.Skill.skill3.persen) {
      clearInterval;
    } else {
      i++;
      persenSkill3.style.width = i + "%";
    }
  }, 10);
}

// language
// Language1
const txtLang1 = document.createElement("div");
const dataLang1 = document.createElement("div");
const persenLang1 = document.createElement("div");
dataLang1.classList.add("persen-skill3");
txtLang1.classList.add("txtskill3");
lang1.appendChild(txtLang1);
dataLang1.appendChild(persenLang1);
txtLang1.after(dataLang1);
const textl1 = `<h2>${Data_Diri.orang1.Language.bahasa1.namaBahasa}</h2>`;
persenLang1.style.height = "5px";
persenLang1.style.backgroundColor = "#b15247";
persenLang1.style.borderRadius = "3px";
dataLang1.style.borderRadius = "3px";
dataLang1.style.width = "100%";
dataLang1.style.height = "5px";
dataLang1.style.backgroundColor = "rgb(193 177 177)";
txtLang1.innerHTML = textl1;

function size4() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.Language.bahasa1.persen) {
      clearInterval;
    } else {
      i++;
      persenLang1.style.width = i + "%";
    }
  }, 10);
}

// Language2
const txtLang2 = document.createElement("div");
const dataLang2 = document.createElement("div");
const persenLang2 = document.createElement("div");
dataLang2.classList.add("persen-skill3");
txtLang2.classList.add("txtskill3");
lang2.appendChild(txtLang2);
dataLang2.appendChild(persenLang2);
txtLang2.after(dataLang2);
const textl2 = `<h2>${Data_Diri.orang1.Language.bahasa2.namaBahasa}</h2>`;
persenLang2.style.height = "5px";
persenLang2.style.backgroundColor = "#b15247";
persenLang2.style.borderRadius = "3px";
dataLang2.style.borderRadius = "3px";
dataLang2.style.width = "100%";
dataLang2.style.height = "5px";
dataLang2.style.backgroundColor = "rgb(193 177 177)";
txtLang2.innerHTML = textl2;

function size5() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.Language.bahasa2.persen) {
      clearInterval;
    } else {
      i++;
      persenLang2.style.width = i + "%";
    }
  }, 10);
}

// language3
const txtLang3 = document.createElement("div");
const dataLang3 = document.createElement("div");
const persenLang3 = document.createElement("div");
dataLang3.classList.add("persen-skill3");
txtLang3.classList.add("txtskill3");
lang3.appendChild(txtLang3);
dataLang3.appendChild(persenLang3);
txtLang3.after(dataLang3);
const textl3 = `<h2>${Data_Diri.orang1.Language.bahasa3.namaBahasa}</h2>`;
persenLang3.style.height = "5px";
persenLang3.style.backgroundColor = "#b15247";
persenLang3.style.borderRadius = "3px";
dataLang3.style.borderRadius = "3px";
dataLang3.style.width = "100%";
dataLang3.style.height = "5px";
dataLang3.style.backgroundColor = "rgb(193 177 177)";
txtLang3.innerHTML = textl3;

function size6() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.Language.bahasa3.persen) {
      clearInterval;
    } else {
      i++;
      persenLang3.style.width = i + "%";
    }
  }, 10);
}

// kotak saran
// kotak 1
const txt1 = document.createElement("h2");
txt1.style.textAlign = "center";
hasil1.appendChild(txt1);
function kotak1() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.hasil.hasil1) {
      clearInterval;
    } else {
      i++;
      txt1.innerHTML = i;
    }
  }, 50);
}

// kotak 2
const txt2 = document.createElement("h2");
txt2.style.textAlign = "center";
hasil2.appendChild(txt2);
function kotak2() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.hasil.hasil2) {
      clearInterval;
    } else {
      i++;
      txt2.innerHTML = i;
    }
  }, 50);
}

// kotak 3

const txt3 = document.createElement("h2");
txt3.style.textAlign = "center";
hasil3.appendChild(txt3);
function kotak3() {
  let i = 0;
  setInterval(function () {
    if (i == Data_Diri.orang1.hasil.hasil3) {
      clearInterval;
    } else {
      i++;
      txt3.innerHTML = i;
    }
  }, 50);
}

// isi Project
img1.innerHTML = Data_Diri.orang1.Prooject.Pro1.gambar1;
img2.innerHTML = Data_Diri.orang1.Prooject.Pro2.gambar1;
img3.innerHTML = Data_Diri.orang1.Prooject.Pro3.gambar1;
jdl1.innerHTML = `<h3>${Data_Diri.orang1.Prooject.Pro1.namePro}</h3>`;
jdl2.innerHTML = `<h3>${Data_Diri.orang1.Prooject.Pro2.namePro}</h3>`;
jdl3.innerHTML = `<h3>${Data_Diri.orang1.Prooject.Pro3.namePro}</h3>`;
const txtData1 = document.querySelector(".txtdes1");

// data
// pro1
let boxData1 = `<ul class="list_boxData1">
${Object.keys(Data_Diri.orang1.Prooject.Pro1.desPro1)
  .map((data) => {
    return `
    <li><p class="txt_boxData">${data} </p><span>${Data_Diri.orang1.Prooject.Pro1.desPro1[data]}</span></li>
    `;
  })
  .join("")}</ul>`;

txtData1.innerHTML = boxData1;
// pro2
const txtData2 = document.querySelector(".txtdes2");
let boxData2 = `<ul class="list_boxData2">
${Object.keys(Data_Diri.orang1.Prooject.Pro2.desPro2)
  .map((data) => {
    return `
    <li><p class="txt_boxData">${data} </p><span>${Data_Diri.orang1.Prooject.Pro2.desPro2[data]}</span></li>
    `;
  })
  .join("")}</ul>`;

txtData2.innerHTML = boxData2;

// pro3
const txtData3 = document.querySelector(".txtdes3");
let boxData3 = `<ul class="list_boxData3">
${Object.keys(Data_Diri.orang1.Prooject.Pro3.desPro3)
  .map((data) => {
    return `
    <li><p class="txt_boxData">${data} </p><span>${Data_Diri.orang1.Prooject.Pro3.desPro3[data]}</span></li>
    `;
  })
  .join("")}</ul>`;

txtData3.innerHTML = boxData3;

// data
// pesan
txtcon1.innerHTML = Data_Diri.orang1.pesan.kontak.email;
txtcon2.innerHTML = Data_Diri.orang1.pesan.kontak.lokasi;
txtcon3.innerHTML = Data_Diri.orang1.pesan.kontak.telepon;
txtcon4.innerHTML = Data_Diri.orang1.pesan.kontak.NoWa;

// data
// follow

txtfol1.innerHTML = Data_Diri.orang1.pesan.sosmed.linkedin;
txtfol2.innerHTML = Data_Diri.orang1.pesan.sosmed.instagram;
txtfol3.innerHTML = Data_Diri.orang1.pesan.sosmed.youtube;
txtfol4.innerHTML = Data_Diri.orang1.pesan.sosmed.facebook;

// data Inputan

button.addEventListener("click", function () {
  const Hasilnya = `<ul>
  <li><p>Nama  </p><span>${input1.value}</span></li>
  <li><p>Email  </p><span>${input2.value}</span></li>
  <li><p>Subject  </p><span>${input3.value}</span></li>
  <li><p>Massage  </p><span>${input4.value}</span></li>
  </ul>`;
  if (
    input1.value == "" ||
    input2.value == "" ||
    input3.value == "" ||
    input4.value == ""
  ) {
    alert("ada yang kosong tuh bro");
  } else {
    bungkus.style.display = "none";
    hasil.style.display = "block";
    tampilHasil.addEventListener("click", function () {
      hasilInput.style.display = "flex";
      hasilInput.innerHTML = Hasilnya;
      hasil.style.display = "none";
    });
  }
});
