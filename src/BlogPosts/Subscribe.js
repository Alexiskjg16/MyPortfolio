import React, { Component } from "react";

class SubscribeButton extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    name: "",
                    email: ""
                }
            }
            handleChange = (e) => {
                this.setState({
                    [e.target.name]: e.target.value
                })
            }
        
            handleSubmit = (e) => {
                e.preventDefault()
                let subscribeData = {
                    "Name": this.state.name,
                    "Email": this.state.email,
                   
                }
            
            fetch(`http://localhost:5000"/RSS/content/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(subscribeData)
            })
                .then(resp => resp.json())
                .then(subscribeData => {
                    console.log(subscribeData)
                    this.props.fetchQuestions()
                    this.setState({
                        name: "",
                        email: ""
                    })
                })
            }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="Subscribe">
                <p>I post about once a month - want to be notified?</p>
                    <input placeholder="Name" name="Name" value={this.state.name} onChange={this.handleChange}></input>
                    <input placeholder="Email" name="Email" value={this.state.email} onChange={this.handleChange}></input>
                  <button>Subscribe!</button>
                </form>
            </div>
        );
    }
}

export default SubscribeButton;