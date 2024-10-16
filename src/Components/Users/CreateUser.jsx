import { Formik } from "formik"
import * as Yup from 'yup'


const CreateUser = () => {

    const ValidationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Este campo es requerido')
            .email('Por favor, correo electrónico válido')
            .max(50, 'Este correo supera el límite de caracteres'),
        username: Yup.string()
            .required('Este campo es requerido')
            .min(5, 'El username debe tener mínimo 5 caracteres')
            .max(50, 'El username no debe ser mayor a 50 caracteres'),
        password: Yup.string()
            .required('Este campo es requerido')
            .min(5, 'La contraseña debe tener mínimo 5 caracteres')
            .max(50, 'La contraseña no debe ser mayor a 50 caracteres')


    })

    const RegisterUser = (values) =>{
        console.log("valores form", values)
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', username: '' }}
            validationSchema={ValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="username"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button onClick={() => RegisterUser(values)} type="button" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default CreateUser