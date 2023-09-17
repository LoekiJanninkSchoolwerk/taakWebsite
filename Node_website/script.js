

let emptyInput = JSON.parse(localStorage.getItem("input"))

if (emptyInput == null){
      emptyInput = []  
    }

function task(){
let input = document.getElementById("addTask").value;
if ( input ){
emptyInput.push(input)

 let setInput = JSON.stringify(emptyInput)

localStorage.setItem("input",setInput);
} else{
    alert("fill in a task")
}

}
// 

window.addEventListener("load",loadingInput)


function loadingInput(){

    let gottenInput = JSON.parse(localStorage.getItem("input"))
    if(gottenInput != null){
        for(let i =0 ; i < gottenInput.length; i++){

            let bigDiv = document.createElement("div");

            let h1 = document.createElement("h1")
            h1.innerHTML = gottenInput[i];
            h1.classList.add('Styleh1')
            h1.setAttribute("id",i)
            let div = document.getElementById("class");
            div.appendChild(bigDiv)
            bigDiv.appendChild(h1)

           
        

            let editClass = document.createElement("i");
            editClass.classList.add("bi","bi-pencil-square");
            bigDiv.appendChild(editClass)
            editClass.addEventListener('click', edit)

            
            let doneIcon = document.createElement("i");
            doneIcon.classList.add("bi","bi-check-circle-fill");
            bigDiv.appendChild(doneIcon);
            doneIcon.addEventListener('click', doneBtn)
            

            let button = document.createElement("button");
            button.classList.add('styleBtn');
            button.innerHTML = "Delete";
            bigDiv.appendChild(button)
            button.addEventListener("click",deleteValue);
            bigDiv.classList.add('bigDivDesign');

            
            
         }

    }

   
    let historyArray = JSON.parse(localStorage.getItem("history"))
    if (historyArray != null){
        for( let i = 0; i <historyArray.length; i++){
            
           

            let bigdiv = document.createElement("div")



            let h1 = document.createElement("h1");
            h1.innerHTML = historyArray[i];
            let div = document.getElementById("historyDiv");
        

            bigdiv.appendChild(h1)
            h1.setAttribute("id", i);
            h1.classList.add("historyH1")
            div.appendChild(bigdiv)


            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("bi", "bi-x-lg");
            bigdiv.appendChild(deleteIcon)
            deleteIcon.addEventListener("click",deleteDonebtn)
            bigdiv.classList.add('bigDivDesign2');
        }

        }
    }


// this one delets value from list




let index;



function edit (e){

let editForm = document.getElementById("editForm");
editForm.classList.toggle('editedForm');

let edit = e.target;
let sister = edit.previousElementSibling;
index = sister.getAttribute("id");

}
let btn = document.getElementById("editBtn");
btn.addEventListener("click", changeV)


function changeV(e){
let newValue = document.getElementById("editInput").value;
if (newValue){

let newIput = JSON.parse(localStorage.getItem("input"));
console.log(newIput);
newIput[index] = newValue;
console.log(newIput);

localStorage.setItem("input", JSON.stringify( newIput)  )
}else {
    alert("fill in a new task")
}
}


function  doneBtn(e){
    
   
    let doneBtn = e.target;
    let littleSis = doneBtn.previousElementSibling;
    let finelLittleSis = littleSis.previousElementSibling;
    let finaleSis = finelLittleSis.innerHTML
    let idSis = finelLittleSis.getAttribute("id")
  
    
    historyArray.push(finaleSis);
   localStorage.setItem("history",JSON.stringify(historyArray) )
   console.log(historyArray)

   let deletesis = JSON.parse(localStorage.getItem("input"))
    deletesis.splice(idSis,1);
    localStorage.setItem("input",JSON.stringify(deletesis));

   location.reload();
}




let historyArray = JSON.parse(localStorage.getItem("history"));

if (historyArray == null){
    historyArray = []
}



function deleteValue(e){

    let button = e.target
    let brother = button.previousElementSibling;
    let secBrother = brother.previousElementSibling;
    let finalBrother = secBrother.previousElementSibling;
    let FinalValue = finalBrother.getAttribute("id");
    let getInput = JSON.parse(localStorage.getItem("input"));
    getInput.splice(FinalValue,1);
    localStorage.setItem ("input",JSON.stringify(getInput))
    
    location.reload()
    
    }

    function deleteDonebtn (e){
        let delBtn = e.target
        let smallBrother = delBtn.previousElementSibling;
        finaleValueSmallBrother = smallBrother.getAttribute("id");
       let deleteBrother = JSON.parse(localStorage.getItem("history"));
       deleteBrother.splice(finaleValueSmallBrother,1);
       localStorage.setItem ("history",JSON.stringify(deleteBrother));

       location.reload()

    }



  

function clicktext(){
  let text = document.getElementById("historyDiv")
  text.classList.toggle("y");
  let icon = document.getElementById("iconlow");
  icon.classList.toggle("iconn")
}
   
        