import "./Contact.css"

const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <h3 className="contact-detail">Phone: +6287770854943</h3>
            <h3 className="contact-detail">Email: rifqiakmalf@gmail.com</h3>
            <h2 className="social-media-title">My Social Media</h2>
            <div className="social-media-container">
                <a href="https://www.instagram.com/rfqakmal_/" target="_blank"><img src="/instagram.png" alt="Instagram" className="social-media" /></a>
                <a href="https://www.linkedin.com/in/rifqi-akmal-fauzi/" target="_blank"><img src="/linkedin.png" alt="LinkedIn" className="social-media" /></a>
                <a href="https://github.com/rifqi198" target="_blank"><img src="/github.png" alt="Github" className="social-media" /></a>
            </div>
        </div>
    )   
}

export default Contact