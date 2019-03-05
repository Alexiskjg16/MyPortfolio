import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";



class HomePage extends Component {
   constructor(props) {
   super(props);
   this.state = {
       visit: 0
   }}
   
   SayHello = (event) => {
       this.setState({
     visit:this.state.visit + 1})
    
 

}

    render() {
        return (
            <div>
                <section>
                    <header className="MyName"> Alexis K. Grisham </header>
                    <h1 className="MyTitle"> Full-Stack Developer, boyMom, Paralian. </h1>
                </section>
                <section className="HomeNav">
                <Link to={"/AboutMe"} className="Leftside"> About Me </Link>
                <Link to={"/BlogPosts"} className="Rightside"> Blog Articles </Link>
                <Link to={"/CodingExamples"} className="LeftsideTwo"> Codes </Link>
                <Link to={"/ContactMe"} className="RightsideTwo"> Contact Me </Link>
                <Link to={"/Resume"} className="LeftsideThree"> Resume </Link>
                </section>
                {/* <section className="numberz">
                    <button onClick={this.SayHello}> Say Hi ++</button>
                    <span>{this.state.visit}</span>
                </section> */}
                <section className="ContactMe">
                <section className="DirectLinks">
                    <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                    </section>
                    <section className="DirectLinks">
                    <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </section>
                    <section className="DirectLinks">
                    <a href="https://www.instagram.com/alexiskjg16/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </section>
                    </section>
                    <section>
                    <h6 className="copyright">Made with love, REACT && C# -2018-</h6>
                    </section>
            </div>

        )
    }
}
export default HomePage;