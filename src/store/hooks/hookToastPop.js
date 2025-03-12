import { useRecoilState } from 'recoil';
import { LM_TOAST_POP } from '@/store/storeToastPop';

const HOOK_LM_TOAST_POP = () => {
	const [getLmToastPop, updateLmToastPop] = useRecoilState(LM_TOAST_POP);

	const setLmToastPop = (data) => {
		updateLmToastPop((prevLmToastPop) => {
			return {
				...prevLmToastPop,
				...data
			}
		});
	};

	return {
		getLmToastPop,
		setLmToastPop,
	};
};

export default HOOK_LM_TOAST_POP;