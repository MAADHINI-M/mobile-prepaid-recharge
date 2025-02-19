document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    function login() {
        const mobileNumber = document.getElementById("mobileNumber").value;
        const errorMessage = document.getElementById("error-message");

        const phoneRegex = /^[0-9]{10}$/;
        if (phoneRegex.test(mobileNumber)) {
            document.getElementById("mobileLogin").style.display = "none";
            document.getElementById("profileSection").style.display = "block";
            document.getElementById("profileContent").style.display = "block";
        } else {
            errorMessage.style.display = "block";
        }
    }

    function toggleDropdown() {
        const dropdown = document.getElementById("profileDropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    document.addEventListener("click", function(event) {
        const dropdown = document.getElementById("profileDropdown");
        const profileImage = document.getElementById("profileImage");

        if (!profileImage.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});
   // Login Function
   function login() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    const errorMessage = document.getElementById('error-message');
    if (mobileNumber.length === 10 && !isNaN(mobileNumber)) {
        errorMessage.style.display = 'none';
        alert('Login successful!');
        // Redirect or perform further actions here
    } else {
        errorMessage.style.display = 'block';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
         delay: 2500, // Time between slides (in milliseconds)
         disableOnInteraction: false, // Keep autoplay running even if the user interacts with the Swiper
        },  
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
});
   // Login Function
   function login() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    const errorMessage = document.getElementById('error-message');
    if (mobileNumber.length === 10 && !isNaN(mobileNumber)) {
        errorMessage.style.display = 'none';
        alert('Login successful!');
        // Redirect or perform further actions here
    } else {
        errorMessage.style.display = 'block';
    }
}