import { gerarCardsRequisitos, gerarCardsVantagens } from "./cards.js";
import { iniciarTour } from "./tour.js";

class SenaiCurso extends HTMLElement {

  connectedCallback() {

    const matriz = this.getAttribute("matriz");

    fetch(`data/${matriz}.json`)
      .then(response => response.json())
      .then(data => {

        const curso = data[matriz];

        // Seleciona o componente page para construção
        return fetch("components/page.html")
          .then(response => response.text())
          .then(html => {

            this.innerHTML = html;

            // Carrega o card perfil profissional
            this.querySelector("#competencia").textContent = curso["perfil-profissional"];

            // Carrega os cards de vantagens
            const vantagens = this.querySelector("#cards-vantagens");
            gerarCardsVantagens(vantagens, curso.vantagens);
            
            // Carrega o conteúdo do curso
            const lista = this.querySelector("#conteudo-curso");
            curso.conteudo.forEach(item => {
              const li = document.createElement("li");
              li.textContent = "✔️ " + item;
              lista.appendChild(li);
            });

            // Carrega os cards de vantagens
            const requisitos = this.querySelector("#cards-requisitos");
            gerarCardsRequisitos(requisitos, curso.requisitos);





            
            // ===== INJEÇÃO DO TOUR =====
            return fetch("components/tour-page.html")
              .then(res => res.text())
              .then(tourHTML => {

                const containerTour = document.createElement("div");
                containerTour.innerHTML = tourHTML;

                // Define onde o tour será inserido
                const alvo = this.querySelector("#area-tour") || this;

                alvo.appendChild(containerTour);

                // Inicializa comportamento do tour
                iniciarTour(containerTour);

              });







          });
      });
  }
}

customElements.define("senai-curso", SenaiCurso);