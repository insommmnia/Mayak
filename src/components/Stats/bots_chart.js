import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BotsChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Янв', 'Фев', 'Мар'],
                datasets: [{
                    label: '',
                    data: [3, 12, 42],
                    fill: true,
                    backgroundColor: 'rgba(101, 43, 193, 0.2)',
                    borderColor: 'rgba(101, 43, 193, 0.692)',
                    tension: 0.1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        intersect: false,
                        mode: 'index'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <canvas ref={chartRef}></canvas>
    );
};
export default BotsChart;