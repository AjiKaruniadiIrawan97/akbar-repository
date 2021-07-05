/* globals Chart:false, feather:false */

// (function () {
//   'use strict'

//   feather.replace()

//   // Graphs
//   var ctx = document.getElementById('myChart')
//   // eslint-disable-next-line no-unused-vars
//   var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday'
//       ],
//       datasets: [{
//         data: [
//           15339,
//           21345,
//           18483,
//           24003,
//           23489,
//           24092,
//           12034
//         ],
//         lineTension: 0,
//         backgroundColor: 'transparent',
//         borderColor: '#007bff',
//         borderWidth: 4,
//         pointBackgroundColor: '#007bff'
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: false
//           }
//         }]
//       },
//       legend: {
//         display: false
//       }
//     }
//   })
// })()

$(document).on("click", "#button", function() {
    let idDusun = $("#dusun").val();
    // console.log(idDusun);
    if (idDusun === 0) {
        $("#covidStatus").show();
    } else {
        $.ajax({
            url: "http://localhost:8000/penduduk/get-dusun/" + idDusun,
            type: "GET",
            success: function(res) {
                // console.log(res)
                var label = [];
                var value = [];
                for (var i in res) {
                    label.push(res[i].status);
                    value.push(res[i].total);
                }
                var ctx = document.getElementById('covidStatus').getContext('2d');
                var covidStatus = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: label,
                        datasets: [{
                            label: 'Jumlah Kasus Covid-19 Per Dusun',
                            borderColor: ['red', 'green', 'blue'],
                            backgroundColor: ['red', 'green', 'blue'],
                            borderWidth: [2, 2, 2],
                            // borderColor: 'rgb(255, 255, 255)',
                            data: value
                        }]
                    },
                    options: {}
                });
            }
        });
    }
});


$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8000/penduduk/get-status",
        type: "GET",
        success: function(res) {
            // console.log(res)
            var label = [];
            var value = [];
            for (var i in res) {
                label.push(res[i].status);
                value.push(res[i].total);
            }
            var ctx = document.getElementById('covidStatus').getContext('2d');
            var covidStatus = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: label,
                    datasets: [{
                        label: 'Jumlah Kasus Covid-19',
                        borderColor: ['red', 'green', 'blue'],
                        backgroundColor: ['red', 'green', 'blue'],
                        borderWidth: [2, 2, 2],
                        // borderColor: 'rgb(255, 255, 255)',
                        data: value
                    }]
                },
                options: {}
            });
        }
    });
});

const base_url_penduduk = "http://localhost:8000/penduduk";
$(document).ready(function() {
    $.ajax({
        url: base_url_penduduk,
        type: "GET",
        success: function(res) {
            // console.log(res);
            var t = $("#table").DataTable({
                data: res,
                columns: [{
                        data: "id",
                        className: "text-center fit",
                        title: "No"
                    },
                    {
                        data: "nama",
                        className: "text-left fit",
                        title: "Nama"
                    },
                    {
                        data: "ttl",
                        className: "text-left fit",
                        title: "Tempat/Tgl. Lahir"
                    },
                    {
                        data: null,
                        title: "Dusun",
                        render: function(data) {
                            return data.dusun.nama_dusun
                        }
                    },
                    {
                        data: "jenis_kelamin",
                        className: "text-center fit",
                        title: "Jenis Kelamin"
                    },
                    {
                        data: "status",
                        className: "text-center fit",
                        title: "Status"
                    },
                ]
            });
        }
    });
});