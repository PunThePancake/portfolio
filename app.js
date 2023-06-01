const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function mobileNavToggle() {
    var mobileNav = document.getElementById('mobileNav');
    var bar = document.getElementById('bars');
    var cross = document.getElementById('xMark');

    if (cross.style.rotate === '90deg') {
        mobileNav.style.opacity = '0'
        bar.style.opacity = '1'
        bar.style.scale = '1'
        cross.style.opacity = '0'
        cross.style.scale = '0'
        cross.style.rotate = '0deg'
        document.querySelectorAll('.mobile-btn').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateX(-3rem)'
            });
            setTimeout(() => {
                mobileNav.style.display = 'none'
            }, "700"); 
    } else {
        mobileNav.style.display = 'flex'
        bar.style.opacity = '0'
        bar.style.scale = '0'
        cross.style.opacity = '1'
        cross.style.scale = '1'
        cross.style.rotate = '90deg'
            setTimeout(() => {
                mobileNav.style.opacity = '1'
                document.querySelectorAll('.mobile-btn').forEach(el => {
                    el.style.opacity = 1;
                    el.style.transform = 'translateX(0rem)'
                    });
            }, "1");
    }
}

function pinToggle() {
    if (pin.style.rotate === '35deg') {
        pin.style.rotate = '0deg'
        pin.style.opacity = '1'
        pin.style.color = 'var(--primary)'
        pin.style.backgroundColor = 'var(--pin)'
    }
    else {
        pin.style.rotate = '35deg'
        pin.style.opacity = '0.3'
        pin.style.color = 'var(--pin-icon)'
        pin.style.backgroundColor = '#ffffff00'
    }
}

var prevScrollpos = window.pageYOffset;
var pin = document.getElementById('pin')
var nav = document.getElementById('nav')

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos & pin.style.rotate === '35deg' & nav.style.height === '4rem') {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.opacity = "1";
  } else {
    document.getElementById("nav").style.top = "-4rem";
    document.getElementById("nav").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;

  if (pin.style.rotate === '0deg') {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.opacity = "1";
  }
}
