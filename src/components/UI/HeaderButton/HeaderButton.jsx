import scss from './headerButton.module.scss';
import classNames from 'classnames';

const HeaderButton = ({ onClick, type, disabled, children, parentClass }) => {
  return (
    <button
      className={classNames({
        [scss.button]: true,
        [parentClass]: !!parentClass,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children.toUpperCase()}
    </button>
  );
};
export default HeaderButton;
