var str1 = "Crazy Amazing Fire"
var str2 = "Engine Foods Garments"
var str3 = "Bors Limited Hub"

function final(name,first){
     console.log(`${first} ${name} ${str3.slice(0,str2.indexOf(" ")-1)}`)
     let ref = str3.slice(str3.indexOf(" ")+1)
     // console.log(ref)
     // console.log(ref.slice(0,ref.indexOf(" ")))
     console.log(`${first} ${name} ${ref.slice(0,ref.indexOf(" "))}`)
     console.log(`${first} ${name} ${ref.slice(ref.indexOf(" ")+ 1)}`)
     return
}

function company(first){
     final(str2.slice(0,str2.indexOf(" ")),first)
     let ref = str2.slice(str2.indexOf(" ")+1)
     final(ref.slice(0,ref.indexOf(" ")),first)
     // console.log(ref.slice(0,ref.indexOf(" ")))
     final(ref.slice(ref.indexOf(" ")+1),first)
     return
}

company(str1.slice(0,str1.indexOf(" ")))
let ref = str1.slice(str1.indexOf(" ") + 1)
company(ref.slice(0,ref.indexOf(" ")))
company(ref.slice(ref.indexOf(" ") + 1))
// console.log(ref.slice(0,ref.indexOf(" ")))