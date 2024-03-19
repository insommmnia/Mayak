import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AnketCharts = () => {
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
                    data: [132, 432, 592],
                    fill: true,
                    backgroundColor: 'rgba(188, 43, 193, 0.2)',
                    borderColor: 'rgba(188, 43, 193, 0.678)',
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
            }
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
export default AnketCharts;