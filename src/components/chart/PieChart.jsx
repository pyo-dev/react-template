import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export const PieChart = () => {


	const lmData = {
		labels: ['빨', '주', '노', '초', '파'],
		datasets: [
			{
				data: [12, 19, 3, 5, 20],
				backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
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
				display: true // 범례 표시 여부
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
	};

	return <Pie data={lmData} options={options} />;
};
