import scss from './exampleCard.module.scss';
import ExampleCardItem from './ExampleCardItem';
import { HOST } from '../../App';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from '../../functions/debounce';
import { arrayToArrays } from '../../functions/ArrayToArrays';

const list = [
  {
    id: 1,
    image: 'images/example/1.png',
    title: 'Онлайн-магазин',
    text: 'для оптовых покупок',
  },
  {
    id: 2,
    image: 'images/example/2.png',
    title: 'Онлайн-магазин',
    text: 'для флористов',
  },
  {
    id: 3,
    image: 'images/example/3.png',
    title: 'Онлайн-магазин',
    text: 'для парикмахеров',
  },
  {
    id: 4,
    image: 'images/example/4.png',
    title: 'Онлайн-магазин',
    text: 'для визажистов',
  },
  {
    id: 5,
    image: 'images/example/5.png',
    title: 'Онлайн-магазин',
    text: 'для кондитеров',
  },
  {
    id: 6,
    image: 'images/example/6.png',
    title: 'Онлайн-магазин',
    text: 'для художников',
  },
];


const ExampleCardList = () => {
  const [mobile, setMobile] = useState(false);

  const arrayToPages = useMemo(() => {
    return arrayToArrays(list, 3);
  }, [list]);

  const itemsNumber = useMemo(() => arrayToPages.length, [arrayToPages]);

  const [showItem, setShowItem] = useState(1);
  const page = useMemo(() => arrayToPages[showItem - 1], [showItem, arrayToPages, mobile]);

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


  const resizeCb = debounce(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, 200);

  useEffect(() => {
    console.log(page);
    if (window.innerWidth <= 1000) {
      setMobile(true);
    }
    window.addEventListener('resize', resizeCb);
  }, []);

  return (
    <ul className={scss.list}>
      {
        mobile
          ? page.map((item) => (
            <ExampleCardItem key={item.id} item={item} />
          ))
          : list.map((item) => (
            <ExampleCardItem key={item.id} item={item} />
          ))
      }
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
    </ul>
  );
};
export default ExampleCardList;
