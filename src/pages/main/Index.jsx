import { LmNavButton } from "@/components/LmButton";
import { useNavigate } from "react-router-dom";

export const Main = () => {
	const navigate = useNavigate();

	const goNav = (to) => {
		navigate(to);
	}
	return (
		<div className="lm-panel-vertical">
			<div className="lm-dashboard-wrap">
				<div className="lm-panel icon-pos" onClick={()=> goNav(`/leadermine/design`)}>
					<div className="lm-icon-box color-1 icon-pos-box"><div className="lm-icon-smile color-white"></div></div>
					<div className="lm-panel-info">
						<div className="title">DESIGN</div>
						<div className="des">리더마인 내부 디자인 에셋</div>
						<div className="bottom-box">
							<div className="like">
								<div className="lm-icon-hand-best"></div> +200
							</div>
							<button className="link">
								<div className="lm-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
				<div className="lm-panel icon-pos" onClick={()=> goNav(`/leadermine/filter`)}>
					<div className="lm-icon-box color-5 icon-pos-box"><div className="lm-icon-el color-white"></div></div>
					<div className="lm-panel-info">
						<div className="title">FILTER</div>
						<div className="des">리더마인 javascript 필터 모음</div>
						<div className="bottom-box">
							<div className="like">
								<div className="lm-icon-hand-best"></div> +100
							</div>
							<button className="link">
								<div className="lm-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
				<div className="lm-panel icon-pos" onClick={()=> goNav(`/leadermine/loader`)}>
					<div className="lm-icon-box color-3 icon-pos-box"><div className="lm-icon-play color-white"></div></div>
					<div className="lm-panel-info">
						<div className="title">LOADER</div>
						<div className="des">리더마인 css loader 모음</div>
						<div className="bottom-box">
							<div className="like">
								<div className="lm-icon-hand-best"></div> +10
							</div>
							<button className="link">
								<div className="lm-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
				<div className="lm-panel icon-pos" onClick={()=> goNav(`/leadermine/react`)}>
					<div className="lm-icon-box color-4 icon-pos-box"><div className="lm-icon-star color-white"></div></div><div className="lm-panel-info">
						<div className="title">REACT</div>
						<div className="des">react 사용법 및 플러그인 모음</div>
						<div className="bottom-box">
							<div className="like">
								<div className="lm-icon-hand-best"></div> +7
							</div>
							<button className="link">
								<div className="lm-icon-link"></div> 바로가기
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
