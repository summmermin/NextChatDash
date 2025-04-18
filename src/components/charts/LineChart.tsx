// src/components/charts/LineChart.tsx
'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

interface LineChartProps {
    labels: string[]; // x축 라벨
    data: number[];   // y축 데이터
    label: string;    // 데이터 레이블
}

export default function LineChart({ labels, data, label }: LineChartProps) {
    const chartData = {
        labels,
        datasets: [
            {
                label,
                data,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <Line data={chartData} />
        </div>
    );
}
