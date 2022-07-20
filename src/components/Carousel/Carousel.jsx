import scss from './carouse.module.scss';
import { HOST } from '../../App';
import ThirdTitle from '../ThirdTitle/ThirdTitle';
import Text from '../UI/Text/Text';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';

const list = [
  {
    id: 1,
    image: 'images/carousel/1.png',
    title: '1. Анализ',
    text: 'Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. ',
  },
  {
    id: 2,
    image: 'images/carousel/2.png',
    title: '2. Визуальное решение',
    text: 'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. ',
  },
  {
    id: 3,
    image: 'images/carousel/3.png',
    title: '3. Техническая реализация',
    text: 'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок. ',
  },
  {
    id: 4,
    image: 'images/carousel/4.png',
    title: '4. Наполнение контентом ',
    text: 'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. ',
  },
  {
    id: 5,
    image: 'images/carousel/5.png',
    title: '5. Тестирование',
    text: 'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.',
  },
];

const Carousel = () => {
  const [showItem, setShowItem] = useState(1);

  const itemsNumber = useMemo(() => list.length, [list]);

  const nextImageHandle = useCallback(() => {
    setShowItem((prevCount) =>
      itemsNumber - prevCount === 0 ? 1 : prevCount + 1,
    );
  }, [showItem]);

  const previousImageHandle = useCallback(() => {
    setShowItem((prevCount) =>
      itemsNumber - prevCount === itemsNumber - 1 ? itemsNumber : prevCount - 1,
    );
  }, [showItem]);

  return (
    <div className={scss.background}>
      <div className={scss.display}>
        {
          list.map((item) => (
            <div
              className={classNames({
                [scss.item]: true,
                [scss.show]: item.id === showItem,
              })}
              key={item.id}
            >
              <div className={scss.textBlock}>
                <ThirdTitle
                  parentClass={scss.title}>{item.title}
                </ThirdTitle>

                <Text parenClass={scss.text}>{item.text}</Text>
              </div>

              <div className={scss.imageBlock}>
                <img className={scss.image} src={`${HOST}${item.image}`} alt='' />
              </div>

            </div>
          ))
        }
      </div>

      <div className={scss.buttons}>
        <button
          onClick={previousImageHandle}
          style={{
            background: `url(${HOST}images/arrow-left.svg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className={scss.button}
        />

        <button
          onClick={nextImageHandle}
          style={{
            background: `url(${HOST}images/arrow-right.svg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className={scss.button}
        />
      </div>

    </div>
  );
};
export default Carousel;
