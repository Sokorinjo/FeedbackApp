import React from 'react'
import PropTypes from 'prop-types'


const Header = ({text, bgColor}) => {
    const headerStyles = {
        backgroundColor: bgColor,
    }
  
    return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'FeedbackUI',
    bgColor: 'rgba(0,0,0,0.4)'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header