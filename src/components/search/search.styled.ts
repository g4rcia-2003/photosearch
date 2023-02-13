import styled from 'styled-components';

export const SearchStyle = styled.section`
	width: 88%;
	margin: auto;
	height: 2.4rem;
	display: flex;
	padding: 0 2rem;
	position: fixed;
	border-radius: 2rem;
	align-items: center;
	background: ${({ theme }) => theme.elements};
	justify-content: space-between;
	-webkit-box-shadow: 0px 0px 6px 0.2px ${({ theme }) => theme.shadow};
	-moz-box-shadow: 0px 0px 6px 0.2px ${({ theme }) => theme.shadow};
	box-shadow: 0px 0px 6px 0.2px ${({ theme }) => theme.shadow};

	svg {
		color: ${({ theme }) => theme.text};
		width: 1.3rem;
	}

	input {
		color: ${({ theme }) => theme.text};
		background-color: transparent;
		border: none;
		width: 85%;
		font-family: 'Noto Sans', sans-serif;

		::placeholder {
			color: ${({ theme }) => theme.text};
			font-size: 0.8rem;
		}
		&:focus {
			outline: none;
		}
	}
`;
