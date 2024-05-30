import { Fragment } from "react";


function Nav(){
    return (
        <Fragment>
            <nav className="container-fluid nav-bar">
                <div className="container d-flex align-items-center gap-2">
                <i class="bi bi-house-door"></i>
                <h4 className="fs-3 ">Clientes</h4>   
                </div>
            </nav>
        </Fragment>
    )
}
export default Nav;