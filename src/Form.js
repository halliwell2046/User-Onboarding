import React from 'react'

export default function Form(props) {
    const {values, submit, change, disabled, errors } = props
    
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add User</h2>

                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.Agree}</div>
                    <div>{errors.Disagree}</div>
                    <div>{errors.Skip}</div>
                </div>
            </div>

            <div className='form-groupInputs'>
                <h4>User's Information</h4>

                <label>Name
                    <input value={values.name} onChange={onChange} name='name' type='text'/>
                </label>

                <label>Email
                    <input value={values.email} onChange={onChange} name='email' type='email' />
                </label>

                <label>password
                    <input value={values.password} onChange={onChange} name='password' type='password' />
                </label>
            </div>

            <div className='form-groupCheckboxes'>
                <h4>Terms of Service</h4>

                <label>Agree
                    <input type='checkbox' name='Agree' onChange={onChange} checked={values.Agree} />
                </label>

                <label>Disagree
                    <input type='checkbox' name='Disagree' onChange={onChange} checked={values.Disagree} />
                </label>

                <label>Skip
                    <input type='checkbox' name='Skip' onChange={onChange} checked={values.Skip} />
                </label>
            </div>
        </form>
    )
}