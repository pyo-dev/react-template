import { useRecoilState } from 'recoil';
import { PYO_USER_INFO } from '@/store/storeUserInfo';
import { PyoAxios } from '@/axios/PyoAxios';

const HOOK_PYO_USER_INFO = () => {
	const [getUserInfo, updateUserInfo] = useRecoilState(PYO_USER_INFO);

	const setUserInfo = async (id) => {

		if(id === 'reset'){
			updateUserInfo();
			return false;
		}

		try {
			const res = await PyoAxios({
				method: 'GET',
				url: `/user_info.php?user_id=${id}`,
			});
			const resData = res.data.data;
			updateUserInfo((prevPyoPop) => ({
				...prevPyoPop,
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

export default HOOK_PYO_USER_INFO;