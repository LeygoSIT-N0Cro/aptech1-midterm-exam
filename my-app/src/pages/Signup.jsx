//
//
// was not able to separate commits step 3 and step 4
//
//
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [submittedData, setSubmittedData] = useState(null)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      setSubmittedData(formData)
      setFormData({ name: '', email: '', password: '' })
      setErrors({})
      navigate('/success')
    }
  }

  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors }

    switch (fieldName) {
      case 'name':
        const nameRegex = /^[A-Za-z]{2,}$/;
        const usernameRegex = /^[A-Za-z0-9._-]+$/;
        if (!nameRegex.test(value)) {
          fieldErrors.name = 'First name and surname must be at least 2 letters and contain only letters.';
        } else if (!usernameRegex.test(value)) {
          fieldErrors.name = 'Username can only contain letters, numbers, dots, underscores, and hyphens.';
        } else {
          delete fieldErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          fieldErrors.email = 'Please enter a valid email address.';
        } else {
          delete fieldErrors.email;
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        if (!passwordRegex.test(value)) {
          fieldErrors.password = 'Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        } else {
          delete fieldErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(fieldErrors)
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
    } else if (!usernameRegex.test(name)) {
      validationErrors.name = 'Username can only contain letters, numbers, dots, underscores, and hyphens.';
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

  useEffect(() => {
    setIsFormValid(Object.keys(errors).length === 0 && formData.name && formData.email && formData.password)
  }, [errors, formData])

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
            className={errors.name ? 'invalid' : ''}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className={errors.email ? 'invalid' : ''}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>

        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
            className={errors.password ? 'invalid' : ''}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </label>

        <button type='submit' disabled={!isFormValid}>Create account</button>
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

