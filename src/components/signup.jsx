import axios from "axios";
import "../styles/signup.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    let [name, setName] = useState("")
    let [mobile, setMobile] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [conformPassword, setconformPassword] = useState("")


    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let data = {name,mobile,email,password,conformPassword}
        if (name && mobile && email && (password === conformPassword)) {
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        } else {
            alert("invalid credentials")
        }
    }

    return ( 
        <div className="mainn">
            <div className="signUp">
                <h1>REGISTER</h1>
                <div className="signUp_form">
                    <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter your name" name="name"/>
                    </div>
                    <div className="mobile_mobile">

                        <input type="tel" className="form-control"  value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter your mobile number" name="mobile" />
                    </div>
                    <div className="email">

                        <input type="email" className="form-control"   value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" name="email" />
                    </div>
                    <div className="password">

                        <input type="password"  className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" name="password" />
                    </div>
                    <div className="conformPassword">

                        <input type="password" className="form-control"  value={conformPassword} onChange={(e) => setconformPassword(e.target.value)} placeholder="Re-enter your password" name='password' />
                    </div>
                    <div className="sign_button">
                        <button className="btn btn-success">Register</button>
                    </div>
                    <div className="login_button">
                        <p>Already a user ?</p>
                        <Link to="/" className="btn btn-outline-success"> Login</Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;