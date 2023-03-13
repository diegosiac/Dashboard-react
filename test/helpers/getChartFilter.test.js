import { getChartFilter } from '../../src/helpers/getChartFilter';
import { streamers } from '../fixtures/StreamersList';

describe('Pruebas en getChartFilter', () => { 

    test('debe retornar los 10 streamers con mayores vistas y sus nombres', () => { 

        const type = 'views';

        const { labels, data } = getChartFilter( streamers, type );
        
        expect( labels.length ).toBe( 10 );
        expect( data.length ).toBe( 10 );
    
    });

    test('debe retornar los 10 streamers con mayores seguidores y sus nombres', () => { 

        const type = 'follows';

        const { labels, data } = getChartFilter( streamers, type );
        
        expect( labels.length ).toBe( 10 );
        expect( data.length ).toBe( 10 );

    });

    test('debe un error por error en el parametro que se le manda', () => { 

        const type = 'este no es un type valido';

        const error = getChartFilter( streamers, type );
        
        expect( error ).toEqual({ error: "this type does not exist" });

    });

});