import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [submittedData, setSubmittedData] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      setSubmittedData(formData)
    }
    setFormData({ name: '', email: '', password: '' })
  }

  const validateForm = () => {
    const { name, email, password } = formData;
    let validationErrors = {};
    const nameRegex = /^[A-Za-z]{2,}$/;
    const usernameRegex = /^[A-Za-z0-9._-]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(name)) {
      validationErrors.name = 'First name and surname must be at least 2 letters and contain only letters.';
    }

    if (!usernameRegex.test(name)) {
      validationErrors.username = 'Username can only contain letters, numbers, dots, underscores, and hyphens.';
    }

    if (!passwordRegex.test(password)) {
      validationErrors.password = 'Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    if (!emailRegex.test(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }

  return (
    <main className='page-content'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange} 
            placeholder='Enter your name'
            required
          />
        </label>

        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} // inline handler
            placeholder='Enter your email'
            required
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
            required
          />
        </label>

        <button type='submit'>Create account</button>
      </form>

      {submittedData && (
        <section className='submitted'>
          <h2>Submitted</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password ? '...' : ''}</p>
        </section>
      )}
    </main>
  )
}

export default Signup

