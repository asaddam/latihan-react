import React, { Component } from 'react'
import Carousel from '../component/CarouselHome'
import Axios from 'axios'
// import { Table, Input, Button } from 'reactstrap';
import Kartu from '../component/Card'
// import DropdownCustom from '../component/Dropdown'
// import {connect} from 'react-redux'
import { API_URL } from '../helpers/apiUrl';

class Home extends Component{

    state = {
        data : []
    }

    componentDidMount(){
        Axios.get(API_URL + '/products')
        .then((res) => {
            console.log(res.data)
            this.setState({data: res.data})
        })
    }

    renderCardProduct = () => {
        return this.state.data.map((val) => {
            return(
                <Kartu key={val.id} nama={val.nama} harga={val.harga} image={val.image}/>
            )
        })
    }

    renderCarousel = () => {
        return(
            <Carousel productImage={this.state.data} />
        )
    }

    render(){
        return(
            <div>
                <div className='d-flex justify-content-center' >
                    <div className='mt-5'>
                        <Carousel data={this.state.data}/>
                    </div>
                </div>
                <div className='d-flex justify-content-center row mt-5'>
                    {this.renderCardProduct()}
                </div>
            </div>
        )
    }
}


export default (Home)