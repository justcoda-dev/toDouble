import scss from './text.module.scss';
import { firstLetterUp } from '../../../functions/firstLetterUp';
import classNames from 'classnames';


const Text = ({ children = '', parenClass, small }) => {

  return <p className={classNames({
    [scss.text]: true,
    [parenClass]: !!parenClass,
    [scss.small]: small,
  })}>{children && firstLetterUp(children)}</p>;
};
export default Text;
