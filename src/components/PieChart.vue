<template>
  <canvas id="pie-chart"> </canvas>
</template>

<script>
import Chart from "chart.js/auto"
export default {
  name: "PieChart",
  data() {
    return {
      chart: null,
    }
  },
  mounted() { 
    const location = document.getElementById("pie-chart") 
    Chart.defaults.plugins.tooltip.titleFont = () => ({ size: 50, weight: 800 })
    new Chart(location, {
      type: "doughnut",
      
      data: {
        datasets: [
          {
            data: [
              { value: 30, label: "All questions" },
              { value: 5, label: "Wrong answers" },
            ],
            backgroundColor: ["#00A1C0", "#D6D6D9"],
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "80%",
        plugins: {
          tooltip: {
            enabled: false,
          },
          labels: {
            font: {
              size: 32,
            },
          },
        },
      },
    }) 
  },
}
</script>

<style lang="scss" scoped>
#pie-chart {
  height: 200px !important;
  width: 200px !important;
}
</style>
