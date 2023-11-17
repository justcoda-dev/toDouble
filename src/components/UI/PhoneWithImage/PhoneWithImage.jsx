import scss from './phoneWithimage.module.scss';
import { HOST } from '../../../App';
import classnames from 'classnames';
import Text from '../Text/Text';

const PhoneWithImage = ({ item, parentClass }) => {
  return (
    <div
      className={classnames({
        [scss.item]: true,
        [parentClass]: !!parentClass,
      })}
    >
      <img className={scss.image} src={`${HOST}${item.image}`} alt='' />
      <Text>
        {item.name}: {item.phone}
      </Text>
    </div>
  );
};
export default PhoneWithImage;
