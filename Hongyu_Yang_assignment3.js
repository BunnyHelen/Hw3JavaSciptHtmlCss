/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const q1 = document.getElementById("Q1");
let table = document.createElement("table");
q1.appendChild(table);

let trH = document.createElement("tr");
table.appendChild(trH);

function addTableHead(name) {
  let th = document.createElement("th");
  th.textContent = name;
  return th;
}

tableInfo.tableHeader.forEach((ele) => {
  trH.appendChild(addTableHead(ele));
});

function addTd(name) {
  let td = document.createElement("td");
  td.textContent = name;
  return td;
}

tableInfo.tableContent.forEach((ele) => {
  let trB = document.createElement("tr");
  table.appendChild(trB);
  trB.appendChild(addTd(ele["Student Name"]));
  trB.appendChild(addTd(ele.Age));
  trB.appendChild(addTd(ele.Phone));
  trB.appendChild(addTd(ele.Address));
});

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const q2 = document.getElementById("Q2");
let ol = document.createElement("ol");
q2.appendChild(ol);

function addLi(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

list.forEach((ele) => {
  ol.appendChild(addLi(ele));
});

let ul = document.createElement("ul");
q2.appendChild(ul);

list.forEach((ele) => {
  ul.appendChild(addLi(ele));
});

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const q3 = document.getElementById("Q3");
let select = document.createElement("select");
select.name = "areas";
q3.appendChild(select);

function addOption(value, name) {
  let option = document.createElement("option");
  option.value = value;
  option.textContent = name;
  return option;
}

dropDownList.forEach((ele) => {
  select.appendChild(addOption(ele.value, ele.content));
});
