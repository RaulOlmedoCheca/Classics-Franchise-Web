// Init the tabs
new M.Tabs(document.querySelector('.tabs'), {
    //swipeable: true //FIXME: this fucks up everything
});

// Init sidenav
new M.Sidenav(document.querySelector('.sidenav'));

// TODO: var instance = new M.FeatureDiscovery(document.querySelector('.tap-target'));

function loadRoster() {
    var players, staff;
    firebase.database().ref('roster/').once('value').then(function (snapshot) {
        players = snapshot.child('players/').val();
        staff = snapshot.child('staff/').val();
    }).then(function () {
        for (let index = 0; index < players.length; index++) {
        var playerCardHTML = '<div class="col s10 m6 l4 offset-s1">' +
            '<div class="card">' +
            '<div class="card-image">' +
                '<img src="images/sample-1.jpg">' + /*FIXME: Cuidadito con la foto*/ /*TODO: meter aqui un feature discovery*/
                '<a class="btn-floating btn-large halfway-fab waves-effect waves-light teal activator hoverable">' +
                '<i class="material-icons">add</i>' +
                '</a>' +
                '<span class="card-title">' + players[index].number + '</span>' + /*TODO: meter aqui una sombra*/
            '</div>' +
            '<div class="card-content">' +
                '<span class="card-title uppercase">' + players[index].name + '</span>' +
                '<p class="grey-text">' + players[index].position + '</p>' +
            '</div>' +
            '<div class="card-reveal">' +
                '<span class="card-title grey-text text-darken-4">' + players[index].title +
                '<i class="material-icons right">close</i>' +
                '</span>' +
                '<p>' + players[index].description + '</p>' +
            '</div>' +
            '</div>' +
        '</div>';
            // Create a new DOM element in the html 
            var playerCard = document.createElement('div');
            // Using the post template above set
            playerCard.innerHTML = playerCardHTML;
            // Append the post to the desired DOM element
            document.querySelector('#roster > div:nth-child(1)').appendChild(playerCard);
        }

        for (let index = 0; index < staff.length; index++) {
            var staffCardHTML = '<div class="col s10 m6 l4 offset-s1">' +
            '<div class="card">' +
              '<div class="card-image">' +
                '<img src="images/sample-1.jpg">' +
                '<!-- TODO: meter aqui un feature discovery -->' +
                '<a class="btn-floating btn-large halfway-fab waves-effect waves-light teal activator hoverable">' +
                  '<i class="material-icons">add</i>' +
                '</a>' +
              '</div>' +
              '<div class="card-content">' +
                '<span class="card-title uppercase">' + staff[index].name + '</span>' +
                '<p class="grey-text">' + staff[index].role + '</p>' +
              '</div>' +
              '<div class="card-reveal">' +
                '<span class="card-title grey-text text-darken-4">' + staff[index].title +
                  '<i class="material-icons right">close</i>' +
                '</span>' +
                '<p>' + staff[index].description + '</p>' +
              '</div>' +
            '</div>' +
          '</div>';
          // Create a new DOM element in the html 
          var staffCard = document.createElement('div');
          // Using the post template above set
          staffCard.innerHTML = staffCardHTML;
          // Append the post to the desired DOM element
          document.querySelector('#roster > div:nth-child(2)').appendChild(staffCard);
        }

        
    });
}

function loadCharts() {
    // Query the firebase database to get the values of the chart
    var barChart, radarChart;
    firebase.database().ref('charts/').once('value').then(function (snapshot) {
    barChart = snapshot.child('bars/').val();
    radarChart = snapshot.child('radar/').val();

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
                              '<i class="material-icons">keyboard_arrow_right</i>Crónica</div>' +
                            '<div class="collapsible-body grey lighten-3">' +
                              '<span>' + gamePosts[index].matchChronicle + '</span>' +
                            '</div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="collapsible-header">' +
                              '<i class="material-icons">keyboard_arrow_right</i>Result</div>' +
                            '<div class="collapsible-body grey lighten-3">' +
                              '<span>' + gamePosts[index].matchResult + '</span>' +
                            '</div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="collapsible-header">' +
                              '<i class="material-icons">keyboard_arrow_right</i>Puntos jugador partido</div>' +
                            '<div class="collapsible-body grey lighten-3">' +
                              '<table class="bordered">' +
                                '<thead>' +
                                  '<tr>' +
                                    '<th>Name</th>' +
                                    '<th>Points</th>' +
                                  '</tr>' +
                                '</thead>' +
                                '<tbody>' +
                                '</tbody>' +
                              '</table>' +
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
            var elem = gamePost.firstElementChild.firstElementChild.lastElementChild.firstElementChild; 
            new M.Collapsible(elem, {
                // TODO: animate arrows to change on collapsible open
                // onOpenStart:,
                // onCloseStart: 
            });

            // Create the table with the points per game and player and append it to the section wanted
            for (let jindex = 0; jindex < gamePosts[index].matchPoints.length; jindex++) {
                var tablePointsHTML =
                    '<td>' + gamePosts[index].matchPoints[jindex].player + '</td>' +
                    '<td>' + gamePosts[index].matchPoints[jindex].points + '</td>';
                var tablePoints = document.createElement('tr');
                tablePoints.innerHTML = tablePointsHTML;
                elem.lastElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(tablePoints);                
            }
        }
    });
    // TODO: split the table generation in to another query??
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

// TODO: revisar queries para que no este pillando mas de lo necesario

