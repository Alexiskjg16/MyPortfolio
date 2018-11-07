import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./FooterContact";

class ContactMe extends Component {
    render () {
        return (
            <div>
                <section>
                 <NavBar />
                </section>
                <section className="ContactPage">
                <h1 className="contactTitles">Email: <a href="mailto:alexiskjg16@gmail.com" className="contactLinks">alexiskjg16@gmail.com</a></h1>
                <h1 className="contactTitles">Phone: <a href="tel:9413047266" className="contactLinks">941.304.7266</a></h1>
                <h1 className="contactTitles">LinkedIn: <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer" className="contactLinks">AlexisGrisham</a></h1>
                <h1 className="contactTitles">Twitter: <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer" className="contactLinks">@AlexisKJG16</a></h1>
                </section>
                <section>
                 <Footer />
                </section>
            </div>
        )
    }
}

export default ContactMe;