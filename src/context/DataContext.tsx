import { createContext, useEffect, useState } from 'react';
import React from 'react';
import { childrenPropsInterfaces, dataContextInterfaces } from './interfaces';
import { PhotoInterface } from '@/data';

export const DataContext = createContext<dataContextInterfaces>(
	{} as dataContextInterfaces
);

export const ContextProvider: React.FC<childrenPropsInterfaces> = ({
	children,
}) => {
	const [theme, setTheme] = useState<string>('Dark');
	const [menu, setMenu] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [dataApi, setDataApi] = useState<PhotoInterface[]>([]);
	const [dataSearch, setDataSearch] = useState<PhotoInterface[]>([]);
	const [dataInfo, setDataInfo] = useState<PhotoInterface[]>([]);
	const [useModal, setUseModal] = useState<boolean>(false);

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const changeTheme = () => {
		setTheme(theme === 'Light' ? 'Dark' : 'Light');
	};

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<DataContext.Provider
			value={{
				theme,
				changeTheme,
				menu,
				setMenu,
				toggleMenu,
				inputValue,
				setInputValue,
				dataApi,
				setDataApi,
				dataInfo,
				setDataInfo,
				dataSearch,
				setDataSearch,
				useModal,
				setUseModal,
			}}>
			{children}
		</DataContext.Provider>
	);
};
