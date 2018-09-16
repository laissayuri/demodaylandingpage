window.onscroll = () => {
    let nav = document.querySelector('nav');
    if(this.scrollY <= 10){
        nav.className = '';
    } else {
        nav.className = 'scroll';
    }
};

const go = (elemento) => {
    let link = document.querySelector(elemento)
    window.scroll({ 
        top: link.offsetTop-50, 
        left: 0,
        behavior: 'smooth'
    })
  }