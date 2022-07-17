import scss from './text.module.scss';

const Text = ({ children }) => {
  return <p className={scss.text}>{children}</p>;
};
export default Text;
