import React from 'react'
import { Signpass } from './handimage' // ✅ named import
console.log(Signpass);

const DisplaySigns = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 30,
        right: 20,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10,
        borderRadius: 10,
        background: 'rgba(0,0,0,0.6)',
        zIndex: 40,
        width: 200,
        border: '1px solid rgba(143, 141, 141, 0.54)',
        maxHeight: '90vh',
      }}
    >
      {Signpass.map((sign, index) => (
        <img
          key={index}
          src={sign.src.src}
          alt={sign.alt}
          style={{
            width: 48,       // set proper size
            height: 48,
            margin: 5,
            objectFit: 'contain',
          }}
        />
      ))}
    </div>
  )
}

export default DisplaySigns
