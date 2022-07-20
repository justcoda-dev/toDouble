import scss from './cartBlock.module.scss';
import Container from '../Container/Container';
import FirstTitle from '../UI/FirstTitle/FirstTitle';
import { HOST } from '../../App';
import Text from '../UI/Text/Text';
import Button from '../UI/Button/Button';

const CartBlock = () => {
  return (
    <div
      className={scss.background}
      // style={{
      //   background: `url(${HOST}${src})`,
      //   backgroundSize: '100%',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <Container parentClass={scss.container}>
        <div className={scss.inner}>
          <FirstTitle>Разработка интернет-магазина с нуля за неделю</FirstTitle>
          <Text small>
            Дизайн интернет магазина, элементов микро UX, корзин, личного
            кабинета - от фирменного стиля до пользовательского интерфейса в
            сжатые сроки с командой Virtual Designers
          </Text>
          <Button parentClass={scss.button}>Заказать</Button>
        </div>
        <div
          className={scss.cart}
          style={{
            background: `url(${HOST}images/cart-block/cart.png)`,
            backgroundSize: '100%',

            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Container>
    </div>
  );
};
export default CartBlock;
