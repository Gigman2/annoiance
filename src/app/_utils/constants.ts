import { faker } from "@faker-js/faker";
import { ChartData } from "chart.js";
import { generateRandomColors } from "../_lib/helpers/misc";

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
    labels: ['1', '3', '15', '17', '19', '21', '23'],
    datasets: [
        {
            label: 'Data from websites',
            data: [1, 0, 0, 0, 1, 1, 0],
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
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: generateRandomColors(6),
        hoverOffset: 10
    }]
};

// 'rgba(59, 50, 16, 1)'