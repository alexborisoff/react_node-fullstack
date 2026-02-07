import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const AddShoes = () => {
    const initialValues = {
        photo: '',
        type: '',
        title: '',
        price: '',
    };

    const validatationSchema = Yup.object().shape({
        photo: Yup.string().required('The value must be a link'),
        type: Yup.string().required(),
        title: Yup.string().required(),
        price: Yup.string()
            .min(3)
            .max(6)
            .required('minimum 3 symbols'),
    });

    const onSubmit = (data) => {
        axios
            .post('http://localhost:3001/shoes', data)
            .then((response) => {
                console.log('It Worked', response);
            });
    };

    return (
        <div className="add_shoes_page">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validatationSchema}
            >
                <Form className="add_form ">
                    <div className="add_form_left_decor"></div>
                    <div className="add_form_right_decor"></div>
                    <div className="add_form_circle"></div>
                    <div className="add_form_inner">
                        <h3>Adding shoe</h3>
                        <label>link on photo</label>
                        <ErrorMessage name="photo" component="span" />
                        <Field
                            id=""
                            name="photo"
                            placeholder="photo"
                        />
                        <label>type</label>
                        <ErrorMessage name="type" component="span" />
                        <Field
                            id=""
                            name="type"
                            placeholder="ex. Nike Air Force 07"
                        />
                        <label>title</label>
                        <ErrorMessage name="title" component="span" />
                        <Field
                            id=""
                            name="title"
                            placeholder="ex. Men's Running Shoes "
                        />
                        <label>price</label>
                        <ErrorMessage name="price" component="span" />
                        <Field
                            id=""
                            name="price"
                            placeholder="200$"
                        />

                        <button type="submit">add</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
