/* script.js */
let index = 0;

function moveSlide(step) {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const totalImages = images.length;
    index = (index + step + totalImages) % totalImages;
    slider.style.transform = `translateX(${-index * 320}px)`;
}
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Evita comportamento padrão
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para evitar que a navbar cubra o título
            behavior: "smooth"
        });
    });
});