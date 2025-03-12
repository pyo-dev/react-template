import { useRecoilState } from 'recoil';
import { LM_LODING } from '@/store/storeLoding';

const HOOK_LM_LODING = () => {
	const [getLmLoding, updateLmLoding] = useRecoilState(LM_LODING);

	const setLmLoding = (data) => {
		updateLmLoding((prevLmLoding) => ({
			...prevLmLoding,
			...data
		}));
	};

	return {
		getLmLoding,
		setLmLoding,
	};
};

export default HOOK_LM_LODING;