import React, { useState } from 'react'
import { useStytch } from '@stytch/react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const stytchClient = useStytch();

  const token = new URLSearchParams(window.location.search).get("token");
  const resetPassword = () => {
    stytchClient.passwords.resetByEmail({
      token: token!,
      password: newPassword,
      session_duration_minutes: 60,
    })
  }

  return (
    <div>
      <input
        placeholder="New Password..."
        onChange={(e) => {
          setNewPassword(e.target.value)
        }}
      />
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  )
}

export default ResetPassword