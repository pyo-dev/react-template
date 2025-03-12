import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'LM_LODING',
	// storage: sessionStorage,
});

const LM_LODING_RESET = {
	show: false,
}

export const LM_LODING = atom({
	key: 'LM_LODING_ATOM',
	default: {
		reset: LM_LODING_RESET,
		...LM_LODING_RESET
	},
	// effects_UNSTABLE: [persistAtom],
});
