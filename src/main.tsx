import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Loader } from './components';
import { ContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense fallback={<Loader />}>
		<BrowserRouter>
			<ContextProvider>
				<App />
			</ContextProvider>
		</BrowserRouter>
	</Suspense>
);
