import scss from './carouselBlock.module.scss';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import Container from '../Container/Container';
import Carousel from '../Carousel/Carousel';

const CarouselBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <SecondTitle parentClass={scss.title}>
          Этапы разработки интернет-магазина
        </SecondTitle>
        <Carousel />
      </Container>
    </div>
  );
};
export default CarouselBlock;
