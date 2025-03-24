import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'PYO_TOAST_POP',
	// storage: sessionStorage,
});

const PYO_TOAST_POP_RESET = {
	position: {
		bottom: '0',
		right: '0',
	},
	width: '500px',
	padding: '20px',
	items: null
}

export const PYO_TOAST_POP = atom({
	key: 'PYO_TOAST_POP_ATOM',
	default: {
		reset: PYO_TOAST_POP_RESET,
		...PYO_TOAST_POP_RESET
	},
	effects_UNSTABLE: [persistAtom],
});
