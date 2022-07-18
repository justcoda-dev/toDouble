import scss from './cartBlock.module.scss';
import Container from '../Container/Container';
import FirstTitle from '../UI/FirstTitle/FirstTitle';
import { HOST } from '../../App';
import Text from '../UI/Text/Text';
import Button from '../UI/Button/Button';

const src = 'images/banner_1.jpg';
const CartBlock = () => {
  return (
    <div
      className={scss.cartBlock}
      style={{
        background: `url(${HOST}${src})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container parentClass={scss.container}>
        <div className={scss.inner}>
          <FirstTitle>Разработка интернет-магазина с нуля за неделю</FirstTitle>
          <Text small>
            Дизайн интернет магазина, элементов микро UX, корзин, личного
            кабинета - от фирменного стиля до пользовательского интерфейса в
            сжатые сроки с командой Virtual Designers
          </Text>
          <Button>Заказать</Button>
        </div>
      </Container>
    </div>
  );
};
export default CartBlock;
