import React from 'react';

import Navbar from '../components/navbar/Navbar';
import SignIn from '../components/login/SignIn';
import Footer from '../components/footer/Footer';

const SigninPage = () => {
    return (
        <>
           <Navbar /> 
           <SignIn />
           <Footer />
        </>
    )
}

export default SigninPage;