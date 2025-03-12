import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export const LineChart = ({data}) => {

	// X 축에 표시할 레이블 데이터
	let labelData = data?.labelData || [
		'월', '화', '수', '목', '금', '토', '일'
	];

	// Line 차트의 데이터셋 데이터
	let datasetsData = data?.datasetsData || [12, 19, 3, 5, 2, 3, 20];

	const lmData = {
		labels: labelData,
		datasets: [
			{
				data: datasetsData,
				borderColor: 'back', // 선 색상
				borderWidth: 1, // 선의 굵기 설정
				tension: 0, // 선의 곡률 설정 (0에 가까울수록 직선)
				pointBackgroundColor: 'white', // 데이터 포인트 배경 색상
				pointBorderColor: 'black', // 데이터 포인트 테두리 색상
				pointBorderWidth: 2, // 데이터 포인트 테두리 두께
				pointRadius: 2, // 데이터 포인트 반경
				pointHoverRadius: 6, // 호버시 데이터 포인트 반경
				pointHoverBackgroundColor: 'black', // 호버시 데이터 포인트 배경 색상
				pointHoverBorderColor: 'black', // 호버시 데이터 포인트 테두리 색상
			},
		],
	};

	const options = {
		interaction: {
			intersect: false,
		},
		maintainAspectRatio: false, // 차트 비율 유지 여부
		layout: {
			padding: 0 // 차트 레이아웃 패딩
		},
		plugins: {
			legend: {
				display: false // 범례 표시 여부
			},
			tooltip: {
				callbacks: {
					title: ctx => {
						return ctx[0].label + '---------'; // 툴팁 타이틀 설정
					},
					label: ctx => {
						return ctx.raw.toLocaleString(); // 툴팁 라벨 포맷 설정 (숫자 형식 지정)
					}
				}
			}
		},
		scales: {
			x: {
				border: {
					display: false, // X 축 테두리 표시 여부
				},
				ticks: {
					color: '#B1B9CB' // X 축 눈금 색상
				},
				grid: {
					display: false // X 축 그리드 표시 여부
				}
			},
			y: {
				max: Math.max(...datasetsData) + 5, // Y 축 최대 값 설정
				beginAtZero: true, // Y 축 최소 값 0으로 설정
				border: {
					display: false, // Y 축 테두리 표시 여부
					dash: [5], // Y 축 테두리 대시 배열 설정
				},
				ticks: {
					display: false,
					color: '#B1B9CB' // Y 축 눈금 색상
				},
				grid: {
					color: "#E2E8F0 " // Y 축 그리드 색상
				}
			}
		}
	};

	return <Line data={lmData} options={options} />;
};
