import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Input } from 'reactstrap';
import Axios from 'axios';
import { Table, Button } from 'reactstrap';
import Kartu from '../component/Card'
import Droppy from '../component/Dropdown';
import Row from 'reactstrap/lib/Row';

class Home extends Component{
    state = {
        data : [],
        selectedId: null,
        dropdownOpen: false
    }
    
    // ini akan jalan dirender kedua
    componentDidMount(){
        Axios.get('http://localhost:3000/users')
        .then((res) => {
            this.setState({data : res.data})
            console.log(res.data)
        })
        .catch((err) => {
        console.log(err);
        })
    }

    
    contoh = () => {
        Axios.get('http://localhost:3000/users')
        .then((res) => {
            this.setState({data : res.data})
            console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    submitData = () => {
        var namaDepan = this.refs.first_name.value
        var namaBlkng = this.refs.last_name.value
        var email = this.refs.email.value
        Axios.post('http://localhost:3000/users', {
            first_name: namaDepan,
            last_name: namaBlkng,
            email: email
        })
        .then((res) => {
            console.log(res.data)
            Axios.get('http://localhost:3000/users')
            .then((res) => {
                this.setState({data : res.data})
                console.log(this.state.data)
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })
        this.refs.first_name.value = ''
        this.refs.last_name.value = ''
        this.refs.email.value = ''
        
        console.log(this.refs) //setiap ada input bisa kitaliat dengan ini
    }

    deletedData = (id) => {
        Axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
            Axios.get('http://localhost:3000/users')
            .then((res) => {
                this.setState({data : res.data})
                console.log(this.state.data)
            })
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
                    <th>{index+1}</th>
                    <td>{/*<input type="text" name="first-name" ref="editfn" placeholder="first name" /> */}
                    <Input type="text" innerRef={(editfn) => this.editfn = editfn}/>
                    </td>
                    <td><Input type="text" innerRef={(editln) => this.editln = editln}/></td>
                    <td><Input type="text" innerRef={(editEmail) => this.editEmail = editEmail}/></td>
                    <td><Button onClick={() => this.confirm(val.id)}>Confirm</Button></td>
                    <td><Button onClick={() => this.setState({selectedId: null})}>Cancel</Button></td>
                    </tr>
                )
            }
            return(
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td><Button color="success" onClick={() => this.editData(val.id)}>Edit</Button></td>
                    <td><Button color="primary" onClick={() => this.deletedData(val.id)}>Delete</Button></td>
                    </tr>
            )
        })
    }

    confirm = (id) => {
        var editFN = this.editfn.value
        var editLN = this.editln.value
        var editemail = this.editEmail.value
        
        if(editFN === '' || editLN === '' || editemail === ''){
            alert('Tolong isi semua data')
        }
        else{
            Axios.put(`http://localhost:3000/users/${id}`, {
                first_name: editFN,
                last_name: editLN,
                email: editemail
            })
            .then((res) => {
                console.log(res.data)
                Axios.get('http://localhost:3000/users')
                .then((res) => {
                    this.setState({data : res.data, selectedId: null})
                    console.log(this.state.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err)
            })
            
        }
        console.log(this.refs) //setiap ada input bisa kitaliat dengan ini
    }

    renderCard = () => {
        return this.state.data.map((val) => {
            return(
                <Kartu contoh={val.first_name} contoh2={val.last_name} contoh3={val.email}/>
            )
        })
    }
    
    renderDropdown = () => {
        return this.state.data.map((val) => {
            return(
                <div>
                <DropdownItem header>{val.id}</DropdownItem>
                <DropdownItem disabled>{val.first_name}</DropdownItem>
                <DropdownItem disabled>{val.last_name}</DropdownItem>
                <DropdownItem disabled>{val.email}</DropdownItem>
                <DropdownItem divider />
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <center>
                <h1>Register</h1>
                    <Row className="d-flex justify-content-center bd-highlight"><Droppy fn={this.renderDropdown()} /></Row>
                
                <Table size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Admin</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserData()}
                        <tr>
                        <th>#</th>
                        <td><input type="text" name="first-name" ref="first_name" placeholder="first name" /></td>
                        <td><input type="text" name="last-name" ref="last_name" placeholder="last name" /></td>
                        <td><input type="email" name="email" ref="email" placeholder="email" /></td>
                        <td><Button color="secondary" onClick={this.submitData}>
                                Submit
                            </Button></td>
                        </tr>
                    </tbody>
                </Table>

                {/* {this.renderCard()} */}



                <Link to='/not-home'>
                    not Home
                </Link>
                <br />
                <Button onClick={this.contoh}>
                    Click Me
                </Button>

                </center>
            </div>
        )
    }
}


export default Home;

// auto sugestion di search bar => dia mengambil data ketika ada input yg masuk, maka menggunakan didmount