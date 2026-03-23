//
//
// was not able to separate commits step 3 and step 4
//
//
import React, { useState } from 'react'

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedData(formData)
    setFormData({ name: '', email: '', password: '' })
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

