import scss from './arrowButton.module.scss';
import classnames from 'classnames';

const ArrowButton = ({ onClick, left }) => {
  return (
    <div onClick={onClick} className={classnames({
      [scss.arrow]: true,
      [scss.left]: left,
    })}>
      <div className={scss.arrowTop} />
      <div className={scss.arrowBottom} />
    </div>
  );
};
export default ArrowButton;