import scss from './examples.module.scss';
import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import ExampleCardList from '../ExampleCardList/ExampleCardList';

const ExamplesBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <SecondTitle parentClass={scss.title}>Примеры онлайн-магазинов</SecondTitle>
        <ExampleCardList />
      </Container>
    </div>
  );
};
export default ExamplesBlock;