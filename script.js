
function playAudio(id) {
  const audio = document.getElementById(id);
  if (audio) audio.play();
}
function pauseAudio(id) {
  const audio = document.getElementById(id);
  if (audio) audio.pause();
}

const ctx = document.getElementById('visitorChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Ziyaretçi Sayısı',
      data: [1200000, 1800000, 2700000, 4000000],
      backgroundColor: '#f97316',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: {
        label: function(context) {
          return context.dataset.label + ': ' + context.formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' kişi';
        }
      }}
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});
