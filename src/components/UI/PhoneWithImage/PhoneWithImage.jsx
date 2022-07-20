import scss from './phoneWithimage.module.scss';
import { HOST } from '../../../App';
import classnames from 'classnames';

const PhoneWithImage = ({ item, parentClass }) => {
  return (
    <div
      className={classnames({
        [scss.item]: true,
        [parentClass]: !!parentClass,
      })}
    >
      <img className={scss.image} src={`${HOST}${item.image}`} alt="" />
      <span className={scss.name}>
        {item.name}: {item.phone}
      </span>
    </div>
  );
};
export default PhoneWithImage;
