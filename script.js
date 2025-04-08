const menuHamburguer = document.querySelector(".menu-hambuerguer");

menuHamburguer.addEventListener("click", (e) => {
  const navMenu = document.querySelector(".header-navBar");
  if(navMenu.classList[1] === "ativa"){
    navMenu.classList.remove("ativa")

  }else{
    navMenu.classList.add("ativa")

  }
    
  
});
