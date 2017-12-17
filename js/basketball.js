var tabsElements = document.querySelectorAll('.tabs');
for (let index = 0; index < tabsElements.length; index++) {
    new M.Tabs(tabsElements[index], {
        //swipeable: true //FIXME: this fucks up everything
    });
}

// Setup sidenav
new M.Sidenav(document.querySelector('.sidenav'));

var collapsibleElements = document.querySelectorAll('.collapsible');
for (let index = 0; index < collapsibleElements.length; index++) {
    new M.Collapsible(collapsibleElements[index], {
        //swipeable: true //FIXME: this fucks up everything
    });
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
        // responsive: true,
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById("myRadarChart").getContext('2d');
var myRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["Attack", "Technique", "Stamina", "Defense", "Power", "Speed"],
        datasets: [{
            label: "My First Dataset",
            data: [65, 59, 10, 81, 56, 55],
            fill: true,
            backgroundColor: "rgba(0, 150, 136, 0.2)",
            borderColor: "teal",
            pointBackgroundColor: "teal",
            pointBorderColor: "rgba(6, 77, 64)"
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
        // responsive: true,
        legend: {
            display: false
        },
        elements: {
            line: {
                borderWidth: "3",
            },
            point: {
                borderWidth: "2",
                radius: "4",
                hoverRadius: "4"
            }
        }
    }
});