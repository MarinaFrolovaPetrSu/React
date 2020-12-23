import React from 'react'

export const Register = () => {
  return (
    <form>
      <label htmlFor="email">E-mail:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" size="28" />
      <label htmlFor="surename">Surname:</label>
      <input id="surname" type="text" name="surname" size="28" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" size="28" />
      <input id="submit" type="submit" /> 
    </form>
  )
}