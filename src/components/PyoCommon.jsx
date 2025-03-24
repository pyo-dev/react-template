import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PyoAxios } from '@/axios/PyoAxios';

import HOOK_PYO_LODING from '@/store/hooks/hookLoding';

import PyoLoding from '@/components/PyoLoding';
import PyoPop from '@/components/PyoPop';
import PyoToastPop from '@/components/PyoToastPop';

const PyoCommon = () => {
	const location = useLocation();
	const { getPyoLoding, setPyoLoding } = HOOK_PYO_LODING();

	useEffect(() => {
		// Axios 인터셉터로 상태 업데이트
		const requestInterceptor = PyoAxios.interceptors.request.use(
		(config) => {
				setPyoLoding({show: true});
				return config;
			},
			(error) => {
				setPyoLoding({show: false});
				return Promise.reject(error);
			}
		);

		const responseInterceptor = PyoAxios.interceptors.response.use(
		(response) => {
				setPyoLoding({show: false});
				return response;
			},
			(error) => {
				setPyoLoding({show: false});
				return Promise.reject(error);
			}
		);

		// 컴포넌트 언마운트 시 인터셉터 제거
		return () => {
			PyoAxios.interceptors.request.eject(requestInterceptor);
			PyoAxios.interceptors.response.eject(responseInterceptor);
		};
	}, [getPyoLoding.show, location]);

	return (
		<>
			<PyoToastPop/>
			<PyoPop/>
			<PyoLoding/>
		</>
	);
};

export default PyoCommon;
