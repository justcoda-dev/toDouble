import scss from './cartBlock.module.scss';
import Container from '../Container/Container';
import FirstTitle from '../UI/FirstTitle/FirstTitle';
import Text from '../UI/Text/Text';
import Button from '../UI/Button/Button';
import Figure from '../Figure.jsx/Figure';

const CartBlock = () => {
  return (
    <div
      className={scss.background}
    >
      <Container parentClass={scss.container}>
        <Figure src='images/sphere.png' parentClass={scss.sphere} />
        <Figure src='images/cart-block/wave.png' parentClass={scss.wave} />
        <div className={scss.inner}>
          <FirstTitle>Разработка интернет-магазина с нуля за неделю</FirstTitle>
          <Text small>
            Дизайн интернет магазина, элементов микро UX, корзин, личного
            кабинета - от фирменного стиля до пользовательского интерфейса в
            сжатые сроки с командой Virtual Designers
          </Text>
          <Button parentClass={scss.button}>Заказать</Button>
        </div>
        <Figure src='images/cart-block/cart.png' parentClass={scss.cart} />
      </Container>
      <Figure src='images/cart-block-circle.png' parentClass={scss.circle} />
    </div>
  );
};
export default CartBlock;
