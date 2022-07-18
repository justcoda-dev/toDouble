import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import scss from './serviceTypesBlock.module.scss';
import AccordionList from '../UI/AccordionList/AccordionList';

const ServiceTypesBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <SecondTitle parentClass={scss.title}>
          Что входит в услугу по созданию дизайна интернет-магазина?
        </SecondTitle>
        <AccordionList />
      </Container>
    </div>
  );
};
export default ServiceTypesBlock;