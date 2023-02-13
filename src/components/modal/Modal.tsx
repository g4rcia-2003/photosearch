import { DataContext } from '@/context';
import { CloseIcon, InstagramIcon, TwitterIcon } from '@/icons';
import PortfolioIcon from '@/icons/PortfolioIcon';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	ContainerModal,
	DataModal,
	DataUser,
	HeaderModal,
	ModalStyle,
	SocialNetworks,
} from './modal.style';

const ModalData = () => {
	const { useModal, setUseModal, dataInfo } = useContext(DataContext);

	return (
		<>
			{useModal && (
				<ModalStyle>
					<ContainerModal>
						<HeaderModal>
							<div onClick={() => setUseModal(false)}>
								<CloseIcon />
							</div>
							<img src={`${dataInfo[0].urls?.full}`} />
						</HeaderModal>
						<hr />

						<p>Data Image</p>
						<hr />
						<DataModal>
							<p>
								Likes: <span>{dataInfo[0].likes}</span>
							</p>
							<p>
								Width: <span>{dataInfo[0].width}</span>
							</p>
							<p>
								Height: <span>{dataInfo[0].height}</span>
							</p>
						</DataModal>
						<hr />
						<p>Data User</p>
						<hr />
						<DataUser>
							<div>
								<div className='icon'>
									<img src={`${dataInfo[0].user.profile_image.large}`} />
								</div>
								<p>{dataInfo[0].user.username}</p>
							</div>
							<p>{dataInfo[0].user.bio}</p>

							<SocialNetworks>
								{dataInfo[0].user.social.instagram_username !== null && (
									<Link
										to={`https://www.instagram.com/${dataInfo[0].user.social.instagram_username}`}>
										<InstagramIcon />
									</Link>
								)}
								{dataInfo[0].user.social.portfolio_url !== null && (
									<Link to={dataInfo[0].user.social.portfolio_url}>
										<PortfolioIcon />
									</Link>
								)}
								{dataInfo[0].user.social.twitter_username !== null && (
									<Link
										to={`https://twitter.com/${dataInfo[0].user.social.twitter_username}`}>
										<TwitterIcon />
									</Link>
								)}
							</SocialNetworks>
						</DataUser>
					</ContainerModal>
				</ModalStyle>
			)}
		</>
	);
};

export default ModalData;
