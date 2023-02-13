import { CardStyle } from './card.style';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '@/context';

interface CardProps {
	id: string;
	url: string;
	alt: string;
	width: number;
	height: number;
}

const Card = ({ id, url, alt, width, height }: CardProps) => {
	const { setUseModal, dataApi, dataSearch, setDataInfo } =
		useContext(DataContext);
	const [pixels, setPixels] = useState<string>('');

	const changeDataInfo = (id: string) => {
		if (dataSearch.length === 0) {
			const newData = dataApi.filter((x) => x.id === id);
			setDataInfo(newData);
		} else {
			const newData = dataSearch.filter((x) => x.id === id);
			setDataInfo(newData);
		}
	};

	useEffect(() => {
		width > height ? setPixels('b-width') : setPixels('b-height');
	}, []);

	return (
		<CardStyle
			className={`${pixels}`}
			onClick={() => {
				setUseModal(true);
				changeDataInfo(id);
			}}>
			<img src={url} alt={alt} />
		</CardStyle>
	);
};

export default Card;
