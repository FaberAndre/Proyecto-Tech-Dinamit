document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Navegación entre secciones
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");

      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });

       // Cargar gráficas específicas según la sección seleccionada
       if (targetId === "grafica-barras") {
        cargarGraficoBarras();
      } else if (targetId === "grafica-pastel") {
        cargarGraficoPastel();
      } else if (targetId === "grafica-area") {
        cargarGraficoArea(); // Cargar la gráfica de área
      }
    });
  });
  // Formulario de quejas
  const form = document.getElementById("quejas-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por tu opinión! Procesaremos tu queja lo antes posible.");
    form.reset();
  });
});

// Función para la gráfica de barras
function cargarGraficoBarras() {
  const ctx = document.getElementById("energyChart");
  if (ctx) {
    new Chart(ctx.getContext('2d'), {
      type: "bar",
      data: {
        labels: ["Eólica", "Solar", "Hidráulica", "Biomasa", "Geotérmica"],
        datasets: [{
          label: "Producción (en GW)",
          data: [300, 200, 450, 120, 90],
          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0', '#9966FF']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}

// Función para la gráfica de pastel
function cargarGraficoPastel() {
  const ctx = document.getElementById("grafico");
  if (ctx) {
    new Chart(ctx.getContext('2d'), {
      type: "pie",
      data: {
        labels: ["Solar", "Eólica", "Hidráulica", "Total Energías Limpias"],
        datasets: [{
          data: [0.32,0.07,71,33],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#007BFF"]
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}


// Función para la gráfica de área
function cargarGraficoArea() {
  const ctx = document.getElementById("areaChart");
  if (ctx && !ctx.classList.contains("renderizado")) {
    new Chart(ctx.getContext('2d'), {
      type: "line",
      data: {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
          {
            label: "Innovación en Colombia",
            data: [30, 45, 55, 60, 75, 80, 90],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          },
          {
            label: "Emprendimiento en Colombia",
            data: [25, 40, 50, 65, 70, 85, 95],
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Año",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Nivel de Desarrollo (%)",
            },
          },
        },
      },
    });
    ctx.classList.add("renderizado"); // Marca el canvas como renderizado
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Navegación entre secciones
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");

      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });

      // Cargar gráficas específicas según la sección seleccionada
      if (targetId === "grafica-lineas") {
        cargarGraficoLineas();
      }
    });
  });
});

// Función para la gráfica de líneas
function cargarGraficoLineas() {
  const ctx = document.getElementById("lineChart");
  if (ctx && !ctx.classList.contains("renderizado")) {
    const labels = ['2010', '2012', '2014', '2016', '2018', '2020', '2022'];
    const windEnergy = [50, 70, 100, 150, 200, 250, 300];
    const solarEnergy = [20, 40, 80, 120, 180, 240, 300];
    const geothermalEnergy = [10, 15, 20, 25, 30, 35, 40];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Energía Eólica (GW)',
          data: windEnergy,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
        },
        {
          label: 'Energía Solar PV (GW)',
          data: solarEnergy,
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          tension: 0.4,
        },
        {
          label: 'Energía Geotérmica (GW)',
          data: geothermalEnergy,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          tension: 0.4,
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.dataset.label}: ${tooltipItem.raw} GW`;
            }
          }
        },
        title: {
          display: true,
          text: 'Tendencia en la Capacidad Instalada de Energías Renovables',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Año',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Capacidad Instalada (GW)',
          },
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: data,
      options: options,
    });

    ctx.classList.add("renderizado"); // Evitar múltiples renderizados
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const bCalc = document.getElementById("calc");

  bCalc.addEventListener("click", () => {
      let cantidad = parseFloat(document.getElementById("HwhConsumidos").value);
      let rC = document.getElementById("RConsumo");
      function calcular(cantidad){
 
          let TwhConsumidos = (cantidad * 12) / 1000;
          let CTotal = TwhConsumidos * 0.32;

          return CTotal;
      }
      valor = calcular(cantidad);
      rC.textContent = `Tu consumo total de energia solar es de:  ${valor}`;
  });
});