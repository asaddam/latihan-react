import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotHome extends Component{
    render(){
        return(
            <div>
                ini bukan home
                <Link to='/'>
                    <button>
                        pindah ke Home
                    </button>
                </Link>
            </div>
        )
    }
}

export default NotHome;