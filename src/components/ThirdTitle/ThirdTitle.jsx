import scss from './thirdTitle.module.scss';
import classNames from 'classnames';
import { firstLetterUp } from '../../functions/firstLetterUp';

const ThirdTitle = ({ children = '', parentClass }) => {
  return <h3 className={classNames({
    [scss.title]: true,
    [parentClass]: !!parentClass,
  })}>{children && firstLetterUp(children)}</h3>;
};
export default ThirdTitle;
