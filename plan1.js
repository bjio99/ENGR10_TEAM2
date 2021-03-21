// C++ Pathway

const userObj = localStorage.getItem("LastUser");

const f2021_1 = document.getElementById("f2021-1");
const f2021_2 = document.getElementById("f2021-2");
const f2021_3 = document.getElementById("f2021-3");
const f2021_4 = document.getElementById("f2021-4");

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

  f2021_1.innerHTML = classList[1].ClassName;
  f2021_2.innerHTML = classList[10].ClassName;
  f2021_3.innerHTML = "General Education";
  f2021_4.innerHTML = "General Education";

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
};

show();
