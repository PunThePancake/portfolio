const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
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