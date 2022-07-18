import scss from './infoBlock.module.scss';
import Container from '../Container/Container';
import SecondTitle from '../UI/SecondTitle/SecondTitle';
import Text from '../UI/Text/Text';
import Button from '../UI/Button/Button';
import { HOST } from '../../App';

const InfoBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <div className={scss.textBlock}>
          <SecondTitle parentClass={scss.title}>
            Необходимо больше информации?
          </SecondTitle>
          <Text parenClass={scss.text}>Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной
            коммерции и вам нужен
            уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и
            короткий
            период времени, он поможет визуализировать ваш веб проект.</Text>
          <Button>Оставить заявку</Button>
        </div>
        <div className={scss.imageBlock}>
          <img className={scss.image} src={`${HOST}images/info-bg.png`} alt='' />
        </div>
      </Container>
    </div>
  );
};
export default InfoBlock;