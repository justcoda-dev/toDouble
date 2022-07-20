import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import scss from './serviceTypesBlock.module.scss';
import AccordionList from '../UI/AccordionList/AccordionList';
import Figure from '../Figure.jsx/Figure';

const ServiceTypesBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <SecondTitle parentClass={scss.title}>
          Что входит в услугу по созданию дизайна интернет-магазина?
        </SecondTitle>
        <AccordionList />
      </Container>
      <Figure src='images/bag.png' parentClass={scss.figure} />
    </div>
  );
};
export default ServiceTypesBlock;
