import scss from './footerBlock.module.scss';
import Text from '../UI/Text/Text';
import Logo from '../UI/Logo/Logo';
import Container from '../Container/Container';
import SocialMediaList from '../SocialMediaList/SocialMediaList';
import PhoneWithImage from '../UI/PhoneWithImage/PhoneWithImage';

const phoneList = [
  {
    id: 1,
    name: 'Валерия',
    phone: '+380505859409',
    image: 'images/social/viber.svg',
  },
  {
    id: 2,
    name: 'Анна',
    phone: '+380505859409',
    image: 'images/social/viber.svg',
  },
  {
    id: 3,
    name: 'Валерия',
    phone: '+380505859409',
    image: 'images/social/viber.svg',
  },
];

const FooterBlock = () => {
  return (
    <div className={scss.background}>
      <Container parentClass={scss.container}>
        <div className={scss.contacts}>
          <Logo parentClass={scss.logo} />
          <div className={scss.phones}>
            {phoneList.map((item) => (
              <PhoneWithImage
                parentClass={scss.phoneItem}
                item={item}
                key={item.id}
              />
            ))}
          </div>
          <SocialMediaList parentClass={scss.social} />

          <div className={scss.website}>hr@dv-s.com</div>
        </div>
      </Container>
      <Text parenClass={scss.developer}>
        Developers 2018-2022 © All rights reserved
      </Text>
    </div>
  );
};
export default FooterBlock;
