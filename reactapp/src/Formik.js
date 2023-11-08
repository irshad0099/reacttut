import {formik,useFormik } from "formik";
import React from "react";

function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            UserName: "",
            password: "",
            city: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text" /></dd>
                    <dt>passwaord</dt>
                    <dd><input name="password" onChange={formik.handleChange} value={form.values.password} type="password" /></dd>
                    <dt>City</dt>
                    <dd><input name="City" onChange={formik.handleChange} value={form.values.city} type=" City" /></dd>

                    <dd>
                        <select onChange={formik.handleChange} value={formik.values.City} name="City">
                            <option>Delhi</option>
                            <option>Hyedrabad</option>
                        </select>
                    </dd>
                </dl>
                <button>Register</button>
            </form>

        </div>
    )
}

export default FormikDemo;