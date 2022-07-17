import scss from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ onClick, type, disabled, children, parentClass }) => {
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
export default Button;
