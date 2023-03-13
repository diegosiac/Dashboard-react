import { render, screen } from '@testing-library/react';
import { defaultData, options } from '../../../src/dashboard/charts/configLine';
import { ChartStreamersLine } from '../../../src/dashboard/components/ChartStreamersLine';
import { getChartFilter } from '../../../src/helpers/getChartFilter';
import { streamers } from '../../fixtures/StreamersList';


jest.mock('react-chartjs-2', () => {
    
    const { forwardRef } = require('react');
    const Line = forwardRef((props, ref) => <div ref={ref} {...props}></div>);
    return {
        Line,
    };
      
});

describe('Pruebas en <ChartStreamersLine />', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el grafico (line) con el estado de por defecto', () => {
    
        render(<ChartStreamersLine streamers={{}} spinner={true}/>);
    
        const div = screen.getAllByLabelText('chart');
        const value = {...Object.values(div[0])[1]};
        const dataChart = defaultData();


        expect( value.options ).toEqual(options);

        expect( value.data ).toEqual(dataChart);

    }); 

    test('debe mostrar el grafico (line) con el TOP 10 mayores seguidores', () => {

        render(<ChartStreamersLine streamers={streamers} spinner={false}/>);
        
        const div = screen.getAllByLabelText('chartTrue');
        const value = {...Object.values(div[0])[1]};
        const { labels, data } = getChartFilter(streamers, "follows");
        const dataChart = defaultData(labels, data);

        expect( value.options ).toEqual(options);

        expect( value.data ).toEqual(dataChart);

    });
    
});

