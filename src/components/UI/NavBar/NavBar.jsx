import scss from './navBar.module.scss';
import { firstLetterUp } from '../../../functions/firstLetterUp';

const NavBar = ({ list = [] }) => {
  return (
    <nav className={scss.list}>
      {list.length
        ? list.map((item) => (
            <a key={item.id} className={scss.item} href="#">
              {firstLetterUp(item.text)}
            </a>
          ))
        : 'Loading'}
    </nav>
  );
};
export default NavBar;
