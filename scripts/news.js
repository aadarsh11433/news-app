// Ude Import export (MANDATORY)


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



let news = JSON.parse(localStorage.getItem("news"))


function create(a){
    return document.createElement(a);
}


let append =(news) =>{
    
        document.getElementById("detailed_news").innerHTML  =null;
         
     console.log(news)
          
            
            let image =create("img")
            image.src =news.urlToImage;
            let heading   =create("h3")
            heading.innerText = news.title;
     
           let des = create("p");
           des.innerText = news.description;

           let cont = create("p");
           cont.innerText =news.content;
           
           
    
           document.getElementById("detailed_news").append(image,heading,des,cont)
     
         
     }
     append(news)