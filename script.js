// 🎮 Load games
const container = document.getElementById("games-container");

function loadGames(list) {
  container.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `<h4>${game.name}</h4>`;

    card.onclick = () => {
      window.open(game.url, "_blank");
    };

    container.appendChild(card);
  });
}

loadGames(games);

// 🔍 Search
function searchGames() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = games.filter(g => g.name.toLowerCase().includes(query));
  loadGames(filtered);
}

// 🕵️ Tab Cloaking
document.title = "Google Classroom";
let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement('link');
  link.rel = 'icon';
  document.head.appendChild(link);
}
link.href = "https://ssl.gstatic.com/classroom/favicon.png";

// 🍎 Dock functions
function goHome() {
  location.reload();
}

function toggleFullscreen() {
  document.documentElement.requestFullscreen();
}