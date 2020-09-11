const renderTile = (tile) => {
  const tileTemplate = document.createElement("a");
  tileTemplate.innerHTML = ` 
                <div class='content'>
                    <h1 class="tiletitle">${tile.title}</h1>
                    <div class="tag">${tile.tag}</div>
                    <div class="description">
                      ${tile.description}
                    </div>
                </div>
                <button>escutar</button>
            `;

  tileTemplate.className = "tile";
  tileTemplate.href = tile.link;
  document.querySelector(".container").appendChild(tileTemplate);
};
const albuns = [
  {
    title: "Heresia",
    tag: "Rap",
    description: "Heresia é o primeiro álbum do rapper mineiro Djonga. O álbum é marcado por flows  viscerais e lírica impecável",
    link:'https://www.youtube.com/watch?v=-SqmnJ3X5vI'
  },
  {
    title: "Febre Amarela",
    tag: "Trap",
    description:
      "Febre Amarela é um projeto do produtor WillsBife que conta com diversas participações do rap nacional.",
    link:'https://www.youtube.com/watch?v=07Eq2BlzQ18'
  }
];
const filmes = [
  {
    title: "Heresia",
    tag: "Rap",
    description: "Heresia é o primeiro álbum do rapper mineiro Djonga. O álbum é marcado por flows  viscerais e lírica impecável",
    link:'https://www.youtube.com/watch?v=-SqmnJ3X5vI'
  },
  {
    title: "Febre Amarela",
    tag: "Trap",
    description:
      "Febre Amarela é um projeto do produtor WillsBife que conta com diversas participações do rap nacional.",
    link:'https://www.youtube.com/watch?v=07Eq2BlzQ18'
  }
];

albuns.map((album) => {
  renderTile(album);
});
