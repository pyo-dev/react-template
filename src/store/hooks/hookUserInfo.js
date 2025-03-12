import { useRecoilState } from 'recoil';
import { LM_USER_INFO } from '@/store/storeUserInfo';
import { LmAxios } from '@/axios/LmAxios';

const HOOK_LM_USER_INFO = () => {
	const [getUserInfo, updateUserInfo] = useRecoilState(LM_USER_INFO);

	const setUserInfo = async (id) => {

		if(id === 'reset'){
			updateUserInfo();
			return false;
		}

		try {
			const res = await LmAxios({
				method: 'GET',
				url: `/user_info.php?user_id=${id}`,
			});
			const resData = res.data.data;
			updateUserInfo((prevLmPop) => ({
				...prevLmPop,
				...resData
			}));
		} catch (err) {
			console.error(err);
		}
	};

	return {
		getUserInfo,
		setUserInfo,
	};
};

export default HOOK_LM_USER_INFO;