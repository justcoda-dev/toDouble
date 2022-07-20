import scss from './formBlock.module.scss';
import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import Text from '../UI/Text/Text';
import ContactForm from '../ContactForm/ContactForm';
import { HOST } from '../../App';

const FormBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <div className={scss.phoneLeft}>
          <img
            className={scss.img}
            src={`${HOST}images/phone-left.png`}
            alt=""
          />
        </div>
        <SecondTitle parentClass={scss.title}>Обсудить проект</SecondTitle>
        <Text parenClass={scss.text}>
          Расскажите о своих бизнес-целях и мы поможем вам в их достижении
        </Text>
        <ContactForm />

        <div className={scss.phoneMobile}>
          <img
            className={scss.img}
            src={`${HOST}images/phone-form.png`}
            alt=""
          />
        </div>

        <div className={scss.phoneRight}>
          <img
            className={scss.img}
            src={`${HOST}images/phone-right.png`}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};
export default FormBlock;
