import { Card, Loader, ModalData } from '@/components';
import { DataContext } from '@/context';
import { useEffect, useState, useContext } from 'react';
import { getData } from '@/data';
import { HomeStyle } from './home.style';
import { useInfinitScroll } from '@/hooks/';
const Home = () => {
	const { setDataApi, dataApi } = useContext(DataContext);
	const [isLoading, setIsLoading] = useState(true);
	const { page, handleInfiniteScroll } = useInfinitScroll();

	useEffect(() => {
		const api = import.meta.env.VITE_MY_API_KEY;
		getData(`photos?page=${page}&client_id=${api}`).then((data) => {
			setIsLoading(false);
			const newData = data.filter((x) => !dataApi.find((i) => i.id === x.id));
			setDataApi([...dataApi, ...newData]);
		});
	}, [page]);

	useEffect(() => {
		window.addEventListener('scroll', handleInfiniteScroll);
		return () => window.removeEventListener('scroll', handleInfiniteScroll);
	}, []);

	return (
		<>
			<HomeStyle>
				{isLoading ? (
					<Loader />
				) : (
					dataApi.map(({ id, urls, alt_description, width, height }) => (
						<Card
							key={id}
							url={urls.full}
							alt={alt_description}
							width={width}
							height={height}
							id={id}
						/>
					))
				)}
			</HomeStyle>
			<ModalData />
		</>
	);
};

export default Home;
