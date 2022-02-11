window.addEventListener('DOMContentLoaded', (e) =>{
    const d = document,
    $menu_ul = d.querySelectorAll('.menu-section__ul');
    let element;
    d.addEventListener('click', (e)=>{
        if(e.target.matches('.menu-section__heading, .menu-section__arrow')){
            if(e.target.matches('.menu-section__heading')){
                element = d.getElementById(e.target.parentElement.id).querySelector('.menu-section__arrow');
            }else{
                element = d.getElementById(e.target.parentElement.parentElement.id).querySelector('.menu-section__arrow');
            }

            if(d.querySelector('.menu-section__arrow.is-active') && element !== d.querySelector('.menu-section__arrow.is-active')){
                d.querySelector('.menu-section__arrow.is-active').classList.remove('is-active');
                if(d.querySelector('.menu-section__ul.is-active')){
                    d.querySelector('.menu-section__ul.is-active').classList.remove('is-active');
                }
            }

            if(e.target.matches('.menu-section__arrow')){
                d.getElementById(e.target.parentElement.parentElement.id).querySelector('.menu-section__arrow').classList.toggle('is-active');
                d.getElementById(e.target.parentElement.parentElement.id).querySelector('.menu-section__ul').classList.toggle('is-active');
            }else{
                d.getElementById(e.target.parentElement.id).querySelector('.menu-section__arrow').classList.toggle('is-active');
                d.getElementById(e.target.parentElement.id).querySelector('.menu-section__ul').classList.toggle('is-active');
            }
        }
        
        if(e.target.matches('.header__hamburguer, .header__close')){
            d.querySelector('.menu').classList.toggle('is-active');
            d.querySelector('.heading').classList.toggle('is-off');
            d.querySelector('.header__hamburguer').classList.toggle('is-off');
            d.querySelector('.header__close').classList.toggle('is-active');
        }

        if(e.target.matches('.menu-section__ul')){
            d.querySelector('.menu-section__ul.is-active').classList.remove('is-active');
        }


    })

    $menu_ul.forEach(ul =>{
        ul.addEventListener('mouseleave', ()=>{
            if(window.innerWidth >= 1439){
                ul.classList.remove('is-active');
                d.getElementById(ul.parentElement.id).querySelector('.menu-section__arrow').classList.remove('is-active');
            }
        })
    })    
})