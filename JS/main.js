window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("solid");
        navbar.classList.remove("transparent");
    } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("solid");
    }
});

// API GAME 
document.addEventListener("DOMContentLoaded", function () {
    const productsGame = document.querySelector(".productsGame");

    // Dùng proxy để tránh lỗi CORS
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "../data.json";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const gamesToShow = data.slice(0, 10);
            productsGame.innerHTML = `<h1>GAMES FEATURES</h1>`;

            gamesToShow.forEach((game, index) => {
                const isEven = index % 2 === 0;
                const gameElement = document.createElement("div");
                gameElement.classList.add("products-content");

                gameElement.innerHTML = `
                    ${isEven ? `
                    <div class="products-img">
                        <img src="${game.thumbnail}" alt="${game.title}">
                    </div>
                    <div class="products-desc">
                        <h3>${game.title}</h3> 
                        <p>${game.short_description}</p>
                        <a href="${game.game_url}" target="_blank">
                            <button>PLAY NOW <i class="fa fa-gamepad"></i></button>
                        </a>
                    </div>
                    ` : `
                    <div class="products-desc">
                        <h3>${game.title}</h3> 
                        <p>${game.short_description}</p>
                        <a href="${game.game_url}" target="_blank">
                            <button>PLAY NOW <i class="fa fa-gamepad"></i></button>
                        </a>
                    </div>
                    <div class="products-img">
                        <img src="${game.thumbnail}" alt="${game.title}">
                    </div>
                    `}
                `;

                productsGame.appendChild(gameElement);
            });
        })
        .catch(error => console.error("Lỗi khi lấy dữ liệu:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    // Dữ liệu JSON
    const games = [
        {
            "id": 324,
            "title": "Dream of Mirror Online",
            "thumbnail": "https://www.freetogame.com/g/324/thumbnail.jpg",
            "short_description": "A free to play fantasy MMORPG with tons of social features.",
            "game_url": "https://www.freetogame.com/open/domo"
        },
        {
            "id": 431,
            "title": "Imperia Online",
            "thumbnail": "https://www.freetogame.com/g/431/thumbnail.jpg",
            "short_description": "A 2D free-to-play browser-based Medieval MMORTS, Train soldiers and raise an Empire.",
            "game_url": "https://www.freetogame.com/open/imperia-online"
        },
        {
            "id": 325,
            "title": "MapleStory",
            "thumbnail": "https://www.freetogame.com/g/325/thumbnail.jpg",
            "short_description": "A popular free-to-play 2D side-scrolling MMORPG with tons of quests, and a huge game world!",
            "game_url": "https://www.freetogame.com/open/maplestory"
        },
        {
            "id": 439,
            "title": "PC Futbol Legends",
            "thumbnail": "https://www.freetogame.com/g/439/thumbnail.jpg",
            "short_description": "An arcade soccer game inspired by cult arcade games from IDC games. ",
            "game_url": "https://www.freetogame.com/open/futbol-legends",
            "genre": "Sports",
            "platform": "PC (Windows)",
            "publisher": "IDG GAmes",
            "developer": "IDG GAmes",
            "release_date": "2019-11-01",
            "freetogame_profile_url": "https://www.freetogame.com/futbol-legends"
        }
    ];

    // Lấy phần tử container
    const gameList = document.getElementById("game-list");

    // Hiển thị danh sách game
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
});