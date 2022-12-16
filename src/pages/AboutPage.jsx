import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
  <div className="about">
    <h1>About this project</h1>
    <p>This is a React app to leave feedback for a product or service</p>

    <p>Version: 1.0.0</p>
    <p>
        <Link to='/'>Home Page</Link>
    </p>
  </div>
  )
}

export default AboutPage