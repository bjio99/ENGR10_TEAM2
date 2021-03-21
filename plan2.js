// C++ Pathway

const userObj = localStorage.getItem("LastUser");

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

  selection = JSON.parse(localStorage.getItem(userObj));

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
};

show();
