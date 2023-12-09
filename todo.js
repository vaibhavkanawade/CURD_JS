// const heading = document.getElementById('head');
// heading.style.fontFamily = 'Courier New';


// const button = document.getElementById("head");

// button.addEventListener("click",()=>{
//     head.style.fontFamily = 'Courier New';
// })


// const btns= document.getElementsByClassName("btn");
// for(let i=0;i<btns.length;i++){
//   btns[i].addEventListener('click' , function(event){
//       let text =event.target.innerText;

//       document.getElementById("inp").value = text ;
//   })
// }



// const list=document.getElementById("list");
// const input = document.getElementById("input");
// document.getElementById("btn").addEventListener("click",(event)=>{
//     // const value = input.value;
//     const li=document.createElement("li");
//     const btn=document.createElement("button");
//     btn.innerText=`Delete Me`;

//     btn.addEventListener=("click",(event)=>{
//         list.removeChild(event.target.closest("li"));
//     })
//     li.appendChild(input.value,btn);
//     // list.innerHTML = `${list.innerHTML} <li> ${value} <button>Delete</button>`;
//   li.className="Myclass";
//   list.appendChild(li)

// })

const list = document.getElementById("list");
const input = document.getElementById("input");
const todobtn = document.getElementById("btn");
// document.getElementById("btn").addEventListener("click", (event) => {


   


 let todoListener=()=>{
    const trimmedInput = input.value.trim();
    if (trimmedInput !== '') {

    const li = document.createElement("li");
    const btnDel = document.createElement("button");
    const btnEdit = document.createElement("button");

    btnDel.innerText = ` Delete`
    btnEdit.innerText = `Edit`

    btnDel.addEventListener("click", (event) => {

        list.removeChild(event.target.closest("li"));
    })

    btnEdit.addEventListener("click", (event) => {
        console.log(event.target);
        // another method
        /* const listItem = event.target.closest("li");
         const text = listItem.firstChild.nodeValue;

         input.value = text;
         list.removeChild(listItem);*/
        const listItem = event.target.closest("li");
        const splitArr = listItem.innerText.split("Delete");
        input.value = splitArr[0];

        todobtn.innerText="update Value";
        //update the button name on edit
        todobtn.removeEventListener("click",todoListener,{passive: true});
        const updateListener= (event)=>{
            const h3 = listItem.childNodes[0];

            let value = input.value;
            h3.innerText= value;

            input.value=" ";
            todobtn.innerText = " Add ";

            todobtn.removeEventListener("click",updateListener,{passive: true})
            todobtn.addEventListener("click",todoListener);

        }

        todobtn.addEventListener("click",updateListener)
    })

    const h3 = document.createElement("h3");
    h3.innerText = input.value;




    li.append( h3,btnDel,btnEdit)
  

    btnDel.className = "del";
    btnEdit.className = "edit";
    li.className = "myclass";

   
    list.appendChild(li);
    input.value = " ";



 }else {
    alert("Input cannot be empty!");
}
 }
 todobtn.addEventListener("click" ,todoListener)



