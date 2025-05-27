let sidebar = document.getElementById('sidemenu');

function OpenMenu(){
    sidebar.style.right = "0";
    sidebar.classList.toggle("active");
    event.stopPropagation();
}
document.body.addEventListener("click",function IsMenuActive(){
    if(sidebar.classList.contains("active")){
        CloseMenu();
        sidebar.classList.remove('active');
        }
});
function CloseMenu(){
    sidebar.style.right = "-200px";
}
sidebar.addEventListener("click", (event)=>{
    event.stopPropagation()
})