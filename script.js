//alert("loading");

function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function generateCV(){
            let nameFiled = document.getElementById("nameField").value;
            console.log(nameFiled);
            let nameT1= document.getElementById("nameT1");    
            nameT1.innerHTML = nameFiled;

            //simple way 
             document.getElementById("nameT2").innerHTML = document.getElementById("nameField").value;
             document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
             document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
             document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
             document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

             //Objective
             document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;

        //Work Exprience
            let wes = document.getElementsByClassName("weField"); 
            let str="";
             for(let e of wes){   
                    str = str +`<li>${e.value}</li>`;    
            }   
             document.getElementById("weT").innerHTML = str;

            //Academic Qualification
             let aqs = document.getElementsByClassName("aqField"); 
            let str1="";
             for(let e of aqs){   
                    str1 = str1 +`<li>${e.value}</li>`;    
            }   
             document.getElementById("aqT").innerHTML = str1;

  
  //Hide form and CV Templet

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-templet").style.display = "block";
       
} 

//Print CV
function printCV(){
    window.print();
}
 