import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'contact'].map((item,index) => (
          <a 
           style={active === item ? {backgroundColor: '#313BAC'}:{}}
           href={`#${item}`}
           key ={item + index}
           className = "app__navigation-dot"
           />
      ))}
    </div>
  )
}

export default NavigationDots