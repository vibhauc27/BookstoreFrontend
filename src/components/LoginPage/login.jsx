import React, {useState} from 'react'
import './login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from '../Service/userService';
import bookstoreimage from '../../bookstoreimage.png'

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login(props) {
    const clickHandler = () => {props.listentoSignup()}  
    
    const [signUpObj, setSignUpObj] = useState({
        email: '', password: ''
    })
    const [objRegex, setObjRegex] = useState({
        passwordBorder: false, passwordHelper: '', emailBorder: false, emailHelper: ''
    })
    const loginSubmit = () => {
        let passwordTest = passwordRegex.test(signUpObj.password)
        let emailTest = emailRegex.test(signUpObj.email)

        if (passwordTest === true) {
            setObjRegex(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }
        else {
            setObjRegex(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: 'Enter correct password' }))

        }

        if (emailTest === true) {
            setObjRegex(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }
        else {
            setObjRegex(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Enter correct email id' }))

        }

        if (passwordTest == true && emailTest == true){
            login(signUpObj).then((res) => { console.log(res); localStorage.setItem("token",res.data.result.accessToken) }).catch((err) => { console.log(err) })
        }
    }

    const takePassword = (event) => {
        setSignUpObj({ ...signUpObj, password: event.target.value })
    }

    const takeEmail = (event) => {
        setSignUpObj({ ...signUpObj, email: event.target.value })
    }

    return (
        <div class="mainDiv">

            <div class="loginBookParent">
                <div class="imageBox">
                    <div class="image">
                    <img className="imageLogin" src={bookstoreimage} />
                        {/* <img className="imageLogin" src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A634ba680-536e-4b6f-b4a3-41986b9b22f5&params=version%3A0&token=1655186675_da39a3ee_a9a7ed508dcbf92d913cda05ac9a0609645c85ac&api_key=CometServer1" width="200px" height="200px"></img> */}
                    </div>
                    <div class="text">
                        ONLINE BOOK SHOPPING
                    </div>
                </div>

                <div class="loginBox">
                    {/* <div class="loginBoxContainer"> */}
                        <div class="firstline">
                            <Button variant="text" >LOGIN</Button>
                            <Button variant="text" onClick={clickHandler}>SIGN UP</Button>
                        </div>
                        <div><TextField onChange={takeEmail} error={objRegex.emailBorder} helperText={objRegex.emailHelper} id="outlined-size-small" label="EmailId" size="small" variant="outlined" /></div>
                        <div><TextField onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} id="outlined-size-normal" label="Password" size="small" variant="outlined" /></div>
                        <Button onClick={loginSubmit} variant="contained" fullWidth color="error">LOGIN</Button>
                        <div>----------------OR----------------</div>
                        <div class="lastline">
                            <Button variant="contained" >Facebook</Button>
                            <Button variant="outlined" >Google</Button>
                        </div>
                    {/* </div> */}
                </div>
            </div>

        </div>
    )
}

export default Login
