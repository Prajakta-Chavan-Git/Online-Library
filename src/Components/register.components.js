import React, {Component} from 'react';
import axios from 'axios';
export default class RegUsersForm extends Component{
	constructor(props){   
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);

		this.onChangeEmailid = this.onChangeEmailid.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeExtra = this.onChangeExtra.bind(this);
		// this.onChangeStatus = this.onChangeStatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state ={
			username: '',
			emailid: '',
			password: '',
			extra:'admin',
			status:'1'
		}

	}

	onChangeUsername(e){
		this.setState({
			username: e.target.value
		})
	}

	onChangeEmailid(e){
		this.setState({
			emailid: e.target.value
		})
			

	}

	onChangePassword(e){
		this.setState({
			password: e.target.value
		})
	}

	onChangeExtra(e){
		this.setState({
			extra: e.target.value
		})
    }
    onSubmit(e){
		e.preventDefault();

		const users = {
			username: this.state.username,
			emailid: this.state.emailid,
			password: this.state.password,
			extra: this.state.extra,
			status: this.state.status

		}
        console.log(users);
		
		axios.post('http://localhost:5000/auth_register/checkemail',users)
			.then(res => {
				if(res.data==='already--exists'){
					document.getElementById("alerter").innerHTML = '<div class="alert alert-danger alert-dismissible fade show"  } id="email_taken" role="alert"><p>Email already exists</p></div>';

					
				}else if(res.data==='doesnot--exist'){
					axios.post('http://localhost:5000/users_coll/add', users)
					.then(console.log(res));
				}
            })
            this.setState({
                username: '',
                emailid: '',
                password: '',
                extra: '',
                status: '1',
                
            })
    
            //window.location = "/";
        }
    }