// chatgpt
const data = {
    labels: ['مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی'],
    datasets: [{
        label: 'رزومه ارسال شده',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(240, 245, 96, 0.75)',
        borderColor: 'rgb(167, 169, 27)',
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(252, 255, 62, 0.91)'
    }, {
        label: 'رزومه مصاحبه شده',
        data: [2, 3, 1, 2, 1, 0],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(153, 102, 255, 0.6)'
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                    borderDash: [8, 4]
                },
                title: {
                    display: true,
                    text: 'تعداد رزومه ها / مصاحبه ها',
                    color: '#666'
                }
            },
            x: {
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                    borderDash: [8, 4]
                },
                title: {
                    display: true,
                    text: 'ماه ها',
                    color: '#666'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#444'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#777',
                borderWidth: 1
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutBounce'
        }
    }
};

const resumeChart = new Chart(
    document.getElementById('resumeChart'),
    config
);
