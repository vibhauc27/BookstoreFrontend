import React, {useState} from 'react'
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { userSignup } from '../Service/userService';
import bookstoreimage from '../../bookstoreimage.png'



const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;

function SignUp(props) {
    const clickHandlerTwo = () => { props.listentoLogin()
    console.log("header") }

    const [signUpObj, setSignUpObj] = useState({
        fullName: '', email: '', password: '', phone: ''
    })
    const [objRegex, setObjRegex] = useState({
        fullNameBorder: false, fullNameHelper: '', passwordBorder: false, passwordHelper: '', emailBorder: false, emailHelper: '', phoneBorder: false, phoneHelper: ''
    })
    const signUpSubmit = () => {
        let fullNameTest = fullNameRegex.test(signUpObj.fullName)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let emailTest = emailRegex.test(signUpObj.email)
        let phoneTest = phoneRegex.test(signUpObj.phone)

        if (fullNameTest === true) {
            setObjRegex(prevState => ({ ...prevState, fullNameBorder: false, fullNameHelper: '' }))
        }
        else {
            setObjRegex(prevState => ({ ...prevState, fullNameBorder: true, fullNameHelper: 'Enter the full name' }))

        }

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

        if (phoneTest === true) {
            setObjRegex(prevState => ({ ...prevState, phoneBorder: false, phoneHelper: '' }))
        }
        else {
            setObjRegex(prevState => ({ ...prevState, phoneBorder: true, phoneHelper: 'Enter correct phone number' }))

        }



        if (fullNameTest == true && passwordTest == true && emailTest == true && phoneTest == true ) {
            userSignup(signUpObj).then((res) => { console.log(res) }).catch((err) => { console.log(err) })
        }
    }

    const takeFullName = (event) => {
        setSignUpObj({ ...signUpObj, fullName: event.target.value })
    }

    const takePassword = (event) => {
        setSignUpObj({ ...signUpObj, password: event.target.value })
    }

    const takeEmail = (event) => {
        setSignUpObj({ ...signUpObj, email: event.target.value })
    }
    const takephone = (event) => {
        setSignUpObj({ ...signUpObj, phone: event.target.value })
    }


    return (
        <div class="mainDivSignup">
            <div class="signupBookParent">
                <div class="imageBoxsignup">
                    <div class="imagesignup">
                    <img className="imageSignup" src={bookstoreimage} />
                        {/* <img className="imageSignup" src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A634ba680-536e-4b6f-b4a3-41986b9b22f5&params=version%3A0&token=1655186675_da39a3ee_a9a7ed508dcbf92d913cda05ac9a0609645c85ac&api_key=CometServer1" width="200px" height="200px"></img> */}
                    </div>
                    <div class="textsignup">
                        ONLINE BOOK SHOPPING
                    </div>
                </div>
                <div class="loginBoxsignup">
                    <div class="firstlinesignup">
                        <Button variant="text" onClick={clickHandlerTwo}>LOGIN</Button>
                        <Button variant="text">SIGN UP</Button>
                    </div>
                    <TextField onChange={takeFullName} error={objRegex.fullNameBorder} helperText={objRegex.fullNameHelper} id="outlined-size-small" label="Full name" size="small" variant="outlined" />
                    <TextField onChange={takeEmail} error={objRegex.emailBorder} helperText={objRegex.emailHelper} id="outlined-size-small" label="EmailId" size="small" variant="outlined" />
                    <TextField onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} id="outlined-size-small" label="Password" size="small" variant="outlined" />
                    <TextField onChange={takephone} error={objRegex.phoneBorder} helperText={objRegex.phoneHelper} id="outlined-size-small" label="Mobile number" size="small" variant="outlined" />
                    <div class="lastlinesignup">
                        <Button onClick={signUpSubmit} variant="contained" fullWidth color="error">LOGIN</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
