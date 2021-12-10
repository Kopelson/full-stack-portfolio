const menu = document.querySelector('#menu');
const menuExtension = document.querySelector('#menu-extension')

function handleClick(){
    console.log("you clicked menu")
    if (menuExtension.classList.contains('active')){
        menuExtension.classList.remove("active");
        return;
    }
    menuExtension.classList.add("active");
}

menu.addEventListener("click", handleClick);