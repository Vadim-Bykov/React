import { Field } from 'redux-form';
import style from './formControls.module.css';

export const FormControl = ({ meta: { error, touched }, children }) => {
   // console.log(props)
   const hasError = error && touched
   return (
      <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
         <div>
            {children}
         </div>
         <div>
            <span>{hasError ? error : ''}</span>
         </div>
      </div>
   );
};

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

export const createField = (validators, name, component, placeholder, props={}, text='') => {
   return (
      <div>
         <Field
            validate={validators}
            name={name}
            component={component}
            placeholder={placeholder}
            {...props} /> {text}
      </div>
   );
};

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


