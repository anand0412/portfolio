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