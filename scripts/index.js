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
                <button>${tile.action}</button>
            `;

  tileTemplate.className = "tile";
  tileTemplate.href = tile.link;
  document.querySelector(".container").appendChild(tileTemplate);
};
const albuns = [
  {
    title: "Heresia",
    tag: "Rap",
    description:
      "Heresia é o primeiro álbum do rapper mineiro Djonga. O álbum é marcado por flows  viscerais e lírica impecável",
    link: "https://www.youtube.com/watch?v=-SqmnJ3X5vI",
    action: "escutar",
  },
  {
    title: "Febre Amarela",
    tag: "Trap",
    description:
      "Febre Amarela é um projeto do produtor WillsBife que conta com diversas participações do rap nacional.",
    link: "https://www.youtube.com/watch?v=07Eq2BlzQ18",
    action: "escutar",
  },
];
const filmes = [
  {
    title: "Cidade De Deus",
    tag: "Nacional",
    description:
      "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. ",
    link: "https://www.imdb.com/title/tt0317248/",
    action: "assistir trailer",
  },
  {
    title: "Interstellar",
    tag: "Sci-Fi",
    description:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial.",
    link: "https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0",
    action: "assistir trailer",
  },
];

const renderTiles = (array) =>
  array.map((item) => {
    renderTile(item);
  });
