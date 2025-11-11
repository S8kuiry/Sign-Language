import React from 'react'

const HeadLetter = () => {
  const containerStyle = {
    position: 'absolute',
    top: '2.5rem', // same as Tailwind top-10
    left: '2.5rem', // same as Tailwind left-10
    borderRadius: '0.5rem', // rounded-lg
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '0.75rem 1rem', // py-3 px-4
    zIndex: 40,
  }

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #06b6d4, #3b82f6)', // cyan to blue
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.125rem', // text-lg
    margin: 0,
  }

  const gradientSubTextStyle = {
    background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '0.875rem', // text-sm
    margin: 0,
  }

  return (
    <div style={containerStyle}>
      <p style={gradientTextStyle}>SignTalk – Empowering Communication</p>
      <p style={gradientSubTextStyle}>Bridging the gap for a more inclusive future</p>
    </div>
  )
}

export default HeadLetter
