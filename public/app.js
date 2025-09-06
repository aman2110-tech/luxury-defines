let searchInput = document.querySelector(".search");
let products = document.querySelectorAll(".product-card");
let producttitle=document.querySelectorAll(".product-title");
let searchbtn=document.querySelector(".search-btn");



searchInput.addEventListener("input", (e) => {
  
  
  let searchitem = searchInput.value.toLowerCase();
  console.log(searchitem);

for (let product of products) {
    let title = product.querySelector(".product-title").textContent.toLowerCase();

    if (title.includes(searchitem)) {
      product.style.display = "block";
    }
    else if(searchitem==""){
      product.style.display = "block";
    }
    else {
      product.style.display = "none";
    }
  }
});

products.addEventListener("click",()=>{
  for(let product of products){
    product
  }
})
