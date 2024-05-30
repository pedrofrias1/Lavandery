import { Fragment } from "react";


function Clientes({ nombre, apellido, email, phone, marca, vehiculo, patente, seleccion }) {
  

  


   


    return (
        <Fragment>
            <div className="bg-client ">
                <div>
                    <ul>
                        <li className="fw-semibold name ">{nombre} {apellido}</li>
                        <li>{seleccion} {vehiculo}</li>
                        <li>{marca}, patente: {patente} </li>
                        <li className="">{email}</li>
                        <li className="d-flex justify-content-between pe-3">{phone} <i className="bi bi-whatsapp"></i></li>
                    </ul>
                </div>
            </div>

        </Fragment>
    )
}
export default Clientes;