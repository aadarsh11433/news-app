// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


import {newssearch } from "../scripts/fetch.js";

document.getElementById("search_input").addEventListener("keydown",search)


 async function search(e){
    if(e.key == "Enter"){
   let a = document.getElementById("search_input").value;
  let data  =  await newssearch(a)
          console.log(data)
  localStorage.setItem("newsarr",JSON.stringify(data))
  window.location.href = "search.html"

    }
}

function create(a){
    return document.createElement(a);
}

let data =  JSON.parse(localStorage.getItem("newsarr"));

let append =(data) =>{
console.log(data)
    document.getElementById("results").innerHTML  =null;
     data.forEach(({title,urlToImage,description,content})=>{
 
         let div = create("div")
        div.setAttribute("class","news")
        let imgdiv = create("div")
        let image =create("img");
        image.src =urlToImage;
        imgdiv.append(image);

        let detdiv = create("div");

       
        let heading   =create("h3")
        heading.innerText = title;
 
       let des = create("p");
       des.innerText = description;
       detdiv.append(heading,des)
       div.append (imgdiv,detdiv);
       div.addEventListener("click",()=>{
           localStorage.setItem("news",JSON.stringify({title,urlToImage,description,content}))
           window.location.href = "news.html"
       })

       document.getElementById("results").append(div)
 
     })
 }

 append(data);
