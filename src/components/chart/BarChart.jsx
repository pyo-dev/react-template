import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export const BarChart = ({ data }) => {
	// X축에 표시할 레이블 데이터 (기본값 제공)
	const labelData = data?.labelData || Array.from({ length: 30 }, (_, i) => i + 1);
	const reLabelData = labelData.map((el) => {
		return el.split('(')[0].split('/')[1] || el;
	});

	// 막대 그래프의 데이터셋 데이터 (기본값 제공)
	const datasetsData = data?.datasetsData || [12, 19, 3, 5, 2, 3, 20];
	const datasetsData2 = data?.datasetsData2 || [12, 19, 3, 5, 2, 3, 20];

	// 차트 데이터 구성
	const lmData = {
		labels: reLabelData,
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
					const lmLabelData = labelData[pIndex];
					const lmDatasetsData = datasetsData[pIndex];
					const lmDatasetsData2 = datasetsData2[pIndex];
					// 툴팁 내용 업데이트
					let innerHtml = '<div style="min-width: 96px;">';
					titleLines.forEach(title => {
						innerHtml += `<div style="font-size: 14px; font-weight: 600;">${lmLabelData}</div>`;
					});
					bodyLines.forEach(body => {
						innerHtml += `
							<div style="display: flex; justify-content: space-between; font-size: 13px; margin-top: 5px;">
								<div style="color: #B1B9CB">상담</div>
								<div>${lmDatasetsData?.toLocaleString()}건</div>
							</div>
							<div style="display: flex; justify-content: space-between; font-size: 13px;">
								<div style="color: #B1B9CB">답변</div>
								<div>${lmDatasetsData2?.toLocaleString()}건</div>
							</div>
						`;
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

	return <Bar data={lmData} options={options} />;
};
