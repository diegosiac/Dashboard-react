import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getChartFilter } from '../../helpers/getChartFilter';
import { defaultData, options } from '../charts/configLine';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const ChartStreamersLine = ({streamers, spinner }) => {
    
    const dataDefault = defaultData();

    if ( spinner ) return ( <Line options={options} data={dataDefault} /> );

    const { labels, data } = getChartFilter(streamers, "follows");

    const dataChart = defaultData(labels, data);

    return (
        <>
            <Line options={options} data={dataChart} />
        </>
    );
};
