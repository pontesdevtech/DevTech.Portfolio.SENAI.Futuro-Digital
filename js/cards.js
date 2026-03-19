export function gerarCardsVantagens(container, vantagens) {

  for (const key in vantagens) {

    const vantagem = vantagens[key];

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <span class="material-symbols-rounded">${vantagem.icone}</span>
      <h3>${vantagem.titulo}</h3>
      <p>${vantagem.descricao}</p>
    `;

    container.appendChild(card);

  }

}

export function gerarCardsRequisitos(container, requisitos) {

  const dados = [
    {
      icone: "cake",
      titulo: "Idade mínima",
      descricao: requisitos["idade-minima"]
    },
    {
      icone: "school",
      titulo: "Escolaridade mínima",
      descricao: requisitos["escolaridade-minima"]
    },
    {
      icone: "psychology",
      titulo: "Conhecimentos necessários",
      descricao: requisitos["conhecimentos-necessarios"]
    }
  ];

  dados.forEach(item => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <span class="material-symbols-rounded">${item.icone}</span>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    `;

    container.appendChild(card);

  });

}