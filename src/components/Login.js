import React from "react";
import { useState } from "react";
import '../css/style.css';
import '../fonts/material-icon/css/material-design-iconic-font.min.css';
import { userLogin } from "../api/users";

export default function Login() {

    const [formData, setFormData] = useState({
        username: 'slindemann0',
        password: 'nF8$h\\sw',
        email: 'ahamshar0@seattletimes.com'
    });

    const handleChange = (e) => {
        console.log("Handlechange");
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.removeItem("token")
        localStorage.setItem("token" , userLogin(formData));

        setFormData({
            username: 'slindemann0',
            password: 'nF8$h\\sw',
            email: 'ahamshar0@seattletimes.com'
        });
    }

return (
    <div className="main">
        {/* Sign up form */}
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Log In</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="name" placeholder="Your Name" value={formData.username} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="pass" placeholder="Password" value={formData.password} onChange={handleChange}/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        {/* <figure><img src="images/signup-image.jpg" alt="sing up image"></figure> */}
                        <a href="/sign-up" className="signup-image-link">Create account</a>
                    </div>
                </div>
            </div>
        </section>

        {/* JS */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="js/main.js"></script>
    </div>
);
}
