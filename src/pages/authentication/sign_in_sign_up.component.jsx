import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign_in/sign_in.component'
import './sign_in_sign_up.component.styles.scss';

const SignIn_and_SignUp_Page = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

);

export default SignIn_and_SignUp_Page;