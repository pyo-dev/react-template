import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from '@/router';

import PyoCommon from '@/components/PyoCommon';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<PyoCommon />
				<MyRouter />
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
