import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'LM_TOAST_POP',
	// storage: sessionStorage,
});

const LM_TOAST_POP_RESET = {
	position: {
		bottom: '0',
		right: '0',
	},
	width: '500px',
	padding: '20px',
	items: null
}

export const LM_TOAST_POP = atom({
	key: 'LM_TOAST_POP_ATOM',
	default: {
		reset: LM_TOAST_POP_RESET,
		...LM_TOAST_POP_RESET
	},
	effects_UNSTABLE: [persistAtom],
});
