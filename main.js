console.log('Anand Portfolio Phase 1 Loaded');const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".gallery .card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        cards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }

            else if(
                card.classList.contains(filter)
            ){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});

/* ==========================
LIGHTBOX
========================== */

/* ==========================
ADVANCED LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

const closeLightbox =
document.querySelector(".close-lightbox");

const prevButton =
document.querySelector(".lightbox-prev");

const nextButton =
document.querySelector(".lightbox-next");

const counter =
document.querySelector(".lightbox-counter");

let currentIndex = 0;

function showImage(index){

    lightboxImage.src =
    galleryImages[index].src;

    counter.textContent =
    `${index + 1} / ${galleryImages.length}`;
}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("active");

    });

});

nextButton.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

});

prevButton.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage(currentIndex);

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active"))
    return;

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key === "ArrowRight"){

        currentIndex++;

        if(currentIndex >= galleryImages.length){
            currentIndex = 0;
        }

        showImage(currentIndex);

    }

    if(e.key === "ArrowLeft"){

        currentIndex--;

        if(currentIndex < 0){
            currentIndex = galleryImages.length - 1;
        }

        showImage(currentIndex);

    }

});