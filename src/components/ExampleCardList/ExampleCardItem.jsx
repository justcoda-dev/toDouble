import scss from './exampleCard.module.scss';
import ThirdTitle from '../ThirdTitle/ThirdTitle';
import Text from '../UI/Text/Text';
import { HOST } from '../../App';
import { useCallback, useState } from 'react';

const ExampleCardItem = ({ item }) => {
  const [hover, setHover] = useState(false);
  const hoverHandleOver = useCallback(() => setHover(true), [hover]);
  const hoverHandleLeave = useCallback(() => setHover(false), [hover]);
  return (
    <li
      onMouseLeave={hoverHandleLeave}
      onMouseOver={hoverHandleOver}
      className={scss.item}
    >
      {
        hover
          ? <div className={scss.textBlock}>
            <ThirdTitle parentClass={scss.title}>{item.title}</ThirdTitle>
            <Text parenClass={scss.text}>{item.text}</Text>
          </div>
          : <img className={scss.image} src={`${HOST}${item.image}`} alt='' />

      }
    </li>
  );
};
export default ExampleCardItem;