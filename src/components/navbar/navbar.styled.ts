import styled from 'styled-components';

interface NavProps {
	menu: boolean;
}

export const HeaderStyle = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const NavBarStyle = styled.section`
	width: 100%;
	display: flex;
	position: fixed;
	flex-flow: row wrap;
	padding: 1.2rem 1.5rem;
	z-index: 10;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.elements};
	-webkit-box-shadow: 0px 0px 12px -8px ${({ theme }) => theme.shadow};
	-moz-box-shadow: 0px 0px 12px -8px ${({ theme }) => theme.shadow};
	box-shadow: 0px 0px 12px -8px ${({ theme }) => theme.shadow};
	color: ${({ theme }) => theme.text};

	a {
		color: ${({ theme }) => theme.text};
	}

	p {
		font-size: 1.25rem;
		font-weight: bold;
	}

	div {
		width: 1.6rem;
		cursor: pointer;
		svg {
			width: 100%;
			height: 100%;
			color: ${({ theme }) => theme.text};
		}
	}
`;

export const NavLinkStyle = styled.nav<NavProps>`
	bottom: 0;
	z-index: 10;
	width: 88%;
	display: flex;
	flex-direction: column;
	position: fixed;
	transition: all 2s ease;
	justify-content: center;
	min-height: calc(100vh - 4.47rem);
	color: ${({ theme }) => theme.text};
	left: ${({ menu }) => (menu ? '0' : '-100%')};
	background: ${({ theme }) => theme.elements};
	-webkit-box-shadow: -1px 0px 12px -8px ${({ theme }) => theme.shadow};
	-moz-box-shadow: -1px 0px 12px -8px ${({ theme }) => theme.shadow};
	box-shadow: -1px 0px 12px -8px ${({ theme }) => theme.shadow};

	ul {
		width: 50%;
		margin: 2rem auto;
		display: flex;
		flex-direction: column;
		gap: 1.4rem;
		justify-content: center;
		align-items: start;

		.active {
			border-right: 0.2rem solid ${({ theme }) => theme.text};
		}

		a,
		li {
			width: 100%;
			list-style: none;
			display: flex;
			gap: 0.7rem;
			align-items: center;
			color: ${({ theme }) => theme.text};

			svg {
				width: 1.3rem;
			}
		}
	}

	@media (min-width: 768px) {
		width: 50%;
	}
`;
