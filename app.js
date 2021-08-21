 
const navSlide = () => {
    const bg_menu = document.querySelector('.mobile');
    const nav = document.querySelector('.nav_menu');

    bg_menu.addEventListener('click', () =>{
        nav.classList.toggle('slide_menu');

        //x animation on menu
        bg_menu.classList.toggle('changeIcon');
    });
}  
navSlide();
