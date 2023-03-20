var pos = 0;
var sakt = 0;
var chA, chB, chC, choice, optn;
var mainH = document.getElementById("mainH");

var matPytjet = [
  {
    question: "Sa bëjnë 36 + 42",
    a: "64",
    b: "78",
    c: "76",
    answer: "B",
  },
  {
    question: "Sa bëjnë 7 x 4?",
    a: "21",
    b: "27",
    c: "28",
    answer: "C",
  },
  {
    question: "Sa bëjnë 16 / 2?",
    a: "8",
    b: "2",
    c: "3",
    answer: "A",
  },
  {
    question: "Sa bëjnë 8 x 10?",
    a: "82",
    b: "99",
    c: "80",
    answer: "C",
  },
  {
    question: "Sa bëjnë 3 + 5",
    a: "8",
    b: "9",
    c: "10",
    answer: "A",
  },
];

var shkencPytje = [
  {
    question:
      "Cili është planeti më i largët nga dielli në sistemin tonë diellor?",
    a: "Mërkuri",
    b: "Pluto",
    c: "Neptuni",
    answer: "C",
  },
  {
    question:
      "Sa kohë i duhet tokës për të bërë një rrotullim të plotë rreth diellit?",
    a: "7",
    b: "120",
    c: "360",
    answer: "B",
  },
  {
    question: "Sa është jetgjatësia e rruazave të kuqe të gjakut?",
    a: "60",
    b: "120",
    c: "180",
    answer: "B",
  },
  {
    question: "Densiteti i ujit është __________?",
    a: "2 g/cm^3",
    b: "1.5 g/cm^3",
    c: "1 g/cm^3",
    answer: "C",
  },
  {
    question: "Radioaktiviteti u zbulua nga __________?",
    a: "kelvin",
    b: "Thomson",
    c: "Bacquerel",
    answer: "C",
  },
];

var historiPytje = [
  {
    question: "Sa vite në mes kishin dy luftërat botërore?",
    a: "10",
    b: "20",
    c: "30",
    answer: "B",
  },
  {
    question: "Beteja e Galipolit u zhvillua gjatë:",
    a: "Luftës së Parë Botërore",
    b: "Luftës së Parë Ballkanike",
    c: "Luftës së Dytë Botërore",
    answer: "A",
  },
  {
    question: "Lidhja Shqiptare e Prizrenit u mbajt me:",
    a: "10 qershor 1878",
    b: "10 Korrik 1878",
    c: "10 maj 1881",
    answer: "B",
  },
  {
    question: "Kryetar i Lidhjes Shqiptare të Prizrenit u zgjodh:",
    a: "Abdyl Frashëri",
    b: "Iliaz pashë Dibra",
    c: "Ymer Prizreni",
    answer: "C",
  },
  {
    question: "Marigo Pysia:",
    a: "Ishte mësuesja e parë në shkollën e vajzave",
    b: "Ishte kryetare e Lidhjës së Pejës",
    c: "Qëndisi flamurin kombëtar",
    answer: "C",
  },
];

var csPytjet = [
  {
    question: "Si e shkruani një deklaratë if?",
    a: "else()",
    b: "als()",
    c: "if()",
    answer: "C",
  },
  {
    question: "Cili cikël while është i saktë?",
    a: "while (true) { }",
    b: "while true { }",
    c: "continue (true) { }",
    answer: "A",
  },
  {
    question: "Cili do të kthejë një vlerë?",
    a: "rerun 2;",
    b: "return 1;",
    c: "give 1;",
    answer: "B",
  },
  {
    question: "Cili lloj është i gabuar?",
    a: "int",
    b: "double",
    c: "array",
    answer: "C",
  },
  {
    question: "Cili funksion është i saktë?",
    a: "void function [ ] ( )",
    b: "void function () { }",
    c: "function [] { }",
    answer: "B",
  },
];

