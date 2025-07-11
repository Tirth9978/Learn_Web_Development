import React, { useEffect } from 'react'


function NavBar({ color }) {
  useEffect(() => {
    alert("Color Was Changed ")
  }, [color])

  // Example of the clean Up Function
  useEffect(() => {
    alert("I am CleanUp:(")
    return () => {
      alert("I have been Removed or added")
    }
  }, [])


  return (
    <div>
      I am NAV Bar with {color} .
    </div>
  )
}

export default NavBar
