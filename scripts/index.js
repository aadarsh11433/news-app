// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";

import {newssearch , contnews} from "../scripts/fetch.js"

document.getElementById("navbar").innerHTML = navbar();


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

let append =(data) =>{

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
      div.addEventListener("click",()=>{
        localStorage.setItem("news",JSON.stringify({title,urlToImage,description,content}))
        window.location.href = "news.html"
    })

      div.append (imgdiv,detdiv);
      document.getElementById("results").append(div)

    })
}




//   let  contnews  =  async (query) =>{

//      let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
//      let data = await res.json();
//      console.log(data)
//      return data.articles;


// }

let countries = document.getElementById("sidebar").children;

for(let a of countries){
    console.log(a.id)
    
    a.addEventListener("click",()=>{
        console.log(a.id);
        contnews(a.id).then((data)=>{
          append(data);
        })
    })
}

// let append =(data) =>{

//    document.getElementById("results").innerHTML  =null;
//     data.forEach(({title,urlToImage,description})=>{

//         let div = create("div")
//        div.setAttribute("class","news")
//        let image =create("img")
//        image.src =urlToImage;
//        let heading   =create("h3")
//        heading.innerText = title;

//       let des = create("p");
//       des.innerText = description

//       div.append (image,heading,des);
//       document.getElementById("results").append(div)

//     })
// }


// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

// https://masai-mock-api.herokuapp.com/news?q={query} 


// uthor: "Igor Bonifacic"
// content: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. This was an exceptionally difficult quarter due to supply chain interruptions and China Ze… [+920 chars]"
// description: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. “This was an exceptionally difficult quarter due to supply chain interruptions and China Zero-Covid policy,” Musk said\r\n on Twitter shortly after Tesl…"
// publishedAt: "2022-04-02T21:41:41Z"
// source: {id: 'engadget', name: 'Engadget'}
// title: "Tesla's deliveries increased despite supply shortages and plant closures"
// url: "https://www.engadget.com/tesla-q-1-2022-deliveries-214141313.html"
// urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2022-03/733d9be0-b2cd-11ec-b7f9-382caaedc1ae"