import { LeadermineReactBoardCodePaging } from "./CodePaging";
import { LeadermineReactBoardCodeBasicList } from "./CodeBasicList";
import { LeadermineReactBoardCodeBasicView } from "./CodeBasicView";
import { LeadermineReactBoardCodeFaqList } from "./CodeFaqList";
import { LeadermineReactBoardCodePageList } from "./CodePageList";
import { LeadermineReactBoardCodePageView } from "./CodePageView";
import { LeadermineReactBoardCodePageList2 } from "./CodePageList2";

export const LeadermineReactBoardCode = () => {

	return (
		<>
			<div className="lm-panel lm-panel-flex-wrap">
				<LeadermineReactBoardCodePaging />
				<LeadermineReactBoardCodeBasicList />
				<LeadermineReactBoardCodeBasicView />
				<LeadermineReactBoardCodeFaqList />
				<LeadermineReactBoardCodePageList />
				<LeadermineReactBoardCodePageView />
				<LeadermineReactBoardCodePageList2 />
			</div>
		</>
	);
};
