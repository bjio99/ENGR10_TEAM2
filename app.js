// C++ Pathway
const fall2021 = document.getElementById("Fall2021");
const userObj = localStorage.getItem("LastUser");

const w2022_1 = document.getElementById("w2022-1");
const w2022_2 = document.getElementById("w2022-2");
const w2022_3 = document.getElementById("w2022-3");
const w2022_4 = document.getElementById("w2022-4");

const s2022_1 = document.getElementById("s2022-1");
const s2022_2 = document.getElementById("s2022-2");
const s2022_3 = document.getElementById("s2022-3");
const s2022_4 = document.getElementById("s2022-4");

const f2022_1 = document.getElementById("f2022-1");
const f2022_2 = document.getElementById("f2022-2");
const f2022_3 = document.getElementById("f2022-3");
const f2022_4 = document.getElementById("f2022-4");

const w2023_1 = document.getElementById("w2023-1");
const w2023_2 = document.getElementById("w2023-2");
const w2023_3 = document.getElementById("w2023-3");
const w2023_4 = document.getElementById("w2023-4");

const s2023_1 = document.getElementById("s2023-1");
const s2023_2 = document.getElementById("s2023-2");
const s2023_3 = document.getElementById("s2023-3");
const s2023_4 = document.getElementById("s2023-4");

// Java Pathway
const f2021_1j = document.getElementById("f2021-1j");
const f2021_2j = document.getElementById("f2021-2j");
const f2021_3j = document.getElementById("f2021-3j");
const f2021_4j = document.getElementById("f2021-4j");

const w2022_1j = document.getElementById("w2022-1j");
const w2022_2j = document.getElementById("w2022-2j");
const w2022_3j = document.getElementById("w2022-3j");
const w2022_4j = document.getElementById("w2022-4j");

const s2022_1j = document.getElementById("s2022-1j");
const s2022_2j = document.getElementById("s2022-2j");
const s2022_3j = document.getElementById("s2022-3j");
const s2022_4j = document.getElementById("s2022-4j");

const f2022_1j = document.getElementById("f2022-1j");
const f2022_2j = document.getElementById("f2022-2j");
const f2022_3j = document.getElementById("f2022-3j");
const f2022_4j = document.getElementById("f2022-4j");

const w2023_1j = document.getElementById("w2023-1j");
const w2023_2j = document.getElementById("w2023-2j");
const w2023_3j = document.getElementById("w2023-3j");
const w2023_4j = document.getElementById("w2023-4j");

const s2023_1j = document.getElementById("s2023-1j");
const s2023_2j = document.getElementById("s2023-2j");
const s2023_3j = document.getElementById("s2023-3j");

let selection;

var classList;

async function getClassList() {
  try {
    const data = await d3.csv("List_Of_Classes.csv", (data) => {
      return data;
    });
    //console.log(data);
    //classList = data;
    //console.log(classList);
    return data;
  } catch (error) {
    console.log("ERROR: Can't read input.");
  }
}

