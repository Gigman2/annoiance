import { faker } from "@faker-js/faker";
import { ChartData } from "chart.js";

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const,
        },
        scales: {
            x: {
                type: 'linear',
            },
            y: {
                type: 'linear',
            },
        },
    },
};


export const lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
        {
            label: 'Data from websites',
            data: [],
            borderColor: 'rgb(59, 50, 16)',
            backgroundColor: 'rgba(59, 50, 16, 1)',
            pointRadius: 0,
            tension: 0.1
        },
        {
            label: 'Data received forwarded',
            data: [],
            borderColor: 'rgb(255, 191, 0)',
            backgroundColor: 'rgba(255, 191, 0, 1)',
            pointRadius: 0,
            tension: 0.1
        },
    ],
};

export const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: false,
        },
        scales: {
            x: {
                type: 'linear',
            },
            y: {
                type: 'linear',
            },
        },
    },
};

export const doughnutChartData = {
    labels: [
        'completefarmer.com',
        'gwarthur.org',
        'loveeconomychurch.org'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 191, 0)',
            'rgba(59, 50, 16, 1)',
            'rgba(59, 50, 16, 1)'
        ],
        hoverOffset: 10
    }]
};