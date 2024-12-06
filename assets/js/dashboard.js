$(function () {


  // =====================================
  // Rekam Medis Start
  // =====================================

  var options = {
    series: [
      {
        type: "area",
        name: "Tahun Ini",
        data: [
          {
            x: "Jan",
            y: 45,
          },
          {
            x: "Feb",
            y: 75,
          },
          {
            x: "Mar",
            y: 70,
          },
          {
            x: "Apr",
            y: 35,
          },
          {
            x: "Mei",
            y: 0,
          },
          {
            x: "Jun",
            y: 0,
          },
          {
            x: "Jul",
            y: 0,
          },
          {
            x: "Agt",
            y: 25,
          },
          {
            x: "Sep", 
            y: 25,
          },
          {
            x: "Okt",
            y: 10,
          },
          {
            x: "Nov",
            y: 10,
          },
          {
            x: "Des",
            y: 45,
          },
        ],
      },
      {
        type: "line",
        name: "Tahun Lalu",
        data: [
          {
            x: "Jan",
            y: 20,
          },
          {
            x: "Feb",
            y: 35,
          },
          {
            x: "Mar",
            y: 35,
          },
          {
            x: "Apr",
            y: 60,
          },
          {
            x: "Mei",
            y: 0,
          },
          {
            x: "Jun",
            y: 0,
          },
          {
            x: "Jul",
            y: 0,
          },
          {
            x: "Agt",
            y: 50,
          },
          {
            x: "Sep",
            y: 50,
          },
          {
            x: "Okt",
            y: 25,
          },
          {
            x: "Nov",
            y: 20,
          },
          {
            x: "Des",
            y: 20,
          },
        ],
      },
    ],
    chart: {
      height: 300,
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      fontSize: "12px",
      offsetX: -15,
      offsetY: 10,
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary-color)"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [100],
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "#90A4AE50",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#sales-profit"), options);
  chart.render();


  // =====================================
  // total-followers chart
  // =====================================

  var totalfollowers = {
    series: [
      {
        name: "",
        data: [29, 52, 38, 47, 56],
      },
      {
        name: "",
        data: [71, 71, 71, 71, 71],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: 90,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 1,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: [
      "var(--bs-danger)",
      "var(--black-black-10, rgba(17, 28, 45, 0.10))",
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: [3],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  var chart_column_stacked = new ApexCharts(
    document.querySelector("#total-followers"),
    totalfollowers
  );
  chart_column_stacked.render();

  // =====================================
  // total-income
  // =====================================
  var options = {
    chart: {
      id: "total-income",
      type: "area",
      height: 70,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "monthly earnings",
        color: "var(--bs-secondary)",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 180],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#total-income"), options).render();


})