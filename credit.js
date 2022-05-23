let buttonStart = document.getElementById("btn_cred");
let nameInput = document.getElementById("name_cred");
let sumInput = document.getElementById("sum_cred");
let dateInput = document.getElementById("date_cred");

let buttonStart_2 = document.getElementById("btn_cred_2");
let nameInput_2 = document.getElementById("name_cred_2");
let sumInput_2 = document.getElementById("sum_cred_2");
let dateInput_2 = document.getElementById("date_cred_2");

let credAll = document.getElementById('new_cred');
let credAll_2 = document.getElementById('new_cred_2');


function createNewElement(name, sum, date) {
    // сщхдание нового итема

    let listItem = document.createElement("li");
    listItem.className = "listItem";

    let inputDiv = document.createElement("div");
    inputDiv.className = "inputDiv";

    let labelName = document.createElement("label");
    labelName.className = "labelTxt";
    labelName.innerHTML = name;

    let labelSum = document.createElement("label");
    labelSum.className = "labelTxt";
    labelSum.innerHTML = sum;

    let labelDate = document.createElement("label");
    labelDate.className = "labelDate";
    labelDate.innerHTML = date;

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";


    let close = document.createElement("button");
    close.className = "closeBtn";
    close.innerHTML = '<i class="fas fa-times-circle"></i>';

    buttonDiv.appendChild(close);

    inputDiv.appendChild(labelName);
    inputDiv.appendChild(labelSum);
    inputDiv.appendChild(labelDate);

    listItem.appendChild(inputDiv);
    listItem.appendChild(buttonDiv);

    return listItem;
}



buttonStart.onclick = function addTask() {
    if (nameInput.value && dateInput.value && sumInput.value) {
        let NewItem = createNewElement(nameInput.value, sumInput.value, dateInput.value);
        credAll.appendChild(NewItem);
    }
}


function createNewElement_2(name, sum, date) {
    // сщхдание нового итема

    let listItem = document.createElement("li");
    listItem.className = "listItem";

    let inputDiv = document.createElement("div");
    inputDiv.className = "inputDiv";

    let labelName_2= document.createElement("label");
    labelName_2.className = "labelTxt";
    labelName_2.innerHTML = name;

    let labelSum_2 = document.createElement("label");
    labelSum_2.className = "labelTxt";
    labelSum_2.innerHTML = sum;

    let labelDate_2 = document.createElement("label");
    labelDate_2.className = "labelDate";
    labelDate_2.innerHTML = date;

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";


    let close = document.createElement("button");
    close.className = "closeBtn";
    close.innerHTML = '<i class="fas fa-times-circle"></i>';

    buttonDiv.appendChild(close);

    inputDiv.appendChild(labelName_2);
    inputDiv.appendChild(labelSum_2);
    inputDiv.appendChild(labelDate_2);

    listItem.appendChild(inputDiv);
    listItem.appendChild(buttonDiv);

    return listItem;
}



buttonStart_2.onclick = function addTask_2() {
    if (nameInput_2.value && dateInput_2.value && sumInput_2.value) {
        let NewItem_2 = createNewElement_2(nameInput_2.value, sumInput_2.value, dateInput_2.value);
        credAll_2.appendChild(NewItem_2);
    }
}