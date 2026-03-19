export function iniciarTour(container) {

  const steps = container.querySelectorAll(".tour-step");
  const nextBtn = container.querySelector("#nextBtn");
  const prevBtn = container.querySelector("#prevBtn");
  const initBtn = container.querySelector("#initBtn");
  const progressBar = container.querySelector(".tour-progress-bar");

  let currentStep = 0;

  function updateProgress(index) {

  // Se estiver na tela inicial (antes de iniciar)
  if (index === 0) {
    progressBar.style.width = "0%";
    return;
  }

  // Progresso real começa a partir do step 1
  const progress = (index / (steps.length - 1)) * 100;
  progressBar.style.width = progress + "%";
}

  function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");

    // Atualiza progresso
    updateProgress(index);

    // Botão voltar
    prevBtn.style.display = index === 0 ? "none" : "inline-block";

    // Controle iniciar / próximo
    if (index === 0) {
      initBtn.style.display = "inline-block";
      nextBtn.style.display = "none";
    } else {
      initBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
    }

    // Texto botão next
    if (index === steps.length - 1) {
      nextBtn.textContent = "Reiniciar 🔄";
    } else {
      nextBtn.textContent = "Próximo";
    }
  }

  initBtn.addEventListener("click", () => {
    currentStep = 1;
    showStep(currentStep);
  });

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
    } else {
      currentStep = 0;
    }
    showStep(currentStep);
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  showStep(currentStep);
}