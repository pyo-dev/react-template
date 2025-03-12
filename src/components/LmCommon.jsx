import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LmAxios } from '@/axios/LmAxios';

import HOOK_LM_LODING from '@/store/hooks/hookLoding';

import LmLoding from '@/components/LmLoding';
import LmPop from '@/components/LmPop';
import LmToastPop from '@/components/LmToastPop';

const LmCommon = () => {
	const location = useLocation();
	const { getLmLoding, setLmLoding } = HOOK_LM_LODING();

	useEffect(() => {
		// Axios 인터셉터로 상태 업데이트
		const requestInterceptor = LmAxios.interceptors.request.use(
		(config) => {
				setLmLoding({show: true});
				return config;
			},
			(error) => {
				setLmLoding({show: false});
				return Promise.reject(error);
			}
		);

		const responseInterceptor = LmAxios.interceptors.response.use(
		(response) => {
				setLmLoding({show: false});
				return response;
			},
			(error) => {
				setLmLoding({show: false});
				return Promise.reject(error);
			}
		);

		// 컴포넌트 언마운트 시 인터셉터 제거
		return () => {
			LmAxios.interceptors.request.eject(requestInterceptor);
			LmAxios.interceptors.response.eject(responseInterceptor);
		};
	}, [getLmLoding.show, location]);

	return (
		<>
			<LmToastPop/>
			<LmPop/>
			<LmLoding/>
		</>
	);
};

export default LmCommon;
