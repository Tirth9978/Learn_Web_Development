let main_bu = document.getElementById("openPopUp")

main_bu.addEventListener("click",()=>{
     document.getElementById("wq").style.display = "flex"
})

document.getElementById("q").addEventListener("click",()=>{
     document.querySelector("#wq").style.display = "none";
})
