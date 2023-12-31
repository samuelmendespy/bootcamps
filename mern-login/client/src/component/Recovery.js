import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../store/store';
import { generateOTP, verifyOTP } from '../helper/helper';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/Username.module.css';

export default function Recovery() {
  console.log('Recovery component mounted')
  const { username } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState();
  const [isOTPGenerated, setIsOTPGenerated] = useState(false);
  const navigate = useNavigate();



  // Handler to send OTP
  async function sendOTP() {
    try {
      let newOTP = await generateOTP(username);
      console.log('Sending OTP');
      console.log(newOTP);
      setIsOTPGenerated(true); // Mark OTP as generated
      return toast.success('OTP has been sent to your email!');
    } catch (error) {
      console.error('Error while sending OTP:', error);
      return toast.error('Problem while sending OTP!');
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201) {
        toast.success('Verify Successfully!');
        return navigate('/reset');
      }
    } catch (error) {
      return toast.error('Wrong OTP! Check email again!');
    }
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to password recovery
            </span>
          </div>

          <form className="pt-20" onSubmit={onSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  onChange={(e) => setOTP(e.target.value)}
                  type="text"
                  className={styles.textbox}
                  placeholder="OTP"
                />
              </div>

              <button className={styles.btn} type="submit">
                Confirm
              </button>
            </div>
          </form>

          <div className="text-center py-4">
            <span className="text-gray-500">
              {!isOTPGenerated ? ( 
                <button onClick={sendOTP} className="text-red-500">
                  Send OTP
                </button>
              ) : (
                // If OTP is generated, show Resend button
                <button onClick={sendOTP} className="text-red-500">
                  Resend
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
