import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getChartFilter } from '../../helpers';
import { defaultData, options } from '../charts/configBar';

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

export const ChartStreamersBar = ({streamers, spinner }) => {
    const dataDefault = defaultData();

    if ( spinner ) return ( <Bar aria-label='chartBar' options={options} data={dataDefault} /> );

    const { labels, data } = getChartFilter(streamers, "views");

    const dataChart = defaultData(labels, data);
    

    return (
        <>
            <Bar aria-label='chartBar' options={options} data={dataChart} />
        </>
    );
};
