const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function AddTask(){
    if(inputBox.value == '') {
        alert("Please Enter Your Task");
    } else {
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);

       let span = document.createElement("samp");
       span.innerHTML = "\u00d7";
       li.appendChild(span);
    }

    inputBox.value = '';
}