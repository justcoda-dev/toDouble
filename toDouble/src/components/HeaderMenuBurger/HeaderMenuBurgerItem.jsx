import scss from './headerMenuBurger.module.scss';

const HeaderMenuBurgerItem = ({ item, onClick }) => {
  return (
    <li onClick={onClick} className={scss.item}>
      <a className={scss.listItemSrc}>{item.text.toUpperCase()}</a>
    </li>
  );
};
export default HeaderMenuBurgerItem;
