// Init the tabs
new M.Tabs(document.querySelector('.tabs'), {
    //swipeable: true //FIXME: this fucks up everything
});

// Init sidenav
new M.Sidenav(document.querySelector('.sidenav'));

// TODO: var instance = new M.FeatureDiscovery(document.querySelector('.tap-target'));

function loadCharts() {
    // Query the firebase database to get the values of the chart
    var barChart, radarChart;
    firebase.database().ref('charts/').once('value').then(function (snapshot) {
    // TODO: creo que esto me lo he inventado -> We perform one query on the server to avoid two connections to the database
    barChart = snapshot.val();
    radarChart = barChart.radar;
    barChart = barChart.bars;

    }).then(function () {
        //TODO: rewrite this on each chart config 
        Chart.defaults.global.defaultFontColor = '#444';
        // Actually create the charts
        new Chart(document.getElementById("myBarChart").getContext('2d'), {
            type: "bar",
            data: { 
                labels: barChart.labels, // Get the data from the object previously filled with the database instance
                datasets: [{
                    label: "Points per game",
                    data: barChart.datasets.data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                    ],
                borderColor: [
                        "rgba(255,99,132,1)", 
                        "rgba(54, 162, 235, 1)", 
                        "rgba(255, 206, 86, 1)", 
                        "rgba(75, 192, 192, 1)", 
                        "rgba(153, 102, 255, 1)", 
                        "rgba(255, 159, 64, 1)"
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
                legend: {
                    display: false
                }
            }
        });
        new Chart(document.getElementById("myRadarChart").getContext('2d'), {
            type: "radar",
            data: {
                labels: radarChart.labels,
                datasets: [{
                    label: "My First Dataset",
                    data: radarChart.datasets.data,
                    fill: true,
                    backgroundColor: "rgba(0, 150, 136, 0.2)",
                    borderColor: "teal",
                    pointBackgroundColor: "teal",
                    pointBorderColor: "rgba(6, 77, 64)"
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
    });
}

function loadPosts() {
    var gamePosts, numberPosts;
    firebase.database().ref('gamePosts/').once('value').then(function (snapshot) {
        gamePosts = snapshot.val();
    }).then(function () {
        // Ir de game en game creando el html
        var activeClass = "active";
        for (let index = 0; index < gamePosts.length; index++) {
            var gamePostHTML = '<div class="col s12 m12 l6">' +
                    '<div class="card">' +
                      '<div class="card-content">' +
                        '<span class="card-title">' + gamePosts[index].matchRivals + '</span>' +
                      '</div>' +
                      '<div class="card-action">' +
                        '<ul class="collapsible z-depth-0">' +
                          '<li class="' + activeClass + '">' + //Set active if is the first of the list
                            '<div class="collapsible-header">' +
                              '<i class="material-icons">filter_drama</i>Crónica</div>' +
                            '<div class="collapsible-body grey lighten-3">' +
                              '<span>' + gamePosts[index].matchChronicle + '</span>' +
                            '</div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="collapsible-header">' +
                              '<i class="material-icons">place</i>Result</div>' +
                            '<div class="collapsible-body grey lighten-3">' +
                              '<span>' + gamePosts[index].matchResult + '</span>' +
                            '</div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="collapsible-header">' +
                              '<i class="material-icons">whatshot</i>Puntos jugador partido</div>' +
                            '<div class="collapsible-body grey lighten-3">' +
                              '<span>' + gamePosts[index].matchPoints + '</span>' +
                            '</div>' +
                          '</li>' +
                        '</ul>' +
                      '</div>' +
                    '</div>' +
                  '</div>';

            // After the first card, no other card will have the main collapsible active
            activeClass = "";

            // Create a new DOM element in the html 
            var gamePost = document.createElement('div');
            // Using the post template above set
            gamePost.innerHTML = gamePostHTML;
            // Append the post to the desired DOM element
            document.querySelector('#news > div:nth-child(1)').appendChild(gamePost);
            // Make the sections collapsibles 
            new M.Collapsible(gamePost.firstElementChild.firstElementChild.lastElementChild.firstElementChild);
        }
    });
// TODO: in a future, add a load more button to retrieve more shit from the server
}

function getNextMatch() {
    var nextMatch;
    firebase.database().ref('nextMatch/').once('value').then(function (snapshot) {
        nextMatch = snapshot.val();
    }).then(function () {
        document.querySelector('div.row div.col.m3.l3.offset-s3.offset-m1.offset-l1 p').firstChild.textContent = nextMatch;
    });
}
