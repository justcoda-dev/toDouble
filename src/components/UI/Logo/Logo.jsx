import scss from './logo.mudle.scss';
import { HOST } from '../../../App';

const src = 'images/logo.svg';
const Logo = () => {
  return (
    <div className={scss.logo}>
      <img src={`${HOST}${src}`} alt="" />
    </div>
  );
};
export default Logo;
