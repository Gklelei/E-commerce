import './CSS/LoginSignup.css'
const LoginSignup = () => {
    return (
        <div className="LoginSignup">
            <div className="LoginSignup-container">
                <h1>SIGN UP</h1>
                <div className="LoginSignup-fileds">
                    <input type="text" placeholder='Enter Your Name ' />
                    <input type="email" placeholder='Enter Your Email Addres ' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="LoginSignup-login">Already have an account? <span>Login here</span></p>
                <div className="LoginSignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continiueng i agree to use the terms of use and policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup