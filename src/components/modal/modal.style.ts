import styled from 'styled-components';
export const ModalStyle = styled.div`
	width: 100vw;
	height: calc(100vh - 4.311rem);
	position: fixed;
	bottom: 0;
	left: 0;
	background: ${({ theme }) => theme.modal};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.text};
`;

export const ContainerModal = styled.div`
	width: 88%;
	min-height: 90%;
	background: ${({ theme }) => theme.elements};
	position: relative;
	border-radius: 1rem;
	box-shadow: 0px 0px 6px 1.6px ${({ theme }) => theme.shadow};
	padding: 1.6rem;
	opacity: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const HeaderModal = styled.div`
	width: 100%;
	height: 14rem;
	position: relative;

	svg {
		width: 2rem;
		color: ${({ theme }) => theme.text};
		z-index: 10;
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
	}

	img {
		width: 100%;
		height: 100%;
		opacity: 0.5;
		border-top-right-radius: 0.8rem;
		border-top-left-radius: 0.8rem;
	}
`;

export const DataModal = styled.div``;

export const DataUser = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	div {
		display: flex;
		gap: 1rem;
		align-items: center;

		& .icon {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;

			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}

			p {
				width: 90%;
				text-align: left;
			}
		}
	}
`;

export const SocialNetworks = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		color: ${({ theme }) => theme.text};
	}
`;
