import scss from './container.module.scss';
import classNames from 'classnames';

const Container = ({ children, parentClass }) => {
  return (
    <div
      className={classNames({
        [scss.container]: true,
        [parentClass]: !!parentClass,
      })}
    >
      {children}
    </div>
  );
};
export default Container;
