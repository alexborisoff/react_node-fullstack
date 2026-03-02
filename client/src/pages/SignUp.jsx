import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const SignUp = () => {
    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(20).required(),
        password: Yup.string().min(4).max(16).required(),
    });

    const handleFormSubmit = (data) => {
        axios
            .post('http://localhost:3001/auth', data)
            .then(alert('User was created!'));
    };

    return (
        <main className="sign_up_page add_shoes_page">
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
            >
                <Form className="add_form ">
                    <div className="add_form_left_decor"></div>
                    <div className="add_form_right_decor"></div>
                    <div className="add_form_circle"></div>
                    <div className="add_form_inner">
                        <h3>Sign Up</h3>

                        <label>username</label>
                        <ErrorMessage
                            name="username"
                            component="span"
                        />
                        <Field
                            id=""
                            name="username"
                            placeholder="Nagibator2000"
                        />
                        <label>password</label>
                        <ErrorMessage
                            name="password"
                            component="span"
                        />
                        <Field
                            id=""
                            name="password"
                            type="password"
                            placeholder="*****"
                        />

                        <button type="submit">sign up</button>
                    </div>
                </Form>
            </Formik>
        </main>
    );
};