const show = async () => {
  classList = await getClassList();

  const card = document.createElement("div");
  const cardHeader = document.createElement("div");
  const cardHeaderElement = document.createElement("h3");
  const cardList1 = document.createElement("div");
  const cardList2 = document.createElement("div");
  const cardList3 = document.createElement("div");
  const cardList4 = document.createElement("div");

  card.classList.add("card");
  cardHeader.classList.add("card-header");
  cardHeaderElement.innerHTML = "Fall 2021";
  cardHeader.appendChild(cardHeaderElement);
  cardList1.classList.add("card-list");
  cardList2.classList.add("card-list");
  cardList3.classList.add("card-list");
  cardList4.classList.add("card-list");

  selection = JSON.parse(localStorage.getItem(userObj));

  if (selection.selection === 1) {
    cardList1.innerHTML = classList[10].ClassName;
    cardList2.innerHTML = classList[1].ClassName;
    cardList3.innerHTML = "General Education";
    cardList4.innerHTML = "General Education";

    card.appendChild(cardHeader);
    card.appendChild(cardList1);
    card.appendChild(cardList2);
    card.appendChild(cardList3);
    card.appendChild(cardList4);

    fall2021.appendChild(card);

    // Test to display classes on console
    console.log(classList[1].ClassName);

    w2022_1.innerHTML = classList[2].ClassName;
    w2022_2.innerHTML = classList[11].ClassName;
    w2022_3.innerHTML = "General Education";
    w2022_4.innerHTML = "General Education";

    s2022_1.innerHTML = classList[3].ClassName;
    s2022_2.innerHTML = classList[12].ClassName;
    s2022_3.innerHTML = "General Education";
    s2022_4.innerHTML = "General Education";

    f2022_1.innerHTML = classList[0].ClassName;
    f2022_2.innerHTML = classList[4].ClassName;
    f2022_3.innerHTML = classList[8].ClassName;
    f2022_4.innerHTML = "General Education";

    w2023_1.innerHTML = classList[5].ClassName;
    w2023_2.innerHTML = classList[7].ClassName;
    w2023_3.innerHTML = classList[9].ClassName;
    w2023_4.innerHTML = "General Education";

    s2023_1.innerHTML = classList[6].ClassName;
    s2023_2.innerHTML = "General Education";
    s2023_3.innerHTML = "General Education";
    s2023_4.innerHTML = "General Education";

    const hideJava = document.getElementById("java");
    hideJava.classList.add("hide");
  } else if (selection.selection === 2) {
    f2021_1j.innerHTML = classList[1].ClassName;
    f2021_2j.innerHTML = classList[13].ClassName;
    f2021_3j.innerHTML = "General Education";

    w2022_1j.innerHTML = classList[2].ClassName;
    w2022_2j.innerHTML = classList[7].ClassName;
    w2022_3j.innerHTML = "General Education";
    w2022_4j.innerHTML = "General Education";

    s2022_1j.innerHTML = classList[3].ClassName;
    s2022_2j.innerHTML = classList[8].ClassName;
    s2022_3j.innerHTML = "General Education";
    s2022_4j.innerHTML = "General Education";

    f2022_1j.innerHTML = classList[4].ClassName;
    f2022_2j.innerHTML = classList[9].ClassName;
    f2022_3j.innerHTML = "General Education";
    f2022_4j.innerHTML = "General Education";

    w2023_1j.innerHTML = classList[5].ClassName;
    w2023_2j.innerHTML = classList[0].ClassName;
    w2023_3j.innerHTML = "General Education";
    w2023_4j.innerHTML = "General Education";

    s2023_1j.innerHTML = classList[6].ClassName;
    s2023_2j.innerHTML = "General Education";
    s2023_3j.innerHTML = "General Education";

    const hideCpp = document.getElementById("cpp");
    hideCpp.classList.add("hide");
  } else {
    cardList1.innerHTML = classList[10].ClassName;
    cardList2.innerHTML = classList[1].ClassName;
    cardList3.innerHTML = "General Education";
    cardList4.innerHTML = "General Education";

    card.appendChild(cardHeader);
    card.appendChild(cardList1);
    card.appendChild(cardList2);
    card.appendChild(cardList3);
    card.appendChild(cardList4);

    fall2021.appendChild(card);

    // Test to display classes on console
    console.log(classList[1].ClassName);

    w2022_1.innerHTML = classList[2].ClassName;
    w2022_2.innerHTML = classList[11].ClassName;
    w2022_3.innerHTML = "General Education";
    w2022_4.innerHTML = "General Education";

    s2022_1.innerHTML = classList[3].ClassName;
    s2022_2.innerHTML = classList[12].ClassName;
    s2022_3.innerHTML = "General Education";
    s2022_4.innerHTML = "General Education";

    f2022_1.innerHTML = classList[0].ClassName;
    f2022_2.innerHTML = classList[4].ClassName;
    f2022_3.innerHTML = classList[8].ClassName;
    f2022_4.innerHTML = "General Education";

    w2023_1.innerHTML = classList[5].ClassName;
    w2023_2.innerHTML = classList[7].ClassName;
    w2023_3.innerHTML = classList[9].ClassName;
    w2023_4.innerHTML = "General Education";

    s2023_1.innerHTML = classList[6].ClassName;
    s2023_2.innerHTML = "General Education";
    s2023_3.innerHTML = "General Education";
    s2023_4.innerHTML = "General Education";

    f2021_1j.innerHTML = classList[1].ClassName;
    f2021_2j.innerHTML = classList[13].ClassName;
    f2021_3j.innerHTML = "General Education";

    w2022_1j.innerHTML = classList[2].ClassName;
    w2022_2j.innerHTML = classList[7].ClassName;
    w2022_3j.innerHTML = "General Education";
    w2022_4j.innerHTML = "General Education";

    s2022_1j.innerHTML = classList[3].ClassName;
    s2022_2j.innerHTML = classList[8].ClassName;
    s2022_3j.innerHTML = "General Education";
    s2022_4j.innerHTML = "General Education";

    f2022_1j.innerHTML = classList[4].ClassName;
    f2022_2j.innerHTML = classList[9].ClassName;
    f2022_3j.innerHTML = "General Education";
    f2022_4j.innerHTML = "General Education";

    w2023_1j.innerHTML = classList[5].ClassName;
    w2023_2j.innerHTML = classList[0].ClassName;
    w2023_3j.innerHTML = "General Education";
    w2023_4j.innerHTML = "General Education";

    s2023_1j.innerHTML = classList[6].ClassName;
    s2023_2j.innerHTML = "General Education";
    s2023_3j.innerHTML = "General Education";
  }
};

show();
