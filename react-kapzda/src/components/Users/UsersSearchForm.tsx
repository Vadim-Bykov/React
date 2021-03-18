import { Field, Form, Formik } from 'formik';

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

type TUsersFormSearch = {
  term: string;
};

export const UserSearchForm: React.FC = () => {
  const submit = (
    values: TUsersFormSearch,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {};

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
};
