// زر "تواصل معي" ينقلك لقسم التواصل
const hireMeBtn = document.getElementById("hireMeBtn");
const contactSection = document.getElementById("contact");

hireMeBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// معالجة بسيطة لنموذج التواصل (بدون إرسال حقيقي)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {
    alert("يرجى تعبئة جميع الحقول.");
    return;
}

alert(`شكرًا يا ${name}! تم استلام رسالتك (تجريبيًا).`);
contactForm.reset();
});
// عداد الزوار
let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);
document.getElementById("visitCount").textContent = visits;
// أنيميشن عند التمرير
const animatedElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        el.classList.add("show");
    }
});
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();


const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
    toTop.style.display = window.scrollY > 300 ? "block" : "none";
});

toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
