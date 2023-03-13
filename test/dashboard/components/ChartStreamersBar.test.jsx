import { render, screen } from '@testing-library/react';
import { defaultData, options } from '../../../src/dashboard/charts/configBar';
import { ChartStreamersBar } from '../../../src/dashboard/components/ChartStreamersBar';
import { getChartFilter } from '../../../src/helpers';

import { streamers } from '../../fixtures/StreamersList';

jest.mock('react-chartjs-2', () => {
    
    const { forwardRef } = require('react');
    const Bar = forwardRef((props, ref) => <div ref={ref} {...props}></div>);
    return {
        Bar,
    };
      
});

describe('Pruebas en <ChartStreamersBar/>', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el grafico (Bar) con el estado de por defecto', () => {
        
        render(<ChartStreamersBar streamers={{}} spinner={true}/>);

        const div = screen.getAllByLabelText('chartBar');
        const value = {...Object.values(div[0])[1]};
        const dataChart = defaultData();


        expect( value.options ).toEqual(options);

        expect( value.data ).toEqual(dataChart);

    });

    test('debe mostrar el grafico (Bar) con el TOP 10 mayores vistas', () => {

        render(<ChartStreamersBar streamers={streamers} spinner={false}/>);

        const div = screen.getAllByLabelText('chartBar');
        const value = {...Object.values(div[0])[1]};
        const { labels, data } = getChartFilter(streamers, "views");
        const dataChart = defaultData(labels, data);


        expect( value.options ).toEqual(options);

        expect( value.data ).toEqual(dataChart);
    });
});

