import style from './Preloader.module.css';
import preloader from '../../../assets/img/circles.svg';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

// type ImgPropsType = {
//   fill: string;
// };

const Preloader: React.FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = () => {
  return (
    <div className={style.preloaderBlock}>
      <img className={style.preloader} src={preloader} alt='load'
      // @ts-ignore
        fill='#000' />
    </div>
  );
};

export default Preloader;
