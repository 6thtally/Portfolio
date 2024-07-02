document.addEventListener("DOMContentLoaded", () => {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    portfolioItems.forEach(item => {
        observer.observe(item);
    });
});
