import { PhotoInterface } from '@/data';

export interface childrenPropsInterfaces {
	children: JSX.Element | JSX.Element[];
}

export interface dataContextInterfaces {
	theme: string;
	changeTheme: () => void;
	inputValue: string;
	setInputValue: (e: string) => void;
	menu: boolean;
	setMenu: Dispatch<SetStateAction<boolean>>;
	toggleMenu: () => void;
	dataApi: PhotoInterface[];
	setDataApi: React.Dispatch<SetStateAction<PhotoInterface>>;
	dataInfo: PhotoInterface[];
	setDataInfo: React.Dispatch<React.SetStateAction<PhotoInterface[]>>;
	dataSearch: PhotoInterface[];
	setDataSearch: React.Dispatch<SetStateAction<PhotoInterface[]>>;
	useModal: boolean;
	setUseModal: React.Dispatch<React.SetStateAction<boolean>>;
}
