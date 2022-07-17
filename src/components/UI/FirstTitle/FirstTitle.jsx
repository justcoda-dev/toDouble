import scss from './firstTitle.module.scss';

const FirstTitle = ({ children }) => {
  return <h1 className={scss.title}>{children}</h1>;
};
export default FirstTitle;