function quiz(ques) {
  var head = document.getElementById("head");
  if (pos >= ques.length) {
    head.innerHTML =
      "<center><h3 class='badge badge-dark p-3 status' style='font-size:30px; border-radius:30px;'> Saktë : " +
      sakt +
      " prej " +
      ques.length +
      " Pyetjeve</h3> <br> <h3 class='badge badge-dark p-3 status' style='font-size:30px; border-radius:30px;'> Pikët : " +
      (sakt / ques.length) * 100 +
      " % </h3> </center> <hr/>";
    mainH.innerHTML += " Pikët ";
    var btn = document.createElement("button");
    btn.innerHTML = "Provo përsëri?";
    btn.className += "btn btn-outline-primary font-weight-bold m-auto";

    btn.onclick = function () {
      pos = 0;
      sakt = 0;
      quiz(ques);
    };

    var btn1 = document.createElement("button");
    btn1.innerHTML = "Mbrapa";
    btn1.className += "btn btn-outline-dark font-weight-bold m-auto";
    btn1.onclick = function () {
      window.location = "index.html";
    };

    var div = document.createElement("div");
    div.className += "text-center";
    div.appendChild(btn);
    div.appendChild(btn1);
    head.appendChild(div);
  } else {
    var question = ques[pos].question;
    chA = ques[pos].a;
    chB = ques[pos].b;
    chC = ques[pos].c;
    var indx = pos + 1;

    head.innerHTML =
      "<h5 class='bg-dark p-2'>" + indx + " : " + question + "</h5>";
    head.innerHTML +=
      "<label class='bg-dark font-weight-bold'><input type ='radio' name='choices' value='A'>" +
      chA +
      "</label>";
    head.innerHTML +=
      "<label class='bg-dark font-weight-bold'><input type ='radio' name='choices' value='B'>" +
      chB +
      "</label>";
    head.innerHTML +=
      "<label class='bg-dark font-weight-bold'><input type ='radio' name='choices' value='C'>" +
      chC +
      "</label> <hr>";
    head.innerHTML +=
      "<div class='text-center'><button onclick='c(optn)' class='btn btn-outline-success m-auto font-weight-bold'> Vazhdo </button> </div>";
    head.className += " text-white";
    head.style.backgroundColor = "whitesmoke";
    document.body.style.backgroundImage = "url('bg.jpg')";
  }
}

function c(ques) {
  var choices = document.getElementsByName("choices");

  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  if (choice == ques[pos].answer) {
    sakt++;
  }
  pos++;
  quiz(ques);
}

window.onload = function () {
  var logo = document.createElement("img");
  logo.src = "quiz.jpg";
  logo.style.width = "180px";
  logo.style.width = "180px";
  logo.style.display = "block";
  logo.style.margin = "auto";
  logo.style.borderRadius = "100px";
  logo.style.marginTop = "20px";
  logo.style.marginBottom = "30px";
  head.appendChild(logo);

  var heading = document.createElement("h4");
  heading.innerText = "Mirësevini në kuiz";
  heading.id = "select";
  heading.className = "disabled text-center d-block w-100";
  heading.style.fontSize = "25px";
  heading.style.marginBottom = "30px";
  heading.style.borderRadius = "30px";
  document.body.style.backgroundImage = "url('bg.jpg')";
  head.className += " text-center";
  head.style.backgroundColor = "white";
  head.appendChild(heading);

  var starQuiz = document.createElement("button");
  starQuiz.innerText = "Fillo Kuizin";
  starQuiz.style.margin = "auto";
  starQuiz.style.borderRadius = "20px";
  starQuiz.className += "btn btn-outline-dark font-weight-bold";
  head.appendChild(starQuiz);

  starQuiz.onclick = function dispMenu() {
    mainH.innerHTML = "Katalogu";
    heading.style.marginBottom = "30px";
    heading.innerText = "Zgjidh kuizin që dëshironi";
    heading.id = "select";

    var math = document.createElement("button");
    math.innerText = "Matematikë";
    math.className = "btn btn-outline-success font-weight-bold d-inline w-25";
    head.appendChild(math);

    math.onclick = function () {
      quiz(matPytjet);
      head.classList.remove("text-center");
      optn = matPytjet;
      mainH.innerHTML = math.innerText;
    };

    var science = document.createElement("button");
    science.innerText = "Shkencë";
    science.className = "btn btn-outline-danger font-weight-bold d-inline w-25";
    head.appendChild(science);

    science.onclick = function () {
      quiz(shkencPytje);
      head.classList.remove("text-center");
      optn = shkencPytje;
      mainH.innerHTML = science.innerText;
    };

    var history = document.createElement("button");
    history.innerText = "Histori";
    history.className =
      "btn btn-outline-primary font-weight-bold d-inline w-25";
    head.appendChild(history);

    history.onclick = function () {
      quiz(historiPytje);
      head.classList.remove("text-center");
      optn = historiPytje;
      mainH.innerHTML = history.innerText;
    };

    var cs = document.createElement("button");
    cs.innerText = "Programim";

    cs.className = "btn btn-outline-warning font-weight-bold d-inline w-25";
    head.appendChild(cs);

    cs.onclick = function () {
      quiz(csPytjet);
      head.classList.remove("text-center");
      mainH.innerHTML = cs.innerText;
      optn = csPytjet;
    };

    starQuiz.style.display = "none";
  };
};
