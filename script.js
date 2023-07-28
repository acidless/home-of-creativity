document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link");
    let currentActive = links[0];

    links.forEach(link => {
        link.addEventListener("click", () => {
            currentActive.classList.remove("active");
            currentActive = link;
            currentActive.classList.add("active");
        })
    })
})
