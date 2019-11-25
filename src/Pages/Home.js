import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Home extends Component{
    render(){
        return(
            <div>
                <center>
                <h1>Sign In</h1>
                <InputGroup style={{ width: 720}}>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>&nbsp;</InputGroupText>
                    </InputGroupAddon>
                        <Input placeholder="username" id="user" />
                </InputGroup>
                <br />
                <InputGroup style={{ width: 720}}>
                    <InputGroupAddon addonType="prepend" >
                        <InputGroupText>&nbsp;</InputGroupText>
                    </InputGroupAddon>
                        <Input placeholder="password" id="pass" />
                </InputGroup>
                <br />
                <Link to='/not-home'>
                    <Button>
                        Login
                    </Button>
                </Link>
                </center>
            </div>
        )
    }
}


export default Home;