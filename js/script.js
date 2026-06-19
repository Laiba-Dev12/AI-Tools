document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const toolCards = document.querySelectorAll(".tool-card");
    const noResult = document.getElementById("noResult");
    const toolsSection = document.getElementById("tools");

    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase();
        let found = false;

        toolCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "flex";
                found = true;
            } else {
                card.style.display = "none";
            }

        });

        noResult.style.display = found ? "none" : "block";

        // 🔥 IMPORTANT: auto scroll to tools (ONLY when typing starts)
        if (value.length > 0) {
            toolsSection.scrollIntoView({ behavior: "smooth" });
        }

    });

});