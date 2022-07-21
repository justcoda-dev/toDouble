import scss from './headerMenuBurger.module.scss';
import { useState } from 'react';
import HeaderMenuBurgerItem from './HeaderMenuBurgerItem';

const HeaderMenuBurger = ({ menuList }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClickHandle = () => setOpenMenu(!openMenu);

  return (
    <div className={scss.wrapper}>
      <div className={scss.buttonWrapper}>
        <div onClick={onClickHandle} className={`${scss.button}`}>
          <div
            className={`${scss.stick} ${openMenu ? scss.open : scss.closed}`}
          />
          <div
            className={`${scss.stick} ${openMenu ? scss.open : scss.closed}`}
          />
          <div
            className={`${scss.stick} ${openMenu ? scss.open : scss.closed}`}
          />
        </div>
      </div>
      <nav
        style={openMenu ? { display: 'flex' } : { display: 'none' }}
        className={scss.menu}
      >
        <ul className={scss.list}>
          {menuList.map((item) => (
            <HeaderMenuBurgerItem
              onClick={onClickHandle}
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default HeaderMenuBurger;
