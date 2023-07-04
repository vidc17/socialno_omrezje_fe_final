import './Register.css';
import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Login = () => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const [redirect, setRedirect] = useState(false);

    const [errorText, setErrorText] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            "email": email,
            "password": pass
        };
        //console.log(data);
        const res = await axios.post('http://localhost:3000/auth/login', data, {withCredentials: true});
        //console.log(res);

        if (res.status == 201) {
            setRedirect(true);
        }
        if (res.status != 201) {
            setErrorText("Napaka v podatkih");
        }

    }

    if (redirect) {
        return <Navigate to='/' />;
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <h2 className="error">{errorText}</h2>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please login</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setPass(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </main>
        </>
    )
}

export default Login;