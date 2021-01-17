import style from './Preloader.module.css';
import preloader from '../../../assets/img/circles.svg';

const Preloader = () => {
  return (
    <div className={style.preloaderBlock}>
      <img className={style.preloader} src={preloader} alt='load' fill='#000' />
    </div>
  );
};

export default Preloader;
