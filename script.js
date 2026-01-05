// فرم
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("پیام شما با موفقیت ارسال شد!");
    form.reset();
});

// افکت اسکرول برای بخش‌ها
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        if(scrollY + window.innerHeight*0.8 > section.offsetTop){
            section.classList.add("visible");
        }
    });
});

// Lightbox برای گالری
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
