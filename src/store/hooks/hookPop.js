import { useRecoilState } from 'recoil';
import { LM_POP } from '@/store/storePop';

const HOOK_LM_POP = () => {
	const [getLmPop, updateLmPop] = useRecoilState(LM_POP);

	const setLmPop = (data) => {
		updateLmPop((prevLmPop) => ({
			...prevLmPop,
			...data
		}));
	};

	return {
		getLmPop,
		setLmPop,
	};
};

export default HOOK_LM_POP;