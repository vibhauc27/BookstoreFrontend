import React from 'react'
import './CustomerDetail.css'
import TextField from '@mui/material/TextField';
import { customerDetails } from '../Service/dataService';

// const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
// const mobileRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
// const cityRegex = /^[A-Z]{1}[a-z]{2,}$/;
// const stateRegex = /^[A-Z]{1}[a-z]{2,}$/;
// const addressRegex = /^[A-Z]{1}[a-z]{2,}$/;

function CustomerDetail(props) {
    // console.log(props)
    const [continueSwitch, setContinueSwitch] = React.useState(true)
    const [radioButton, setRadioButton] = React.useState("")

    const [detailObj, setDetailObj] = React.useState({
        fullAddress: '', city: '', state: '', addressType: ''
    })

    const clickContinue = () => {
        let continueobj = {
            addressType: radioButton,
            fullAddress: detailObj.address,
            city: detailObj.city,
            state: detailObj.state
        }
        // setContinueSwitch(false)
        // props.listentoOrderSummary()

        customerDetails(continueobj)
            .then((response) => {
                console.log(response)
                setContinueSwitch(false)
                props.listentoOrderSummary()
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const takeFullName = (event) => {
        setDetailObj({ ...detailObj, fullName: event.target.value })
    }
    const takeMobileNumber = (event) => {
        setDetailObj({ ...detailObj, mobileNumber: event.target.value })
    }
    const takeAddress = (event) => {
        setDetailObj({ ...detailObj, address: event.target.value })
    }
    const takeCity = (event) => {
        setDetailObj({ ...detailObj, city: event.target.value })
    }
    const takeState = (event) => {
        setDetailObj({ ...detailObj, state: event.target.value })
    }

    const clickRadioButton = (event) => {
        setRadioButton(event.target.value)
    }

    return (
        <div className='customerDetailParent'>
            <div className='customerDetailBox'>
                <div className='customerDetailBoxRow1'>
                    <div className='customerDetailText1'>Customer Details</div>
                    <div className='customerDetailText2'>Add new address</div>
                </div>
                <div className='customerDetailBoxRow2'>
                    <div className='customerDetails'>
                        <div className='customerDetailFullname'>
                            <div>Full name</div>
                            <TextField onChange={takeFullName} id="outlined-basic" variant="outlined" size="small" />
                        </div>
                        <div className='customerDetailMobileNumber'>
                            <div>Mobile number</div>
                            <TextField onChange={takeMobileNumber} id="outlined-basic" variant="outlined" size="small" />
                        </div>
                    </div>
                    <div className='customerDetailAddress'>
                        <div>Address</div>
                        <TextField onChange={takeAddress} id="outlined-basic" variant="outlined" fullWidth />
                    </div>
                    <div className='customerDetails'>
                        <div className='customerDetailCity'>
                            <div>City/town</div>
                            <TextField onChange={takeCity} id="outlined-basic" variant="outlined" size="small" />
                        </div>
                        <div className='customerDetailState'>
                            <div>State</div>
                            <TextField onChange={takeState} id="outlined-basic" variant="outlined" size="small" />
                        </div>
                    </div>
                    <div className='customerDetailstype'>
                        <div className='customerDetailTypetext'>Type</div>
                        <div className='customerOption' onClick={clickRadioButton}>
                            <div><input type="radio" value="Home"></input>Home</div>
                            <div><input type="radio" value="Office"></input>Office</div>
                            <div><input type="radio" value="Other"></input>Other</div>
                        </div>
                    </div>
                    <div className='customerDetailContinueButton'>
                        {
                            continueSwitch ? <button className='continueButton' onClick={clickContinue}>Continue</button> : null
                        }

                        {/* <button className='continueButton' onClick={clickContinue}>Continue</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetail






























// const [objRegex, setObjRegex] = React.useState({
    //     fullNameBorder: false, fullNameHelper: '', mobileBorder: false, mobileHelper: '', addressBorder: false, addressHelper: '', cityBorder: false, cityHelper: '', stateBorder: false, stateHelper: ''
    // })

    // const clickContinue = () => {
    //     let detailObj = {
    //         addressType: radioButton,
    //         // fullAddress: fullAddressInput.current.value,
    //         // city: city.current.value,
    //         // state: state.current.value
    //     }
    //     customerDetails(detailObj)
    //         .then((response) => {
    //             console.log(response)
    //             setContinueSwitch(false)
    //             props.listentoOrderSummary(true)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }
    //     setContinueSwitch(false)
    //     props.listentoOrderSummary()

    //     let fullNameTest = fullNameRegex.test(detailObj.fullName)
    //     let mobileTest = mobileRegex.test(detailObj.mobileNumber)
    //     let addressTest = addressRegex.test(detailObj.address)
    //     let cityTest = cityRegex.test(detailObj.city)
    //     let stateTest = stateRegex.test(detailObj.state)

    //     if (fullNameTest === true) {
    //         setObjRegex(prevState => ({ ...prevState, fullNameBorder: false, fullNameHelper: '' }))
    //     }
    //     else {
    //         setObjRegex(prevState => ({ ...prevState, fullNameBorder: true, fullNameHelper: 'Enter correct name' }))

    //     }

    //     if (mobileTest === true) {
    //         setObjRegex(prevState => ({ ...prevState, mobileBorder: false, mobileHelper: '' }))
    //     }
    //     else {
    //         setObjRegex(prevState => ({ ...prevState, mobileBorder: true, mobileHelper: 'Enter correct mobile number' }))

    //     }
    //     if (addressTest === true) {
    //         setObjRegex(prevState => ({ ...prevState, addressBorder: false, addressHelper: '' }))
    //     }
    //     else {
    //         setObjRegex(prevState => ({ ...prevState, addressBorder: true, addressHelper: 'Enter correct address' }))

    //     }
    //     if (cityTest === true) {
    //         setObjRegex(prevState => ({ ...prevState, cityBorder: false, cityHelper: '' }))
    //     }
    //     else {
    //         setObjRegex(prevState => ({ ...prevState, cityBorder: true, cityHelper: 'Enter correct city name' }))

    //     }
    //     if (stateTest === true) {
    //         setObjRegex(prevState => ({ ...prevState, stateBorder: false, stateHelper: '' }))
    //     }
    //     else {
    //         setObjRegex(prevState => ({ ...prevState, stateBorder: true, stateHelper: 'Enter correct state name' }))

    //     }

    //     if (fullNameTest == true && mobileTest == true && addressTest == true && cityTest == true && stateTest == true) {
    //         customerDetails(detailObj)
    //             .then((response) => { console.log(response) })
    //             .catch((error) => { console.log(error) })
    //     }
    // }
