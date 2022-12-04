import React, { useState } from 'react'
import { useStytch } from '@stytch/react';

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const stytchClient = useStytch();

    const signUp = async () => {
        await stytchClient.passwords
            .strengthCheck({ email, password })
            .then((res) => {
                console.log('Success', res);
            })
            .catch((err) => {
                console.log('Err: ', err);
            });
        await stytchClient.passwords.create({
            email,
            password,
            session_duration_minutes: 60, 
        });
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
            <button onClick={signUp}>Sign up</button>
        </div>
    )
}

export default SignUp