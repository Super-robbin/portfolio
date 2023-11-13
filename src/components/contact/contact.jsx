
const Contact = () => {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <input className="form-input" placeholder="Name" id="name" type="text"/>
                <input className="form-input" placeholder="Email" id="email" type="text"/>
                <input className="form-input" placeholder="Message" id="message" type="text"/>
            </form>
        </div>
    )
}

export default Contact;