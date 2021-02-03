import React from 'react'
import style from './Paginator.module.css'

const Paginator = ({totalUsersCount,pageSize,changePage,currentPage}) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);
      let pages = [];

   for (let i = 1; i <= pagesCount; i++){
      pages.push(i);
   };
   return (
      <div>
         <div className={style.pagesBlock}>
            {
               pages.map((pageNumber, i) => <span
                  onClick={() => changePage(pageNumber)}
                  className={currentPage === pageNumber ? style.selected : ('', style.span)}
                  key={i}>{pageNumber}
               </span>)
            }
         </div>
      </div>
   );
};

export default Paginator;