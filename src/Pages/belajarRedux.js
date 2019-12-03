import React, { Component} from 'react';
import { connect } from 'react-redux'
import { login, logout, alert } from '../redux/action'
import Button from 'reactstrap/lib/Button';
// import { Button, Input } from 'reactstrap'
// import Axios from 'axios'
// import { Redirect } from 'react-router-dom'

class belajar extends Component {
    state = {
        data: []
    }

    render(){
        console.log(this.props.username)
        return(
            <div>
                <h1>
                    {
                    this.props.username
                    ?
                    this.props.username
                    :
                    'belum login'
                    }
                    {/* this.props itu bawaan dari react 
                        kalo const props.username */}
                </h1>

                <Button onClick={this.props.logout}> logout</Button>
                <Button onClick={this.props.alert}> Click Me</Button>
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

export default connect(mapStatetoProps, { login, logout, alert })(belajar)