import React, { useState } from 'react'
import { useStytch } from '@stytch/react';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const stytchClient = useStytch();
    const resetPasswordByEmail = () => {
        stytchClient.passwords.resetByEmailStart({
            email: email
        });
    }

    const login = async () => {
        await stytchClient.passwords.authenticate({
            email,
            password,
            session_duration_minutes: 60, 
        })
    }

    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e) => {
                    setEmail(e.target.value as string)
                }}
            />
            <input
                placeholder="Password..."
                onChange={(e) => {
                    setPassword(e.target.value as string)
                }}
            />
            <button onClick={login}>Login</button>
            <div>
                <p>Forgot your password?</p>
                <button onClick={resetPasswordByEmail}>Reset Password</button>
            </div>
        </div>
    )
}

export default Login