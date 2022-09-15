import React from 'react'
import Login from '../LoginPage/login'
import SignUp from '../SignUpPage/signup'

function Dashboard() {
    const [switchNote, setSwitchNote] = React.useState(false)
    
    const listentoSignup = () => {
        setSwitchNote(true)
    }

    const listentoLogin = () => {
        setSwitchNote(false)

    }
    return (
        <div>
            <div>
                {
                    switchNote ? <SignUp listentoLogin={listentoLogin}/> : <Login listentoSignup={listentoSignup} />
                }
            </div>
        </div>
    )
}

export default Dashboard
