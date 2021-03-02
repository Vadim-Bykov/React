import React, { useState } from 'react'
import style from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
   totalUsersCount: number
   pageSize: number
   changePage: (pageNumber: number) => void
   currentPage: number
   trackSize?: number
}

const Paginator: React.FC<PropsType> = ({totalUsersCount,pageSize,changePage,currentPage, trackSize = 10}) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);

   let pages: Array<number> = [];
   
   const tracksCount = Math.ceil(pagesCount / trackSize);
   const [trackNumber, setTrackNumber] = useState(1);

   const leftNumberInTrack = (trackNumber - 1) * trackSize + 1;
   const RightNumberInTrack = trackNumber * trackSize;

   for (let i = 1; i <= pagesCount; i++){
      pages.push(i);
   };

   return (
      <div>
         <div className={cn(style.pagesBlock, style.pagesBG)}>
            <button onClick={() => setTrackNumber(trackNumber - 1)} disabled={trackNumber <= 1}>prev</button>
            {
               pages.filter((number) => {
                  return number >= leftNumberInTrack && number <= RightNumberInTrack;
               })
               .map((pageNumber: number) => <span
                  onClick={() => changePage(pageNumber)}
                  className={cn(style.span, {[style.selected]:currentPage === pageNumber})}
                  // className={currentPage === pageNumber ? style.selected : ('', style.span)}
                  key={pageNumber}>{pageNumber}
               </span>)
            }
            <button onClick={() => setTrackNumber(trackNumber + 1)} disabled={trackNumber >= tracksCount}>next</button>
         </div>
      </div>
   );
};

export default Paginator;