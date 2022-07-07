import React from 'react'
import './Auth.css'
import Logo from '../../img/classic.jpg'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className='a-left'>
            <img src={Logo} alt='' />
            <div className='Webname'>
                <h1>Video Games and Cars</h1>
                <h6>Stream Play Enjoy</h6>
            </div>
        </div>

        <SignUp />
    </div>
  )
}

function SignUp(){

    return(
        <div className='a-right'>
            <form action='' className='infoForm'>


                <h3>Sign Up</h3>
                <div>
                    <input type="text"  placeholder='First Name' className='infoInput' name='firstname'/>

                </div>
            </form>
        </div>
    )
}

export default Auth