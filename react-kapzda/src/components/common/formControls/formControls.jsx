import style from './formControls.module.css';

export const FormControl = ({ input, meta, ...props }) => {
   // console.log(props)
   const hasError = meta.error && meta.touched 
   return (
      <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
         <div>
            {props.children}
         </div>
         <div>
            <span>{ hasError ? meta.error : '' }</span>
         </div>
      </div>
   )
}

export const Textarea = (props) => {
   const { input, meta, ...restProps } = props;
   return (
      <FormControl {...props} >
         <textarea {...input} {...restProps} />
      </FormControl>
   );
}

export const Input = (props) => {
   const { input, meta, ...restProps } = props;
   return (
      <FormControl {...props}>
         <input {...input} {...restProps} />
      </FormControl>
   )
}

// export const Textarea = ({input, meta, ...props}) => {
//    // console.log(meta.error)
//    const hasError = meta.error && meta.touched
//    return (
//       <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
//          <div>
//             <textarea {...input} {...props} />
//          </div>
//          <div>
//             <span>{hasError ? meta.error : ''}</span>
//          </div>
//       </div>
//    );
// }

// export const Input = ({ input, meta, ...props }) => {

//    const hasError = meta.error && meta.touched 
//    return (
//       <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
//          <div>
//             <input {...input} {...props} />
//          </div>
//          <div>
//             <span>{ hasError ? meta.error : '' }</span>
//          </div>
//       </div>
//    )
// }


