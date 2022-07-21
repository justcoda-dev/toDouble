import scss from './firstTitle.module.scss';
import { firstLetterUp } from '../../../functions/firstLetterUp';

const FirstTitle = ({ children = '' }) => {
  return <h1 className={scss.title}>{children && firstLetterUp(children)}</h1>;
};
export default FirstTitle;
