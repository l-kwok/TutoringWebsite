function parallax(element, distance, speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function(){
    parallax('header', window.scrollY, 1);
    parallax('#bg', window.scrollY, 1);


    let scrollAmount = document.querySelector('header').offsetHeight;
    document.querySelector('#about').style.fill = `white`;

    //delay for fade in text for about
    if(window.scrollY > scrollAmount - 350){
        $("#about div").addClass("fadeAnim");
    }

    if(window.scrollY > scrollAmount){
        parallax('#about', window.scrollY - document.querySelector('header').offsetHeight, 1);
        scrollAmount += document.querySelector('header').offsetHeight;
    }

    if(window.scrollY > scrollAmount){
        parallax('#subjects', window.scrollY - scrollAmount, 1);
        scrollAmount += document.querySelector('#about').offsetHeight;
    }

    if(window.scrollY >= scrollAmount){
        parallax('#contact', window.scrollY - scrollAmount, 1);
        scrollAmount += document.querySelector('footer').offsetHeight;
    }

    if(window.scrollY >= scrollAmount){
        parallax('footer', window.scrollY - scrollAmount, 1);
        // window.scrollY = 0;
    }
    console.log(scrollAmount);


    

})