import { useRecoilState } from 'recoil';
import { PYO_POP } from '@/store/storePop';

const HOOK_PYO_POP = () => {
	const [getPyoPop, updatePyoPop] = useRecoilState(PYO_POP);

	const setPyoPop = (data) => {
		updatePyoPop((prevPyoPop) => ({
			...prevPyoPop,
			...data
		}));
	};

	return {
		getPyoPop,
		setPyoPop,
	};
};

export default HOOK_PYO_POP;