import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'LM_POP',
	// storage: sessionStorage,
});

const LM_POP_RESET = {
	show: false,
	type: 'alert',
	title: null,
	contents: null,
	cancle_title: '취소',
	cancle_fun: null,
	success_title: '확인',
	success_fun: null
}

export const LM_POP = atom({
	key: 'LM_POP_ATOM',
	default: {
		reset: LM_POP_RESET,
		...LM_POP_RESET
	},
	effects_UNSTABLE: [persistAtom],
});
