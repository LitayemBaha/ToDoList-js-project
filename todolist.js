let add=document.querySelector('.add');
let inputText=document.querySelector('.input-text');
add.addEventListener("click",(event)=>{ 
  if(inputText.value!==""){
    let li= document.createElement("li");
    let text = document.createTextNode(inputText.value);
    let img= document.createElement("img");
    text.width="50";
    img.src="https://png.icons8.com/metro/1600/trash.png";
    img.className="trash";
    li.appendChild(text);
    li.appendChild(img);
    document.querySelector(".list").appendChild(li);
    inputText.value="";
  }
delate=document.querySelectorAll('.trash');
for(let i of delate){
  i.addEventListener("click",(event)=>{ 
  i.parentNode.remove(i);
  });
}
});

