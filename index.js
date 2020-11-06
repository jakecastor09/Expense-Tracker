const name = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const add = document.querySelector(".add-expenses");
const table = document.querySelector("tbody");
const mainTable = document.querySelector(".main-table");

const data = [name, date, amount];
add.addEventListener("click", () => {
  tableContent(name, date, amount);
  data.map((item) => (item.value = ""));
});

function tableContent(name, date, amount) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const button = document.createElement("button");
  const tableData = [td1, td2, td3];

  button.textContent = "Delete";
  button.classList.add("btn", "btn-red", "btn-delete");

  tableData.forEach((data, index) => {
    const tdValue = [name, date, amount];
    data.textContent =
      data !== td3 ? tdValue[index].value : "₱" + tdValue[index].value;
  });

  tableData.map((data) => {
    tr.appendChild(data);
  });

  td4.appendChild(button);
  tr.appendChild(td4);
  table.appendChild(tr);
}

document.addEventListener("click", (e) => {
  if (e.target.className.includes("btn-delete")) {
    console.log(e.path[2].remove());
  }
});
