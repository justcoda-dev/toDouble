import scss from './accordion.module.scss';
import Text from '../Text/Text';
import { useCallback, useState } from 'react';
import classNames from 'classnames';

const AccordionItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const itemToggleHandle = useCallback(() => setShow(!show), [show]);
  return (
    <li className={scss.item} onClick={itemToggleHandle}>
      <Text
        parenClass={classNames({
          [scss.title]: true,
          [scss.open]: show,
        })}
      >
        {item.title}
      </Text>
      <div
        className={classNames({
          [scss.collapse]: true,
          [scss.show]: show,
        })}
      >
        <Text parenClass={scss.text}>{item.text}</Text>
      </div>
    </li>
  );
};
export default AccordionItem;
