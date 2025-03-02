document.addEventListener("DOMContentLoaded", function () {
    const gameList = document.getElementById("game-list");
    const searchInput = document.getElementById("search");
    const genreFilter = document.getElementById("genre-filter");

    // Lấy dữ liệu từ file JSON
    fetch("data.json")
        .then(response => response.json())
        .then(games => {
            displayGames(games);

            // Xử lý tìm kiếm
            searchInput.addEventListener("input", () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredGames = games.filter(game => 
                    game.title.toLowerCase().includes(searchTerm)
                );
                displayGames(filteredGames);
            });

            // Lọc theo thể loại
            genreFilter.addEventListener("change", () => {
                const selectedGenre = genreFilter.value;
                const filteredGames = selectedGenre === "All"
                    ? games
                    : games.filter(game => game.genre === selectedGenre);
                displayGames(filteredGames);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));

    // Hàm hiển thị danh sách game
    function displayGames(games) {
        gameList.innerHTML = "";
        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");

            gameCard.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h2>${game.title}</h2>
                <p>${game.short_description}</p>
                <a href="${game.game_url}" target="_blank">Play Now</a>
            `;

            gameList.appendChild(gameCard);
        });
    }
});
