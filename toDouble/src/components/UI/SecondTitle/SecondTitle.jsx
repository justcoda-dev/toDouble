import scss from './secondTitle.module.scss';
import { firstLetterUp } from '../../../functions/firstLetterUp';
import classNames from 'classnames';

const SecondTitle = ({ children = '', parentClass }) => {
  return (
    <h2
      className={classNames({
        [scss.title]: true,
        [parentClass]: !!parentClass,
      })}
    >
      {children && firstLetterUp(children)}
    </h2>
  );
};
export default SecondTitle;
