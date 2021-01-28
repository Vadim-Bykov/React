import style from './formsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
   // console.log(meta)
   const hasError = meta.error && meta.touched
   return (
      <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
         <textarea {...input} {...props} />
         <div>
            <span>{hasError ? meta.error : ''}</span>
         </div>
      </div>
   );
}

const Input = ({input, meta, ...props}) => {
   const hasError = meta.error && meta.touched 
   return (
      <div className={`${style.formControl}`}>
         <input />
      </div>
   )
}
