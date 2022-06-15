
    const labels = [
      '1 Maio',
      '2 Maio',
      '3 Maio',
      '4 Maio',
      '5 Maio',
      '6 Maio',
      '7 Maio',
      '8 Maio',
      '9 Maio',
      '10 Maio',

    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Ações A',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 10, 5, 2, 20, 30, 45],
      }, 

      {
        label: 'Açoes B',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {}
    };
  
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
   
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // CÓDIGO DO GRÁFICO INTERNO 1

    const labels_grafico_interno1 = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
  
      ];
    
      const data_grafico_interno1 = {
        labels: labels_grafico_interno1,
        datasets: [{
          label: 'Ações A',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [10, 10, 5, 2, 20, 30, 45],
          pointRadius:0,
        }]
      };
    
      const config_grafico_interno1 = {
        type: 'line',
        data: data_grafico_interno1,
        options: {
            plugins: {
              title: {
                display: false
              },
              legend: {
                display: false
              }
            },
            scales: {
                x: {
                  grid: {
                    display: false,
                  }
                },
                y: {
                    grid: {
                      display: false,
                    }
                  }
            },
            interaction: {
              intersect: false,
            }
          }
      };
    
      const grafico_interno1 = new Chart(        
        document.getElementById('grafico_interno1'),
        config_grafico_interno1
      );
     

      /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // CÓDIGO DO GRÁFICO INTERNO 2

    const labels_grafico_interno2 = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',

    ];
  
    const data_grafico_interno2 = {
      labels: labels_grafico_interno2,
      datasets: [{
        label: 'Ações A',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 10, 5, 2, 20, 30, 45],
        pointRadius:0,
      }]
    };
  
    const config_grafico_interno2 = {
      type: 'line',
      data: data_grafico_interno2,
      options: {
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: false
            }
          },
          scales: {
              x: {
                grid: {
                  display: false,
                }
              },
              y: {
                  grid: {
                    display: false,
                  }
                }
          },
          interaction: {
            intersect: false,
          }
        }
    };
  
    const grafico_interno2 = new Chart(        
      document.getElementById('grafico_interno2'),
      config_grafico_interno2
    );



/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                     // CÓDIGO DO GRÁFICO INTERNO 3

  const labels_grafico_interno3 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
                            
  ];

  const data_grafico_interno3 = {
    labels: labels_grafico_interno3,
    datasets: [{
      label: 'Ações A',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 10, 5, 2, 20, 30, 45],
      pointRadius:0,
    }]
  };

  const config_grafico_interno3 = {
    type: 'line',
    data: data_grafico_interno3,
    options: {
        plugins: {
          title: {
            display: false
          },
          legend: {
            display: false
          }
        },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
                grid: {
                  display: false,
                }
              }
        },
        interaction: {
          intersect: false,
        }
      }
  };

  const grafico_interno3 = new Chart(        
    document.getElementById('grafico_interno3'),
    config_grafico_interno3
  );


/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                     // CÓDIGO DO GRÁFICO INTERNO 3

 const labels_grafico_interno4 = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
                          
];
                                  
const data_grafico_interno4 = {
  labels: labels_grafico_interno4,
  datasets: [{
    label: 'Ações A',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [10, 10, 5, 2, 20, 30, 45],
    pointRadius:0,
  }]
};
                                  
const config_grafico_interno4 = {
  type: 'line',
  data: data_grafico_interno4,
  options: {
      plugins: {
        title: {
          display: false
        },
        legend: {
          display: false
        }
      },
      scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
              grid: {
                display: false,
              }
            }
      },
      interaction: {
        intersect: false,
      }
    }
};
                                  
const grafico_interno4 = new Chart(        
  document.getElementById('grafico_interno4'),
  config_grafico_interno4
);  
