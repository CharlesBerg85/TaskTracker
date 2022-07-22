import PropTypes from 'prop-types'
import  Button  from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' :'green'} text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS File
// Styling option without doing within my index.css file
// This line of code would go in the return/header block of code:
// <h1 style={headingStyle}>{title}</h1>
// This next block of code is the value of the headingStyle Const
// const headingStyle = {
//  color: 'red',
//  backgroundColor: 'black',
//  }

export default Header