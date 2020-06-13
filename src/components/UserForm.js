import React, { useState } from 'react'
import { FormUserDetails } from './FormUserDetails'
import { FormPersonalDetails } from './FormPersonalData'
import { Confirm } from './Confirm'
import { Success } from './Success'

export const UserForm = () => {
    const [state, setState] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    })
    
    // Proceed to next step
    const nextStep = () => {
        const { step } = state;
        setState({
            ...state,
            step: step + 1
        })
    }
    // Proceed to prev step
    const prevStep = () => {
        const { step } = state;
        setState({
            ...state,
            step: step - 1
        })
    }
    const handleChange = input => e => {
        setState({
            ...state,
            [input]: e.target.value
        })
    }

    const { step } = state
    const {firstName, lastName, email, occupation, city, bio} = state
    
    const values = {firstName, lastName, email, occupation, city, bio}

    switch(step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    // handleChange={handleChange}
                    values={values}
                />
                // <h1>Confirm</h1>
            )
        case 4:
            return (
                <Success
                    prevStep={prevStep}
                    values={values}
                />
            )
    }
}
