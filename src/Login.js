import React, { Component} from 'react';
import './Login.css';

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export class Login extends Component {    

    constructor(props) {
      super(props);
      this.state = {firstname: '', lastname: '', email: '', password: '', submitted: false, errmsg: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.keyCheck = this.keyCheck.bind(this);
      this.passwordCheck = this.passwordCheck.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    keyCheck(e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {    
            e.preventDefault();            
        } 
        else {          
            var key = e.keyCode;            
            if (!((key === 8) || (key === 32) || (key === 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {            
                e.preventDefault();              
            }
        }
    }

    passwordCheck(e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {    
            e.preventDefault();            
        } 
    }
    
    handleSubmit(event) {      
        
      event.preventDefault();
      this.setState({ submitted: true });
      const { firstname, lastname, email, password } = this.state;
      
      console.log('First Name: ' + firstname + "Last Name: " + lastname +  " " + email + " " + password);
      
    }
  
    render() {
        const { firstname, lastname, email, password, submitted } = this.state;
      
      return (
        
        <Container className="login-container">
            <Row>
                <Col sm={12} md={12}>
                    <div className="login-title">Get started today!</div>
                </Col>
            </Row>
            <form onSubmit={this.handleSubmit} >            
            <Row>
                <Col sm={12} md={6}>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" name="firstname" value={firstname} onChange={this.handleChange} onKeyDown={this.keyCheck} />    
                        {submitted && !firstname &&
                            <div className="error-block">Firstname is required</div>
                        }      
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" name="lastname" value={lastname} onChange={this.handleChange} onKeyDown={this.keyCheck}/>
                        {submitted && !lastname &&
                            <div className="error-block">Lastname is required</div>
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="error-block">Email is required</div>
                        }
                        {submitted && email && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
                            <div className="error-block">Email is not valid</div>
                        }
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} onKeyDown={this.passwordCheck}/>
                        {submitted && !password &&
                            <div className="error-block">Password is required </div>
                        }
                        { submitted && password && password.length <= 8 &&
                            <div className="error-block">Password must contain 8 characters</div>
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="form-group button-section">
                    <button className="btn btn-primary">Claim Your Free Trial  <FontAwesomeIcon icon={faCaretRight} /> </button> 
                </div>
                <div className="terms-text">You are agreeing to our <span><a href="#">Terms and Services</a></span></div>
                </Col>
            </Row>
            </form>
        </Container>
        
      );
    }
  }