export const options = {
    responsive: true,
    scales: {
        x: {
            ticks: {
                color: '#888'
            },
        },
        y: {
            ticks: {
                callback: function(value){
                    const valueLegend = this.getLabelForValue(value);
                    const valueLegendRep = valueLegend.replaceAll(',', '');
                    if (valueLegendRep.length === 1) {
                        return valueLegendRep;
                    }
                    if (valueLegendRep.length === 10) {
                        return valueLegendRep.substr(0,3) + 'M';
                    }
                    if (valueLegendRep.length === 11) {
                        return valueLegendRep.substr(0,4) + 'M';
                    }
                },
                color: '#888'
            },
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            labels: {
                boxWidth: 0
            }
        },
  }
};
  
const labelsDefault = ['Cargando', 'Cargando', 'Cargando', 'Cargando', 'Cargando', 'Cargando', 'Cargando', 'Cargando', 'Cargando', 'Cargando'];
const dataDefault = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100]
  
export const defaultData = (labels = labelsDefault, data = dataDefault ) => { 

    const dataChart = {
        labels,
        datasets: [
          {
            label: '',
            data: data,
            backgroundColor: '#9147ff',
            borderWidth: 2
          }
        ],
    };

    return dataChart
};
  


