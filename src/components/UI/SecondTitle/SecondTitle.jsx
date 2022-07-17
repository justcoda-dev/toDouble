import scss from './secondTitle.module.scss';

const SecondTitle = ({ children }) => {
  return <h1 className={scss.title}>{children}</h1>;
};
export default SecondTitle;
