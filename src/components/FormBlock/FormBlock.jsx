import scss from './formBlock.module.scss';
import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import Text from '../UI/Text/Text';
import ContactForm from '../ContactForm/ContactForm';
import Figure from '../Figure.jsx/Figure';

const FormBlock = () => {
  return (
    <div className={scss.background}>

      <Figure src='images/phone-left.png' parentClass={scss.phoneLeft} />
      <Container parentClass={scss.container}>

        <SecondTitle parentClass={scss.title}>Обсудить проект</SecondTitle>
        <Text parenClass={scss.text}>
          Расскажите о своих бизнес-целях и мы поможем вам в их достижении
        </Text>
        <ContactForm />
        <Figure src='images/phone-form.png' parentClass={scss.phoneMobile} />
      </Container>
      <Figure src='images/phone-right.png' parentClass={scss.phoneRight} />
    </div>
  );
};
export default FormBlock;
