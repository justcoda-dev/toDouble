import scss from './thirdTitle.module.scss';

const ThirdTitle = ({children}) => {
  return <h1 className={scss.title}>{children}</h1>;
};
export default ThirdTitle;
