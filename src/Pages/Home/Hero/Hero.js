import React from "react";
import "./Hero.css";
import Header from "../../../Components/Header/Header";
import SideLink from "../../../Components/SideLinks/SideLinks";
import Button from "../../../Components/Button/Button";
import { Login, SignUp } from "../../../Components/Login-SignUp/Login-SignUp";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      signup: false,
    };
  };

  handleLogin = () => {
    this.setState({ login: true });
    this.setState({ signup: false });
  };
  close = () => {
    this.setState({ login: false });
    this.setState({ signup: false });
  };

  handleSignup = () => {
    this.setState({ signup: true });
  };

  render = () => {
    return (
      <div className="Home">
        <div className="overLay">
          <Header
            handleLogin={this.handleLogin}
            handleSignup={this.handleSignup}
          />
          <SideLink/>
          <div className="Hero">
            <div className="HeroContent">
              <h1 className="HeroHeading"> Automate your payments </h1>
              <p className="heroDes">
                Repify automate sending money to people you usually send money
                to on a regular basis. Lets saves you the stress of manually
                sending them money.
              </p>
                <Button Title=" Get Started " to="/dashboard/user#/wallet" />             
              {this.state.login === true ? (
                <Login close={this.close} handleSignup={this.handleSignup} />
              ) : null}
              {this.state.signup === true ? (
                <SignUp close={this.close} handleLogin={this.handleLogin} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Hero;
