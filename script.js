const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true")
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    inputBox.addEventListener("keyup", () => {
        updateStorage();
    });
    updateStorage();
})
function showNotes(){
    let notes = localStorage.getItem("NOTES")
    if(notes){
        notesContainer.innerHTML = notes;
        document.querySelectorAll(".input-box").forEach(note=>{
            note.addEventListener("keyup",()=>{
                updateStorage();
            })
        })
    }
    
}

showNotes();

function updateStorage(){
    localStorage.setItem("NOTES",notesContainer.innerHTML);
}



notesContainer.addEventListener("click",(e)=>{
 if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
 }
 else if(e.target.tagName === "P"){
    
        e.target.addEventListener("keyup",()=>{
            updateStorage();
        })
 }
});


