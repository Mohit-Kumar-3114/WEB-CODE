let div1=document.getElementById("div1")
let h1=document.getElementsByClassName("h1")
let pi=document.getElementsByTagName("h3")
let div2=document.querySelector("#div2")
let child=document.querySelectorAll(".child")
let div3=document.getElementById("div3")
pi[0].innerText="hi"
div1.innerHTML="hlo hlo"
h1[0].innerText="dom"
div2.innerText="hi using div2"
child[0].innerText="hi i am sibling"



let attrib=document.getElementById("attrib")
let value=attrib.getAttribute("id")
console.log(attrib)
console.log(value)

attrib.setAttribute("class","newclass")
attrib.style.color="green"




let add=document.getElementById("div4")

let btn=document.createElement("button") 
btn.innerText="click on"
add.append(btn) // adds at the end of the div4 (inside)
add.prepend(btn) // adds at the start of the div4 (inside)
add.after(btn) // adds after div4 (outside)
add.before(btn) // adds before div4 (outside)

btn.remove() // remove the element




let div5=document.querySelector("#div5")
console.log(div5.innerHTML)
console.log(div5.innerText)
console.log(div5.textContent)




let btn1=document.querySelector("#btn1")

btn1.onclick = ()=>{ // has more prefernce than inline onclick event of html
    console.log("button clicked using js") // can only execute one thing using this
}
btn1.onclick = ()=>{ 
    console.log("button clicked using js 2")
}

let btn2=document.querySelector("#btn2")
handler=(e)=>{
    console.log("bttn clicked 3")
}
btn2.addEventListener("click",(e)=>{  // can execute many things 
    console.log("bttn clicked 1")
})
btn2.addEventListener("click",(e)=>{
    console.log("bttn clicked 2")
})
btn2.addEventListener("click",handler)

btn2.addEventListener("click",(e)=>{
    console.log("bttn clicked 4")
})


btn2.removeEventListener("click", handler) // same reference to the addEventListner function