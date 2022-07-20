import scss from './carouselBlock.module.scss';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import Container from '../Container/Container';
import Carousel from '../Carousel/Carousel';
import Figure from '../Figure.jsx/Figure';

const CarouselBlock = () => {
  return (
    <div className={scss.background}>
      <Figure src='images/sphere.png' parentClass={scss.sphere} />
      <Container parentClass={scss.container}>
        <SecondTitle parentClass={scss.title}>
          Этапы разработки интернет-магазина
        </SecondTitle>
        <Carousel />
      </Container>
      <Figure src='images/wave.png' parentClass={scss.wave} />
    </div>
  );
};
export default CarouselBlock;
