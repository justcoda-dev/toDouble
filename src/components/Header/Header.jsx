import scss from './header.module.scss';
import Logo from '../UI/Logo/Logo';
import NavBar from '../UI/NavBar/NavBar';
import HeaderButton from '../UI/HeaderButton/HeaderButton';
import Container from '../Container/Container';
import { useEffect, useState } from 'react';
import debounce from '../../functions/debounce';
import HeaderMenuBurger from '../HeaderMenuBurger/HeaderMenuBurger';

const list = [
  { id: 1, text: 'услуги', to: '' },
  { id: 2, text: 'портфолио', to: '' },
  { id: 3, text: 'этапы', to: '' },
  { id: 4, text: 'дизайнеры', to: '' },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const resizeCb = debounce(() => {
    if (window.innerWidth <= 1000) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, 200);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMobileMenu(true);
    }
    window.addEventListener('resize', resizeCb);
  }, []);

  return (
    <header className={scss.header}>
      <Container parentClass={scss.container}>
        <Logo />
        <div className={scss.navigation}>
          {mobileMenu ? (
            <HeaderMenuBurger menuList={list} />
          ) : (
            <NavBar list={list} />
          )}
          {!mobileMenu && <HeaderButton>Заказать</HeaderButton>}
        </div>
      </Container>
    </header>
  );
};
export default Header;
