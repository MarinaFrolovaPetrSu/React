import React from 'react'

export const LogIn = () => {
  return (
    <form>
      <label htmlFor="email">E-mail:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" size="28" />
      <input id="submit" type="submit" /> 
    </form>
  )
}