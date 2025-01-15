import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address.";
        if (!formData.message) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    return (
        <main>
            <h1>Contact Us</h1>
            <form onSubmit={ handleSubmit }>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={ formData.name }
                        onChange={ handleChange }
                    />
                    { errors.name && <span style={ { color: "red" } }>{ errors.name }</span> }
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                    { errors.email && <span style={ { color: "red" } }>{ errors.email }</span> }
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={ formData.message }
                        onChange={ handleChange }
                    />
                    { errors.message && <span style={ { color: "red" } }>{ errors.message }</span> }
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </main>
    );
};

export default ContactUs;
