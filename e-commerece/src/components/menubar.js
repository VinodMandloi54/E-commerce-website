import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneRotary } from "@danieloi/pro-solid-svg-icons";
import { faCartShopping } from '@danieloi/pro-solid-svg-icons';
import { Link } from "react-router-dom";
import { faTrash } from "@danieloi/pro-solid-svg-icons";


export default function Menubar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1A237E" }} >
      <a className="navbar-brand" href="#">
        <FontAwesomeIcon icon={faPhoneRotary} style={{ color: "#b8bb16", }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={"/"} className="nav-link" href="#">product <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">



          <Link to={"/cart"} className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#57eae0", }} />
            MYCart</Link>


        </form>
      </div>
    </nav>

  )
}