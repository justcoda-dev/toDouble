import scss from './exampleCard.module.scss';
import ExampleCardItem from './ExampleCardItem';
import { HOST } from '../../App';

const list = [
  { id: 1, image: 'images/example/1.png', title: 'Онлайн-магазин', text: 'для оптовых покупок' },
  { id: 2, image: 'images/example/2.png', title: 'Онлайн-магазин', text: 'для флористов' },
  { id: 3, image: 'images/example/3.png', title: 'Онлайн-магазин', text: 'для парикмахеров' },
  { id: 4, image: 'images/example/4.png', title: 'Онлайн-магазин', text: 'для визажистов' },
  { id: 5, image: 'images/example/5.png', title: 'Онлайн-магазин', text: 'для кондитеров' },
  { id: 6, image: 'images/example/6.png', title: 'Онлайн-магазин', text: 'для художников' },
];
const ExampleCardList = () => {
    return (
      <ul className={scss.list}>
        {list.map(item =>
          <ExampleCardItem key={item.id} item={item} />)}
        <div className={scss.buttons}>
          <button
            // onClick={previousImageHandle}
            style={{
              background: `url(${HOST}images/arrow-left.svg)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }} className={scss.button} />
          <button
            // onClick={nextImageHandle}
            style={{
              background: `url(${HOST}images/arrow-right.svg)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }} className={scss.button} />
        </div>
      </ul>
    );
  }
;
export default ExampleCardList;