import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'LM_USER_INFO',
	storage: sessionStorage,
});

const LM_USER_INFO_RESET = {}

export const LM_USER_INFO = atom({
	key: 'LM_USER_INFO_ATOM',
	default: {
		...LM_USER_INFO_RESET
	},
	effects_UNSTABLE: [persistAtom],
});
