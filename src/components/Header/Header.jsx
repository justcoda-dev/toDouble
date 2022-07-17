import scss from './header.module.scss';
import Logo from '../UI/Logo/Logo';
import NavBar from '../UI/NavBar/NavBar';
import HeaderButton from '../UI/HeaderButton/HeaderButton';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={scss.header}>
      <Container parentClass={scss.container}>
        <Logo />
        <div className={scss.navigation}>
          <NavBar />
          <HeaderButton>Заказать</HeaderButton>
        </div>
      </Container>
    </header>
  );
};
export default Header;
