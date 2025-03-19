// 📏 BMI Calculator Function
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("bmi-result");

    if (weight === "" || height === "") {
        result.innerHTML = "Please enter both weight and height!";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
        result.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
        result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        result.style.color = "orange";
    } else {
        category = "Obese";
        result.style.color = "red";
    }

    result.innerHTML = `Your BMI is ${bmi} - ${category}`;
}

// 🚀 Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ❓ FAQ Expand & Collapse
document.querySelectorAll(".faq p").forEach((question) => {
    question.addEventListener("click", function () {
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// ⭐ Auto-Sliding Testimonials
let testimonials = document.querySelectorAll(".testimonials p");
let index = 0;

function showNextTestimonial() {
    testimonials.forEach(t => t.style.display = "none");
    testimonials[index].style.display = "block";
    index = (index + 1) % testimonials.length;
}

setInterval(showNextTestimonial, 3000);
showNextTestimonial();

// 📩 Contact Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});