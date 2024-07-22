import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        userType: "", 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const register = () => {
        const { name, email, password, userType } = user;
        if (true) {
            axios
                .post("http://localhost:9002/register", user)
                .then((res) => {
                    console.log(res);
                    alert(res.data.message);
                    history.push("/login");
                })
                .catch((error) => {
                    alert("Error registering user");
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Your Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Your Email"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Your Password"
                onChange={handleChange}
            />
            <select
                name="userType"
                value={user.userType}
                onChange={handleChange}
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <div className="button" onClick={register}>
                Register
            </div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>
                Login
            </div>
        </div>
    );
};

export default Register;
