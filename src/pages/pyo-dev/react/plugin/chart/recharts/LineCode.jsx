import Highlight from 'react-highlight'
const chartCode = ` // 사용법
import { useState, useRef, useEffect } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

// 샘플 데이터
const data = [
	{ name: "Page A", data1: 100, data2: 400 },
	{ name: "Page B", data1: 400, data2: 200 },
	{ name: "Page C", data1: 100, data2: 500 },
	{ name: "Page D", data1: 700, data2: 100 },
	{ name: "Page E", data1: 200, data2: 500 },
	{ name: "Page F", data1: 100, data2: 700 },
	{ name: "Page G", data1: 800, data2: 700 },
];

// 커스텀 툴팁 컴포넌트
const CustomTooltip = ({ active, payload, label, setTooltipSize, tooltipPos }) => {
	const tooltipRef = useRef();

	// 툴팁 크기를 업데이트
	useEffect(() => {
		if (tooltipRef.current) {
			const { offsetWidth: width, offsetHeight: height } = tooltipRef.current;
			setTooltipSize({ width, height });
		}
	}, [tooltipRef.current]);

	if (active && payload && payload.length) {
		console.log(tooltipPos);
		return (
			<div
				ref={tooltipRef}
				style={{
					padding: "10px",
					background: "rgba(0,0,0,0.9)",
					borderRadius: "10px",
					color: "white",
					whiteSpace: "nowrap",
				}}
			>
				<p className="intro">{tooltipPos.xPosOver ? 'right' : 'left'}</p>
				<p className="intro">{label}</p>
				<p className="label">{\`\${payload[0].name} : \${payload[0].value}\`}</p>
				<p className="label">{\`\${payload[1].name} : \${payload[1].value}\`}</p>
				<div style={{
					position: 'absolute',
					top: '15px',
					right: tooltipPos.xPosOver ? '-10px' : 'auto',
					left: !tooltipPos.xPosOver ? '-10px' : 'auto',
					width: 0,
					height: 0,
					borderStyle: 'solid',
					borderWidth: !tooltipPos.xPosOver ? '5px 10px 5px 0px' : '5px 0px 5px 10px',
					borderColor: !tooltipPos.xPosOver ? 'transparent rgba(0,0,0,0.9) transparent transparent' : 'transparent transparent transparent rgba(0, 0, 0, 0.9)'
				}}></div>
			</div>
		);
	}

	return null;
};

// 차트 컴포넌트
export const ReChartLinePreview = () => {
	const [tooltipPos, setTooltipPos] = useState({});
	const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });
	const chartRef = useRef(); // 차트 컨테이너 참조
	let label1Pos = [];
	let label2Pos = [];

	// 데이터1의 라벨 위치 저장 및 렌더링
	const CustomizedLabel1 = ({ x, y, value }) => {
		if (label1Pos.length < data.length) label1Pos.push({ x, y });
		return (
			<text
				x={x}
				y={y}
				dy={-4}
				fill="#8884d8"
				fontSize={10}
				textAnchor="middle"
			>
				{value}
			</text>
		);
	};

	// 데이터2의 라벨 위치 저장 및 렌더링
	const CustomizedLabel2 = ({ x, y, value }) => {
		if (label2Pos.length < data.length) label2Pos.push({ x, y });
		return (
			<text
				x={x}
				y={y}
				dy={-4}
				fill="#82ca9d"
				fontSize={10}
				textAnchor="middle"
			>
				{value}
			</text>
		);
	};

	// 툴팁 위치 계산
	const handleTooltipData = (resData) => {
		if (resData.isTooltipActive) {
			const { activeTooltipIndex } = resData;
			const chartWidth = chartRef.current?.offsetWidth || 0; // 차트 컨테이너 너비
			const chartHeight = chartRef.current?.offsetHeight || 0; // 차트 컨테이너 높이

			// X축 경계를 고려한 위치 조정
			const xPosOver = label1Pos[activeTooltipIndex]?.x + tooltipSize.width > chartWidth;
			const x = xPosOver ? label1Pos[activeTooltipIndex]?.x - tooltipSize.width - 20 : label1Pos[activeTooltipIndex]?.x + 20;

			// Y축 경계를 고려한 위치 조정
			const y =
				Math.min(
					label1Pos[activeTooltipIndex]?.y,
					label2Pos[activeTooltipIndex]?.y
				) - 20;

			const adjustedY =
				y < 0
					? 10 // 툴팁이 차트 위쪽 밖으로 나가지 않도록
					: y + tooltipSize.height > chartHeight
						? chartHeight - tooltipSize.height - 10 // 툴팁이 차트 아래쪽 밖으로 나가지 않도록
						: y;

			setTooltipPos({ xPosOver, x, y: adjustedY });
		}
	};

	return (
		<div ref={chartRef}>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
					onMouseMove={handleTooltipData}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip
						content={
							<CustomTooltip setTooltipSize={setTooltipSize} tooltipPos={tooltipPos} />
						}
						position={tooltipPos}
					/>
					<Legend />
					<Line
						type="monotone"
						dataKey="data1"
						stroke="#8884d8"
						label={<CustomizedLabel1 />}
					/>
					<Line
						type="monotone"
						dataKey="data2"
						stroke="#82ca9d"
						label={<CustomizedLabel2 />}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
`

export const ReChartLineCode = () => {
	return (
		<Highlight className='javascript pyo-panel-code'>{chartCode}</Highlight>
	);
};
