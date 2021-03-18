import React from 'react'
import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../redux/users-reducer';

const usersSearchFormValidate = (values: FilterType) => {
  const errors = {};
  return errors;
};

type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};

export const UserSearchForm: React.FC<PropsType> = React.memo(
  ({ onFilterChanged }) => {
    const submit = (
      values: FilterType,
      { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
      onFilterChanged(values);
      setSubmitting(false);
    };

    return (
      <div>
        <Formik
          initialValues={{ term: '' }}
          validate={usersSearchFormValidate}
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type='text' name='term' />
              <button type='submit' disabled={isSubmitting}>
                Find
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
);
