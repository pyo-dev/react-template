import { useEffect } from 'react';
import HOOK_LM_USER_INFO from '@/store/hooks/hookUserInfo';

export const Login = () => {
	const { getUserInfo, setUserInfo } = HOOK_LM_USER_INFO();

	useEffect(() => {
		setUserInfo('reset');
		console.log(getUserInfo);
	}, []);

	return (
		<div className='login-wrap'>
			<div className='login-inner'>
				<div className='title-wrap'>
					<div className='title'>LOGIN</div>
					<div className='copy'>Please enter your login and password!</div>
				</div>
				<div className='form-wrap'>
					<input type="text" placeholder='ID' />
					<input type="password" placeholder='PASSWORD' />
				</div>
				<div className='bt-wrap'>
					<button className='sign-in'>SIGN IN</button>
					<button className='sign-up'>SIGN UP</button>
				</div>
			</div>
		</div>
	);
};