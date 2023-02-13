import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
	children?: Route[];
}

export const Router: Route[] = [
	{
		path: '/',
		Component: lazy(() => import('@/pages/home/Home')),
		name: 'Home',
	},
	{
		path: '/search',
		Component: lazy(() => import('@/pages/search/Search')),
		name: 'Search',
	},
];
