import { NavLinks } from './models';
import { DataContext } from '@/context';
import { useContext } from 'react';
import { HeaderStyle, NavBarStyle, NavLinkStyle } from './navbar.styled';
import { CloseMenuIcon, MenuIcon, MoonIcon, SunIcon } from '@/icons';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
	const { theme, changeTheme, menu, toggleMenu } = useContext(DataContext);

	return (
		<>
			<HeaderStyle>
				<NavBarStyle>
					<NavLink to={'/'}>
						<p>Photo Search.</p>
					</NavLink>
					<div onClick={toggleMenu}>
						{menu ? <CloseMenuIcon /> : <MenuIcon />}
					</div>
				</NavBarStyle>
				<NavLinkStyle menu={menu}>
					<ul>
						<li
							onClick={() => {
								changeTheme();
								toggleMenu();
							}}>
							{theme === 'Light' ? <SunIcon /> : <MoonIcon />}
							<span>{theme} Mode</span>
						</li>
						{NavLinks.map(({ name, Icon, link }) => (
							<NavLink
								to={link}
								key={name}
								className={({ isActive }) => (isActive ? 'active' : undefined)}
								onClick={toggleMenu}>
								<Icon />
								<span>{name}</span>
							</NavLink>
						))}
					</ul>
				</NavLinkStyle>
			</HeaderStyle>
		</>
	);
};

export default NavBar;
