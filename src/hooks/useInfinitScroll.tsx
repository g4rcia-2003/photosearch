import { useState } from 'react';

const useInfinitScroll = () => {
	const [page, setPage] = useState<number>(1);

	const nextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const handleInfiniteScroll = async () => {
		try {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				nextPage();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		page,
		handleInfiniteScroll,
	};
};

export default useInfinitScroll;
