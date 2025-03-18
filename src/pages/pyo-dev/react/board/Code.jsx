import { PyoDevReactBoardCodePaging } from "./CodePaging";
import { PyoDevReactBoardCodeBasicList } from "./CodeBasicList";
import { PyoDevReactBoardCodeBasicView } from "./CodeBasicView";
import { PyoDevReactBoardCodeFaqList } from "./CodeFaqList";
import { PyoDevReactBoardCodePageList } from "./CodePageList";
import { PyoDevReactBoardCodePageView } from "./CodePageView";
import { PyoDevReactBoardCodePageList2 } from "./CodePageList2";

export const PyoDevReactBoardCode = () => {

	return (
		<>
			<div className="lm-panel lm-panel-flex-wrap">
				<PyoDevReactBoardCodePaging />
				<PyoDevReactBoardCodeBasicList />
				<PyoDevReactBoardCodeBasicView />
				<PyoDevReactBoardCodeFaqList />
				<PyoDevReactBoardCodePageList />
				<PyoDevReactBoardCodePageView />
				<PyoDevReactBoardCodePageList2 />
			</div>
		</>
	);
};
