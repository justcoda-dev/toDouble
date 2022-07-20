import scss from './accordion.module.scss';
import AccordionItem from './AccordionItem';
import { useMemo } from 'react';

const list = [
  {
    id: 1,
    title: 'Дизайн портала',
    text: 'Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.',
  },
  {
    id: 2,

    title: 'Дизайн адаптивной мобильной версии',
    text:
      'Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия позволяет совершать заказ/покупку  с минимумом действий.' +
      'При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. \n',
  },
  {
    id: 3,
    title: 'Дизайн десктопной версии',
    text: 'Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.',
  },
  {
    id: 4,
    title: 'Пользовательский интерфейс',
    text: 'Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя.',
  },
  {
    id: 5,
    title: 'Микро UX',
    text: 'Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. ',
  },
];

const AccordionList = () => {
  const listIsCome = useMemo(() => !!list.length, [list]);
  return (
    <ul className={scss.list}>
      {listIsCome
        ? list.map((item) => <AccordionItem key={item.id} item={item} />)
        : 'Loading...'}
    </ul>
  );
};
export default AccordionList;
