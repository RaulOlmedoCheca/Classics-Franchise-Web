var tabsInstance = new M.Tabs(document.querySelector('.tabs'), {
    //swipeable: true //FIXME: this fucks up everything
});

// Setup sidenav
new M.Sidenav(document.querySelector('.sidenav'));

var modalElements = document.querySelectorAll('.modal');
for (let index = 0; index < modalElements.length; index++) {
    new M.Modal(modalElements[index]);
  }
// var instance = new M.FeatureDiscovery(document.querySelector('.tap-target'));

Chart.defaults.global.defaultFontColor = '#444';

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Juancho", "Vega", "Charly", "Guitian", "Marcos", "Pepe", "Demi", "Nico", "Marcos", "Herraez", "Arjona", "Jesus", "Gabi"],
        datasets: [{
            label: 'Points per game',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById("myRadarChart").getContext('2d');
var myRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First Dataset",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(0, 150, 136, 0.2)",
            borderColor: "teal",
            pointBackgroundColor: "teal",
            pointBorderColor: "rgba(6, 77, 64)",
            pointHoverBackgroundColor: "rgba(6, 77, 64)",
            pointHoverBorderColor: "rgba(6, 77, 64)"
            // FIXME: Deactivate hover on points in overall view, activate on detail view
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0,
                borderWidth: 3
            }
        },
        scale: {
            ticks: {
                beginAtZero: true,
                display: false
            }
        },
        responsive: true,
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById("myRadarChart2").getContext('2d');
var myRadarChart2 = new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First Dataset",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(0, 150, 136, 0.2)",
            borderColor: "teal",
            pointBackgroundColor: "teal",
            pointBorderColor: "rgba(6, 77, 64)",
            pointHoverBackgroundColor: "rgba(6, 77, 64)",
            pointHoverBorderColor: "rgba(6, 77, 64)"
            // FIXME: Deactivate hover on points in overall view, activate on detail view
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0,
                borderWidth: 3
            }
        },
        scale: {
            ticks: {
                beginAtZero: true,
                display: false
            }
        },
        responsive: true,
        legend: {
            display: false
        }
    }
});