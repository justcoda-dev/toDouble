import scss from './examples.module.scss';
import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import ExampleCardList from '../ExampleCardList/ExampleCardList';
import Figure from '../Figure.jsx/Figure';

const ExamplesBlock = () => {
  return (
    <div className={scss.background}>
      <Figure src='images/wave-left-top.png' parentClass={scss.wave} />
      <Container parentClass={scss.container}>
        <SecondTitle parentClass={scss.title}>
          Примеры онлайн-магазинов
        </SecondTitle>
        <ExampleCardList />
      </Container>
      <Figure src='images/sphere.png' parentClass={scss.sphere} />
    </div>
  );
};
export default ExamplesBlock;
