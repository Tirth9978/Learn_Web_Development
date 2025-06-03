const callback = ()=>{
     alert("Done :)")
}

const fun = (string , callback)=>{
     let div  = document.createElement("div")
     div.innerHTML = string
     document.body.append(div)
     callback()
}

string = prompt("Enter the string")

fun(string,callback)