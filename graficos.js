
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
                                // CÓDIGO DO GRÁFICO INTERNO

    const labels_grafico_interno = [
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
    
      const data_grafico_interno = {
        labels: labels_grafico_interno,
        datasets: [{
          label: 'Ações A',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [10, 10, 5, 2, 20, 30, 45],
          pointRadius:0,
        }]
      };
    
      const config_grafico_interno = {
        type: 'line',
        data: data_grafico_interno,
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
    
      const grafico_interno = new Chart(        
        document.getElementById('grafico_interno'),
        config_grafico_interno
      );
     