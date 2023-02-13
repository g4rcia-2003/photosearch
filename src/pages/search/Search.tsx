import { Card, ModalData, SearchComponent } from '@/components';
import { useEffect, useContext, useRef } from 'react';
import { useInfinitScroll } from '@/hooks/';
import { getData } from '@/data';
import { DataContext } from '@/context';
import { SearchWarning } from './search.style';

const Search = () => {
	const { inputValue, dataSearch, setDataSearch } = useContext(DataContext);
	const { handleInfiniteScroll, page } = useInfinitScroll();

	const debounceRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		const api = import.meta.env.VITE_MY_API_KEY;
		debounceRef.current && clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			getData(
				`search/photos?page=${page}&query=${inputValue}&client_id=${api}`
			).then((data) => {
				inputValue.length === 0 && setDataSearch([]);
				const newData = data.filter(
					(x) => !dataSearch.find((i) => i.id === x.id)
				);
				setDataSearch([...dataSearch, ...newData]);
			});
		}, 500);
	}, [inputValue, page]);

	useEffect(() => {
		window.addEventListener('scroll', handleInfiniteScroll);
		return () => window.removeEventListener('scroll', handleInfiniteScroll);
	}, []);

	return (
		<>
			<SearchComponent />
			{dataSearch.length === 0 ? (
				<SearchWarning>" Please Do a Search "</SearchWarning>
			) : (
				dataSearch.map(({ id, urls, alt_description, width, height }) => (
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
			<ModalData />
		</>
	);
};

export default Search;
