const sideMenu=document.getElementById("sideMenu");
const loadCategories=()=>{
   fetch("https://openapi.programming-hero.com/api/categories")
   .then(res=>res.json())
   .then(data=>{
       const categories=data.categories;
       categories.forEach((cat)=>{
           const categoryName=cat.category_name;
           sideMenu.innerHTML += `<li id="${cat.id}" class="font-normal  text-[#39434F] mb-[5px] p-[5px] hover:bg-[#15803D] hover:text-white  hover:rounded-[4px]">${categoryName}</li>`
       });
       sideMenu.addEventListener("click",(e)=>{
         const allLi=document.querySelectorAll("li");
         allLi.forEach(li=>{
          li.classList.remove('bg-[#15803D]','text-white')
         })
      
         if(e.target.localName==="li"){
          e.target.classList.add('bg-[#15803D]','text-white');

          loadCategory(e.target.id);
         }
       })
    })
   .catch(err=>{
     console.log(err);
   });
}

const loadCategory=(categoryId)=>{
      fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
      .then(res=>res.json())
      .then(data=>{
        const mainPlants=data.plants;
        const cards2=document.querySelector(".cards");
            cards2.innerHTML="";
        mainPlants.forEach(plant2=>{
          
      
      
          const plantUrl=plant2.image;
          const plantDes=plant2.description;
          const plantName=plant2.name;
          const plantPrice=plant2.price;
          const plantCategory=plant2.category;
          console.log(plantPrice)
          
           const div2=` <div class="card bg-base-100 shadow-sm">
                 <figure>
                   <img  class="w-full h-40 object-cover rounded-[5px]"src="${plantUrl}" alt="Shoes" />
                 </figure>
                <div class="p-4">
                    <h2 class="card-title">${plantName}</h2>
                    <p>${plantDes}</p>
                    <div class="cost flex justify-between my-2 items-center">
                        <span class="bg-[#DCFCE7] p-1 rounded-[10px] text-[#15803D] font-semibold">${plantCategory}</span>
                        <span>${plantPrice}</span>
                    </div>
                    <div class="card-actions justify-end">
                       <button class="btn w-[90%] rounded-full mx-auto bg-[#15803D] border-none text-white font-normal">Add to Cart</button>
                    </div>
                </div>
               </div>`

              cards2.innerHTML += div2; 
        })
      })
      .catch(err=>{
        console.log(err);
      })
}

loadCategories();

// categories api 


// plants api 

const plants=()=>{
  fetch("https://openapi.programming-hero.com/api/plants")
  .then(res=>res.json())
  .then(data=>{
    const allPlants=data.plants;
    allPlants.forEach((plant)=>{
      const plantImage=plant.image;
      const plantDescription=plant.description;
      const plantName=plant.name;
      const plantPrice=plant.price;
      const plantCategory=plant.category;
      const cards=document.querySelector(".cards");
      const div=` <div class="card bg-base-100 shadow-sm">
                 <figure>
                   <img  class="w-full h-40 object-cover rounded-[5px]"src="${plantImage}" alt="Shoes" />
                 </figure>
                <div class="p-4">
                    <h2 class="card-title cardName">${plantName}</h2>
                    <p>${plantDescription}</p>
                    <div class="cost flex justify-between my-2 items-center">
                        <span class="bg-[#DCFCE7] p-1 rounded-[10px] text-[#15803D] font-semibold">${plantCategory}</span>
                        <span>${plantPrice}</span>
                    </div>
                    <div class="card-actions justify-end">
                       <button class="btn w-[90%] rounded-full mx-auto bg-[#15803D] border-none text-white font-normal">Add to Cart</button>
                    </div>
                </div>
               </div>`
         cards.innerHTML += div;
    })
  })
  .catch(err=>{
    console.log(err);
  })
}

plants();

// side bar option 


// modal making///


// modal elements
var modal = document.getElementById("modal-0");
var modalTitle = document.getElementById("modalTitle");
var modalImg = document.getElementById("modalImg");
var modalDesc = document.getElementById("modalDesc");
var modalClose = document.getElementById("modalClose");

// attach listener to the container of all cards
document.querySelector(".cards").addEventListener("click", function(e) {
  if (e.target.classList.contains("card-title")) {
    // step up in DOM without closest()
    var p4 = e.target.parentElement;    
    var card = p4.parentElement;       
    var imgEl = card.querySelector("img");
    var descEl = p4.querySelector("p");

    // fill modal content
    modalTitle.textContent = e.target.textContent;
    if (imgEl) {
      modalImg.src = imgEl.src;
    }
    if (descEl) {
      modalDesc.textContent = descEl.textContent;
    }

    // show modal
    modal.style.display = "flex";
  }
});

// close modal on button
modalClose.addEventListener("click", function() {
  modal.style.display = "none";
});

// close modal when clicking outside the box
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

