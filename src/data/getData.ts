import axios from 'axios';
import { PhotoInterface } from './interfaceData';
import { OptionsData } from './interfaceOp';

const BASE_URL = 'https://api.unsplash.com/';
export const getData = async (url: string) => {
	const { data } = await axios.get<PhotoInterface[] | OptionsData>(
		`${BASE_URL}${url}`
	);
	return data instanceof Array ? data : data.results;
};
