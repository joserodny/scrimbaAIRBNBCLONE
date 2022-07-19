import logo from "../Navbar/assets/images/airbnb-Logo.svg"
import "../Navbar/assets/css/Nav.css"


export default function NavBar() {
  return (
    <nav>
     <img src={logo} alt="logo" className="nav--logo" />
    </nav>
  )
}
