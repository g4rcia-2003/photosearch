import { SearchIcon } from '../../icons';
import { SearchStyle } from './search.styled';
import { ChangeEvent, useContext } from 'react';
import { DataContext } from '@/context';

const SearchComponent = () => {
	const { inputValue, setInputValue } = useContext(DataContext);

	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};

	return (
		<SearchStyle>
			<SearchIcon />
			<input
				placeholder='Search for a image...'
				value={inputValue}
				onChange={(e) => changeInput(e)}
			/>
		</SearchStyle>
	);
};

export default SearchComponent;
