const loadCategories=()=>{
   fetch("https://openapi.programming-hero.com/api/categories")
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    })
   .catch(err=>{
     console.log(err);
   });
}
loadCategories();