import Highlight from 'react-highlight'

import { BarChart } from '@/components/chart/BarChart'
import { LineChart } from '@/components/chart/LineChart'
import { PieChart } from '@/components/chart/PieChart'
import { DoughnutChart } from '@/components/chart/DoughnutChart'

export const ChartJs = () => {
	const chartCode1 = ` // 사용법
// Pie
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export const 컴포넌트이름 = () => {


	const pyoData = {
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

	return <Pie data={pyoData} options={options} />;
};


// Doughnut
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export const 컴포넌트이름 = () => {


	const pyoData = {
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

	return <Doughnut data={pyoData} options={options} />;
};
`

	const chartCode2 = ` // 사용법
// Line
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export const 컴포넌트이름 = ({data}) => {
	const pyoData = {
		labels: ['월', '화', '수', '목', '금', '토', '일'],
		datasets: [
			{
				data: [12, 19, 3, 5, 2, 3, 20],
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

	return <Line data={pyoData} options={options} />;
};
`

	const chartCode3 = ` // 사용법
// Bar
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export const 컴포넌트이름 = () => {
	// 막대 그래프의 데이터셋 데이터 (기본값 제공)
	const datasetsData = [12, 19, 3, 5, 2, 3, 20, 12, 19, 3, 5, 50];
	const datasetsData2 = [1, 2, 3, 5, 2, 3, 20, 12, 19, 3, 5, 50];

	// 차트 데이터 구성
	const pyoData = {
		labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		datasets: [
			{
				data: datasetsData,
				backgroundColor: '#B1B9CB', // 막대 색상
				hoverBackgroundColor: 'black', // 호버시 배경 색상
				borderWidth: 0, // 막대 테두리 두께
				borderRadius: 60, // 막대 모서리 반경
				barThickness: 14 // 막대 두께
			},
		],
	};

	// 차트 옵션 구성
	const options = {
		interaction: {
			intersect: false,
		},
		maintainAspectRatio: false, // 차트 비율 유지 여부
		layout: {
			padding: {
				top: 10,
				left: 0,
				bottom: 0,
				right: 0,
			} // 차트 레이아웃 패딩
		},
		plugins: {
			legend: {
				display: false // 범례 표시 여부
			},
			tooltip: {
				enabled: false, // 기본 툴팁 비활성화
				external: function(context) {
					// 툴팁 엘리먼트 선택 또는 생성
					let tooltipEl = document.getElementById('chartjs-tooltip');
					if (!tooltipEl) {
						tooltipEl = document.createElement('div');
						tooltipEl.id = 'chartjs-tooltip';
						tooltipEl.style.opacity = 0;
						tooltipEl.style.position = 'absolute';
						tooltipEl.style.background = '#2E3F57';
						tooltipEl.style.color = 'white';
						tooltipEl.style.borderRadius = '8px';
						tooltipEl.style.padding = '16px';
						tooltipEl.style.pointerEvents = 'none';
						tooltipEl.style.transition = 'opacity 0.3s ease, left 0.3s ease, top 0.3s ease'; // 애니메이션 추가
						document.body.appendChild(tooltipEl);

						const arrowEl = document.createElement('div');
						arrowEl.className = 'tooltip-arrow';
						arrowEl.style.position = 'absolute';
						arrowEl.style.width = '0';
						arrowEl.style.height = '0';
						tooltipEl.appendChild(arrowEl);
					}

					// 툴팁 모델 가져오기
					const tooltipModel = context.tooltip;

					// 툴팁이 표시되지 않으면 숨김 처리
					if (tooltipModel.opacity === 0) {
						tooltipEl.style.opacity = 0;
						return;
					}

					// 툴팁 데이터 설정
					const titleLines = tooltipModel.title || [];
					const bodyLines = tooltipModel.body.map(item => item.lines);
					const pIndex = tooltipModel.dataPoints[0].dataIndex;
					const pyoLabelData = pyoData.labels[pIndex];
					const pyoDatasetsData = datasetsData[pIndex];
					const pyoDatasetsData2 = datasetsData2[pIndex];
					// 툴팁 내용 업데이트
					let innerHtml = '<div style="min-width: 96px;">';
					titleLines.forEach(title => {
						innerHtml += \`<div style="font-size: 14px; font-weight: 600;">\${pyoLabelData}</div>\`;
					});
					bodyLines.forEach(body => {
						innerHtml += \`
							<div style="display: flex; justify-content: space-between; font-size: 13px; margin-top: 5px;">
								<div style="color: #B1B9CB">상담</div>
								<div>\${pyoDatasetsData?.toLocaleString()}건</div>
							</div>
							<div style="display: flex; justify-content: space-between; font-size: 13px;">
								<div style="color: #B1B9CB">답변</div>
								<div>\${pyoDatasetsData2?.toLocaleString()}건</div>
							</div>
						\`;
					});
					innerHtml += '</div>';

					tooltipEl.innerHTML = innerHtml;

					// 화살표 요소가 툴팁 안에 있는지 확인하고 없으면 추가
					let arrowEl = tooltipEl.querySelector('.tooltip-arrow');
					if (!arrowEl) {
						arrowEl = document.createElement('div');
						arrowEl.className = 'tooltip-arrow';
						arrowEl.style.position = 'absolute';
						arrowEl.style.width = '0';
						arrowEl.style.height = '0';
						tooltipEl.appendChild(arrowEl);
					}

					// 화살표 스타일 설정
					arrowEl.style.borderTop = '5px solid transparent';
					arrowEl.style.borderBottom = '5px solid transparent';

					// 툴팁 위치 및 화살표 설정 함수
					const setTooltipPosition = (tooltipEl, context, tooltipModel) => {
						if (!tooltipEl) return; // tooltipEl이 null인지 확인

						const position = context.chart.canvas.getBoundingClientRect();
						const tooltipWidth = tooltipEl.offsetWidth;
						const tooltipHeight = tooltipEl.offsetHeight;
						const caretX = tooltipModel.caretX;
						const caretY = tooltipModel.caretY;

						// 툴팁을 차트 바 위에 중앙으로 배치
						tooltipEl.style.opacity = 1;
						tooltipEl.style.left = position.left + window.scrollX + caretX - tooltipWidth / 2 + 'px';
						tooltipEl.style.top = position.top + window.scrollY + caretY - tooltipHeight - 10 + 'px'; // 툴팁과 화살표 사이의 간격을 최소화

						// 화살표 위치 및 스타일 설정
						arrowEl.style.left = (tooltipWidth / 2 - 8) + 'px';
						arrowEl.style.top = '100%'; // 툴팁 아래에 바로 붙음
						arrowEl.style.marginTop = '-1px'; // 화살표를 툴팁에 붙이기 위해 마이너스 마진 사용
						arrowEl.style.borderLeft = '8px solid transparent';
						arrowEl.style.borderRight = '8px solid transparent';
						arrowEl.style.borderTop = '8px solid #2E3F57';
					};

					// 툴팁 위치 설정 함수 호출
					setTooltipPosition(tooltipEl, context, tooltipModel);
				}
			}
		},
		scales: {
			x: {
				border: {
					display: false, // X축 테두리 표시 여부
				},
				ticks: {
					color: '#B1B9CB' // X축 텍스트 색상
				},
				grid: {
					display: false // X축 그리드 표시 여부
				}
			},
			y: {
				// max: Math.max(...datasetsData)  * 1.1, // Y축 최대 값 설정
				beginAtZero: true, // Y축 최소 값 0으로 설정
				border: {
					display: false, // Y축 테두리 표시 여부
					dash: [5], // Y축 테두리 대시 배열 설정
				},
				ticks: {
					color: '#B1B9CB' // Y축 텍스트 색상
				},
				grid: {
					color: "#E2E8F0 " // Y축 그리드 색상
				}
			}
		}
	};

	return <Bar data={pyoData} options={options} />;
};
`

	let barChartData = {
		labelData: [
			'7/1(월)',
			'7/2(화)',
			'7/3(수)',
			'7/4(목)',
			'7/5(금)',
			'7/6(토)',
			'7/7(일)',
			'7/8(월)',
			'7/9(화)',
			'7/10(수)',
			'7/11(목)',
			'7/12(금)',
			'7/13(토)',
			'7/14(일)',
			'7/15(월)',
			'7/16(화)',
			'7/17(수)',
			'7/18(목)',
			'7/19(금)',
			'7/21(토)',
			'7/22(일)',
			'7/23(월)',
			'7/24(화)',
			'7/25(수)',
			'7/26(목)',
			'7/27(금)',
			'7/28(토)',
			'7/29(일)',
			'7/30(월)',
		],
		datasetsData: [1200, 1900, 3000, 5000, 2000, 3000, 2000, 1200, 1900, 3000, 5000, 2000, 3000, 2000, 1200, 1900, 3000, 5000, 200, 3000, 2000, 1200, 1900, 3000, 5000, 2000, 3000, 2000, 3000, 2000],
		datasetsData2: [2, 3, 20, 12, 19, 3, 5, 2, 3, 20, 12, 19, 3, 5, 2, 3, 20, 12, 19, 3, 5, 2, 3, 20, 3, 20, 12, 19, 3, 5,]
	}

	let lineChartData = {
		labelData: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		datasetsData: [12, 19, 3, 5, 2, 3, 20, 12, 19, 3, 5, 50]
	}

	return (
		<>

			<div className="pyo-panel pyo-panel-flex-wrap">
				<Highlight className='javascript pyo-panel-code'>{chartCode1}</Highlight>
				<div style={{height: '222px'}}> 
					<PieChart />
				</div>
				<div style={{height: '222px'}}> 
					<DoughnutChart />
				</div>
			</div>

			<div className="pyo-panel pyo-panel-flex-wrap">
			<Highlight className='javascript pyo-panel-code'>{chartCode2}</Highlight>
				<div style={{width: '100%', height: '222px'}}> 
					<LineChart data={lineChartData} />
				</div>
			</div>

			<div className="pyo-panel pyo-panel-flex-wrap">
			<Highlight className='javascript pyo-panel-code'>{chartCode3}</Highlight>
				<div style={{width: '100%', height: '222px'}}> 
					<BarChart data={barChartData} />
				</div>
			</div>
		</>
	);
};