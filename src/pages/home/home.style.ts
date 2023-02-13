import styled from 'styled-components';
export const HomeStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
	grid-gap: 0.6rem;
	grid-auto-row: minmax(12rem, auto);
	grid-auto-flow: dense;

	& .b-height {
		grid-row: span 1;
	}

	& .b-width {
		grid-column: span 2;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		grid-auto-row: minmax(16rem, auto);
	}

	@media (min-width: 1250px) {
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		grid-auto-row: minmax(18rem, auto);
	}
`;
