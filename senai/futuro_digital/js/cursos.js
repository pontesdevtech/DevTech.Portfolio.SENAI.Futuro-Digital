//const BASE_URL="";
const BASE_URL="https://pontesdevtech.github.io/DevTech.Portfolio.SENAI.Futuro-Digital/";


class SenaiCurso extends HTMLElement{

async connectedCallback(){

const cursoId=this.getAttribute("curso");

const html=await fetch(BASE_URL+"senai/futuro_digital/components/curso.html")
.then(r=>r.text());

this.innerHTML=html;

const cursos=await fetch(BASE_URL+"senai/futuro_digital/data/cursos.json")
.then(r=>r.json());

const curso=cursos[cursoId];

this.querySelector("#curso-descricao").innerText=curso.descricao;

const vContainer=this.querySelector("#vantagens-carousel");

curso.vantagens.forEach(v=>{
vContainer.innerHTML+=`
<div class="carousel-item">
<i class="fa-solid ${v.icone}"></i>
<h3>${v.titulo}</h3>
<p>${v.texto}</p>
</div>`;
});

const lista=this.querySelector("#lista-conteudo");

curso.conteudo.forEach(i=>{
lista.innerHTML+=`<li>${i}</li>`;
});

const req=this.querySelector("#lista-requisitos");

curso.requisitos.forEach(r=>{
req.innerHTML+=`
<div class="req-card">
<i class="fa-solid ${r.icone}"></i>
<p>${r.texto}</p>
</div>`;
});

const rel=this.querySelector("#rel-carousel");

curso.relacionados.forEach(c=>{
rel.innerHTML+=`
<div class="carousel-item">
<h3>${c.nome}</h3>
<p>Carga horária: ${c.carga}</p>
</div>`;
});

initCarousel(
this.querySelector("#vantagens-carousel"),
this.querySelector("#vantagens-prev"),
this.querySelector("#vantagens-next"),
this.querySelector("#vantagens-dots")
);

initCarousel(
this.querySelector("#rel-carousel"),
this.querySelector("#rel-prev"),
this.querySelector("#rel-next"),
this.querySelector("#rel-dots")
);

}

}

function initCarousel(container,prev,next,dots){

const items=container.children;
let index=0;

function width(){
return items[0].offsetWidth+25;
}

for(let i=0;i<items.length;i++){

const dot=document.createElement("span");

if(i===0)dot.classList.add("active");

dot.onclick=()=>{
index=i;
update();
};

dots.appendChild(dot);

}

function update(){

container.scrollTo({
left:index*width(),
behavior:"smooth"
});

[...dots.children].forEach((d,i)=>{
d.classList.toggle("active",i===index);
});

}

function nextSlide(){
index++;
if(index>=items.length)index=0;
update();
}

function prevSlide(){
index--;
if(index<0)index=items.length-1;
update();
}

next.onclick=nextSlide;
prev.onclick=prevSlide;

setInterval(nextSlide,4000);

}

customElements.define("senai-curso",SenaiCurso);