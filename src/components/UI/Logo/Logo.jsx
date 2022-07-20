import scss from './logo.module.scss';
import { HOST } from '../../../App';
import classnames from 'classnames';

const src = 'images/logo.svg';
const Logo = ({ parentClass }) => {
  return (
    <div
      className={classnames({
        [scss.logo]: true,
        [parentClass]: !!parentClass,
      })}
    >
      <img src={`${HOST}${src}`} alt="" />
    </div>
  );
};
export default Logo;
