import scss from './navBar.module.scss';
import { firstLetterUp } from '../../../functions/firstLetterUp';

const NavBar = () => {
  // styled

  // /styled
  const list = [
    { id: 1, text: 'услуги', to: '' },
    { id: 2, text: 'портфолио', to: '' },
    { id: 3, text: 'этапы', to: '' },
    { id: 4, text: 'дизайнеры', to: '' },
  ];
  return (
    <nav className={scss.list}>
      {list.map((item) => (
        <a key={item.id} className={scss.item} href="#">
          {firstLetterUp(item.text)}
        </a>
      ))}
    </nav>
  );
};
export default NavBar;
