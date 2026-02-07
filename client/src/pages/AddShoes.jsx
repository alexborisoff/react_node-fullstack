import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

export const AddShoes = () => {
    const initialValues = {
        photo: '',
        type: '',
        title: '',
        price: '',
        description: '',
        sizez: '',
        article: '',
    };

    const validatationSchema = Yup.object().shape({
        photo: Yup.string().required('the value must be a link'),
        type: Yup.string().required(),
        title: Yup.string().required(),
        price: Yup.string()
            .min(3)
            .max(6)
            .required('minimum 3 symbols'),
        description: Yup.string()
            .max(255)
            .required('so much text, please shortly'),
        sizes: Yup.string().required(),
        article: Yup.string()
            .uppercase()
            .required('use only capital letters'),
    });

    const handleFormSubmit = (data) => {
        axios
            .post('http://localhost:3001/shoes', data)
            .then((response) => {
                console.log('Data was added', response);
            });
    };

    return (
        <main className="add_shoes_page">
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
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
                            placeholder="https://webaddress.com/link_photo"
                            autocomplete="off"
                        />
                        <label>type</label>
                        <ErrorMessage name="type" component="span" />
                        <Field
                            id=""
                            name="type"
                            placeholder="ex. Nike Air Force 07"
                            autocomplete="off"
                        />
                        <label>title</label>
                        <ErrorMessage name="title" component="span" />
                        <Field
                            id=""
                            name="title"
                            placeholder="ex. Men's Running Shoes"
                            autocomplete="off"
                        />
                        <label>price</label>
                        <ErrorMessage name="price" component="span" />
                        <Field
                            id=""
                            name="price"
                            placeholder="200$"
                            autocomplete="off"
                        />
                        <label>description</label>
                        <ErrorMessage
                            name="description"
                            component="span"
                        />
                        <Field
                            id=""
                            as="textarea"
                            name="description"
                            placeholder="Once Upon A Time..."
                        />
                        <label>sizes</label>
                        <ErrorMessage
                            name="sizes"
                            component="span"
                        />
                        <Field
                            id=""
                            name="sizes"
                            placeholder="ex. 44.5, 40, 41"
                        />
                        <label>article</label>
                        <ErrorMessage
                            name="article"
                            component="span"
                        />
                        <Field
                            id=""
                            name="article"
                            placeholder="ex. IQ402-22"
                        />


                        <button type="submit">add</button>
                    </div>
                </Form>
            </Formik>
        </main>
    );
};
