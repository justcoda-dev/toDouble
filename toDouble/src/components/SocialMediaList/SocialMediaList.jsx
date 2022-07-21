import { HOST } from '../../App';
import scss from './socialMediaList.module.scss';
import classnames from 'classnames';

const SocialMediaList = ({ parentClass }) => {
  const list = [
    { id: 1, image: 'images/social/instagram.svg', src: '' },
    { id: 2, image: 'images/social/facebook.svg', src: '' },
    { id: 3, image: 'images/social/telegram.svg', src: '' },
    { id: 4, image: 'images/social/viber.svg', src: '' },
    { id: 5, image: 'images/social/watsup.svg', src: '' },
  ];
  return (
    <ul
      className={classnames({
        [scss.list]: true,
        [parentClass]: !!parentClass,
      })}
    >
      {list.map((item) => (
        <li className={scss.item} key={item.id}>
          {
            <a className={scss.src} href={item.src}>
              <img alt='#' className={scss.image} src={`${HOST}${item.image}`} />
            </a>
          }
        </li>
      ))}
    </ul>
  );
};
export default SocialMediaList;
