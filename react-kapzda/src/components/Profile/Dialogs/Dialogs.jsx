import s from './Dialogs.module.css'
const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            <div className={s.itemName + ' ' + s.active}>Vadim</div>
            <div className={s.itemName}>Tanya</div>
            <div className={s.itemName}>Eva</div>
            <div className={s.itemName}>Slavik</div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hello</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Hi!</div>
         </div>
      </div>
   );
};

export default Dialogs;