import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe To our Newsletter And stay Updated</p>
            <div>
                <input type="email" placeholder='Your Email ID' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter