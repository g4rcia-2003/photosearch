import { useContext } from 'react';
import { Router } from '@/routes';
import { Layout } from '@/layout';
import { NavBar } from '@/components';
import { DataContext } from '@/context';
import { Dark, Light } from '@/styles/theme';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyles';

const App = () => {
	const { theme } = useContext(DataContext);
	let mode = theme === 'Light';
	return (
		<ThemeProvider theme={mode ? Light : Dark}>
			<GlobalStyle />
			<NavBar />
			<Layout>
				<Routes>
					{Router.map(({ name, path, Component }) => (
						<Route key={name} path={path} element={<Component />} />
					))}
				</Routes>
			</Layout>
		</ThemeProvider>
	);
};

export default App;
