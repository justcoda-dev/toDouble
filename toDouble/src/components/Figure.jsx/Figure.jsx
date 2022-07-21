import { HOST } from '../../App';
import classnames from 'classnames';

const Figure = ({ parentClass, src }) => {
  return (
    <div className={classnames({
      [parentClass]: !!parentClass,
    })} style={{
      background: `url(${HOST}${src || ''})`,
      backgroundSize: 'contain',
      backgroundPosition:"center",
      backgroundRepeat: 'no-repeat',
    }} />
  );
};
export default Figure;