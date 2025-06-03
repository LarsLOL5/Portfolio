// Script

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function ShowNavbar() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

function getAge() {
    const date = new Date();
    const birthDate = new Date(2005, 4, 5);

    let age = date.getFullYear() - birthDate.getFullYear();

    if (date.getMonth() < birthDate.getMonth() || date.getMonth() === birthDate.getMonth() && date.getDate() < birthDate.getDate()) {
        age--;
    }

    return age;
}

let isZoomed = false;

function ZoomCodeOnClick() {
    // Use a data attribute to track zoom state per element
    if (window.innerWidth < 992) return;

    const isZoomed = this.dataset.zoomed === "true";
    if (isZoomed) {
        this.style.transform = 'scale(1)';
        this.style.width = '100%';
        this.style.cursor = 'zoom-in';
        this.style.transition = 'transform 0.3s ease';
        this.style.position = '';
        this.style.zIndex = '';
        this.dataset.zoomed = "false";
    } else {
        this.style.transform = 'scale(1.5)';
        this.style.width = '150%';
        this.style.cursor = 'zoom-out';
        this.style.transition = 'transform 0.3s ease';
        this.style.position = 'relative';
        this.style.zIndex = '10';
        this.dataset.zoomed = "true";
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Add click event to all .own-code elements
    document.querySelectorAll('.own-code').forEach(el => {
        el.addEventListener('click', ZoomCodeOnClick);
        el.dataset.zoomed = "false"; // Initialize zoom state
    });

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var coll = document.getElementsByClassName("own-collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("own-active");
        var content = this.nextElementSibling;

    if (!content.style.display || content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

});