import React, { Component } from 'react'
import Axios from 'axios'
import { Table, Input, Button } from 'reactstrap';
import Kartu from '../component/Card'
import DropdownCustom from '../component/Dropdown'
import {connect} from 'react-redux'

class Home extends Component{

    state = {
        data : [],
        buah: [],
        selectedId: null,
        dropdownOpen : false,
        nama: 'andi'
    }

    componentDidMount(){
        this.setState({nama: 'lian'})
        Axios.get('http://localhost:3000/users')
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data})
            // console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    editData = (id) => {
        this.setState({selectedId: id})
        console.log(this.state.selectedId)
    }

    renderUserData = () => {
        return this.state.data.map((val, index) => {
            if(this.state.selectedId === val.id){
                return(
                    <tr key={val.id}>
                        <td></td>
                        <td>
                            <Input type="text" innerRef={(namaDepanEdit) => this.namaDepanEdit = namaDepanEdit}/>
                        </td>
                        <td>
                            <Input type="text" innerRef={(namaBelakangEdit) => this.namaBelakangEdit = namaBelakangEdit}/>
                        </td>
                        <td>
                            <Input type="text" innerRef={(emailEdit) => this.emailEdit = emailEdit}/>
                        </td>
                        <td><Button color='primary' onClick={() => this.confirmEdit(val.id)}>Confirm</Button></td>
                        <td><Button color='secondary' onClick={() => this.setState({selectedId: null})}>Cancel</Button></td>
                    </tr>
                )
            }
            return(
                <tr key={val.id}>
                  <th scope="row">{index+1}</th>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td><Button color='success' onClick={() => this.editData(val.id)}>Edit</Button></td>
                  <td><Button color='danger' onClick={() => this.deleteData(val.id)}>Delete</Button></td>
                </tr>
            )
        })
    }

    confirmEdit = (id) => {
        var namaDepan = this.namaDepanEdit.value;
        var namaBelakang = this.namaBelakangEdit.value;
        var email = this.emailEdit.value;
        Axios.put(`http://localhost:3000/users/${id}`,{
            first_name: namaDepan,
            last_name:namaBelakang,
            email:email,
        })
        .then(() => {
            Axios.get('http://localhost:3000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({data: res.data, selectedId: null})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteData = (id) => {
        Axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
            Axios.get('http://localhost:3000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({data: res.data})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderCard = () => {
        return this.state.data.map((val) => {
            return(
                <Kartu key={val.id} contoh={val.first_name} contoh2={val.last_name} contoh3={val.email} data={'halo'} />
            )
        })
    }

    submitData = () => {
        var namaDepan = this.namaDepan.value;
        var namaBelakang = this.namaBelakang.value;
        var email = this.email.value;
        console.log(namaDepan)
        console.log(namaBelakang)
        console.log(email)
        Axios.post('http://localhost:3000/users', {
            first_name: namaDepan,
            last_name: namaBelakang,
            email: email
        })
        .then((res) => {
            Axios.get('http://localhost:3000/users')
            .then((res) => {
                this.setState({data: res.data})
                this.namaDepan.value = '';
                this.namaBelakang.value = '';
                this.email.value = '';
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        console.log(this.props.count)
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserData()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                #
                            </td>
                            <td>
                                <Input type="text" innerRef={(namaDepan) => this.namaDepan = namaDepan}/>
                            </td>
                            <td>
                                <Input type="text" innerRef={(namaBelakang) => this.namaBelakang = namaBelakang}/>
                            </td>
                            <td>
                                <Input type="text" innerRef={(email) => this.email = email}/>
                            </td>
                            <td>
                                <Button color='primary' onClick={this.submitData}>
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
                {/* {this.renderCard()} */}
                <DropdownCustom dataList={this.state.data}/>
                <div className='row'>
                    {this.renderCard()}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        count: state.count
    }
}

export default connect(mapStatetoProps)(Home)