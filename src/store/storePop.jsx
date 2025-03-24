import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'PYO_POP',
	// storage: sessionStorage,
});

const PYO_POP_RESET = {
	show: false,
	type: 'alert',
	title: null,
	contents: null,
	cancle_title: '취소',
	cancle_fun: null,
	success_title: '확인',
	success_fun: null
}

export const PYO_POP = atom({
	key: 'PYO_POP_ATOM',
	default: {
		reset: PYO_POP_RESET,
		...PYO_POP_RESET
	},
	effects_UNSTABLE: [persistAtom],
});
