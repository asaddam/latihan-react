import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, minus, login } from '../redux/action'
import { Button, Input } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component{

    
    loginUser = () => {
        let username = this.text.value;
        let password = this.pass.value;
        if(username === '' || password === ''){
            alert('Fill in all the forms')
        }else{
            Axios.get(`http://localhost:3000/Login?username=${username}&password=${password}`, {
                username,
                password
            })
            .then((res) => {
                if(res.data.length === 0){
                    alert('username or password invalid')
                }else{
                    console.log(res.data)
                    this.props.login(res.data[0])
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    render(){
        if(this.props.username !== ''){
            return(
                <Redirect to='/'>

                </Redirect>
            )
        }

        console.log(this.props.count)
        console.log(this.props.username)
        console.log(this.props.role)
        return(
            <div className='d-flex justify-content-center row'>
                <div>
                    <Input type='text' innerRef={(text) => this.text = text}/>
                    <Input type='password' innerRef={(pass) => this.pass = pass}/>
                    <Button  onClick={this.loginUser}>
                        Click Me !
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count : state.count.count,
        username: state.user.username,
        role: state.user.role
    }
}

export default connect(mapStatetoProps, { add, minus, login })(Login)