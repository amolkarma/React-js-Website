import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    return (
        <section class="signup-form">
            <div className="container contact-us">
                <div className="row digital-service">
                    <div className="col-lg-12 col-12">
                        <h1 className="">Contact <span>Us</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="text-center pb-5 digital-service">
                            {submitted && <p style={{ color: "green" }}>Form submitted successfully ✅</p>}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="custom-label">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="custom-label">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="custom-label">Message:</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message"
                                    />
                                    {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="text-center pb-5 digital-service">
                            <div className="">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.650408337104!2d73.90830007393632!3d18.544693568439417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11054295937%3A0x3c1c54e68816c5e4!2sVidushi%20Infotech%20SSP%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1755513579967!5m2!1sen!2sin"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
