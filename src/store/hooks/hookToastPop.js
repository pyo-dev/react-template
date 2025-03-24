import { useRecoilState } from 'recoil';
import { PYO_TOAST_POP } from '@/store/storeToastPop';

const HOOK_PYO_TOAST_POP = () => {
	const [getPyoToastPop, updatePyoToastPop] = useRecoilState(PYO_TOAST_POP);

	const setPyoToastPop = (data) => {
		updatePyoToastPop((prevPyoToastPop) => {
			return {
				...prevPyoToastPop,
				...data
			}
		});
	};

	return {
		getPyoToastPop,
		setPyoToastPop,
	};
};

export default HOOK_PYO_TOAST_POP;