import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate form
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Data Submitted:", formData);
            alert("Sign Up Successful!");
            setFormData({ name: "", email: "", password: "" });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section className="signup-form">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                    </div>
                    <div className="col-12 col-lg-6 digital-service">
                        <h1 className="signup-label">Sign Up</h1>
                        <div>
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div>
                                    <label className="custom-label">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="custom-label">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="custom-label">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                                </div>
                                <div className="">
                                <button className="btn btn-primary mb-5" type="submit">
                                    Sign Up
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                    </div>
                </div>
            </div>
        </section>

    );
}

export default SignUp;

