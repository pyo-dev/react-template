import { PyoNavButton } from "@/components/PyoButton";
import { useNavigate } from "react-router-dom";

export const Main = () => {
	const navigate = useNavigate();

	const goNav = (to) => {
		navigate(to);
	}
	return (
		<div className="pyo-panel-vertical">
			<div className="pyo-dashboard-wrap">
				<div className="pyo-panel icon-pos" onClick={()=> goNav(`/pyo-dev/design`)}>
					<div className="pyo-icon-box color-1 icon-pos-box"><div className="pyo-icon-smile color-white"></div></div>
					<div className="pyo-panel-info">
						<div className="title">DESIGN</div>
						<div className="des">pyo-dev 내부 디자인 에셋</div>
						<div className="bottom-box">
							<div className="like">
								<div className="pyo-icon-hand-best"></div> +200
							</div>
							<button className="link">
								<div className="pyo-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
				<div className="pyo-panel icon-pos" onClick={()=> goNav(`/pyo-dev/filter`)}>
					<div className="pyo-icon-box color-5 icon-pos-box"><div className="pyo-icon-el color-white"></div></div>
					<div className="pyo-panel-info">
						<div className="title">FILTER</div>
						<div className="des">pyo-dev javascript 필터 모음</div>
						<div className="bottom-box">
							<div className="like">
								<div className="pyo-icon-hand-best"></div> +100
							</div>
							<button className="link">
								<div className="pyo-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
				<div className="pyo-panel icon-pos" onClick={()=> goNav(`/pyo-dev/loader`)}>
					<div className="pyo-icon-box color-3 icon-pos-box"><div className="pyo-icon-play color-white"></div></div>
					<div className="pyo-panel-info">
						<div className="title">LOADER</div>
						<div className="des">pyo-dev css loader 모음</div>
						<div className="bottom-box">
							<div className="like">
								<div className="pyo-icon-hand-best"></div> +10
							</div>
							<button className="link">
								<div className="pyo-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
				<div className="pyo-panel icon-pos" onClick={()=> goNav(`/pyo-dev/react`)}>
					<div className="pyo-icon-box color-4 icon-pos-box"><div className="pyo-icon-star color-white"></div></div><div className="pyo-panel-info">
						<div className="title">REACT</div>
						<div className="des">react 사용법 및 플러그인 모음</div>
						<div className="bottom-box">
							<div className="like">
								<div className="pyo-icon-hand-best"></div> +7
							</div>
							<button className="link">
								<div className="pyo-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
