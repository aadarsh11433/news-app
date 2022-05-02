let  newssearch =async (query) =>{

    // let  = document.getElementById("search_input").value
    try

   {
       let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
   let data = await res.json();
//    console.log(data.articles)
   return (data.articles)
}
catch(err){
    console.log("err",err)
}
 }


 let  contnews  =  async (query) =>{

    let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
    let data = await res.json();
    console.log(data)
    return data.articles;


}


 export{ newssearch,contnews};