import { Fragment } from "react";




function FormVehiculo({  clickCar }) {


    
    const cargarVehiculo = async (event) => {
        event.preventDefault();
        const form = {
            "marca": event.target[0].value,
            "vehiculo": event.target[1].value,
            "patente": event.target[2].value
        }

        await fetch("http://localhost:4005/cargarVehiculo", {
            method: "post",
            body: JSON.stringify(form),
            headers: {
                'Content-type': "application/json"
            }
        })
            .then((res) => console.log(res))
            .then(data => event.target.reset())
            .catch((err) => console.log(err))
    }


    // const values = "auto"

    // setSelect(values)
    // console.log(select);

    // if (select === "auto") {
    //     return <i class="bi bi-car-front-fill"></i>
    // }

    // if (select ==="camioneta" ) {
    //     return <img src={truck} alt="" />
    // }

    // if (select === "moto") {
    //     return <img src={moto} alt="" />
    // }

    return (
        <Fragment>
            <form className="d-flex gap-1 align-items-center justify-content-center pt-5 ps-4 pe- forms" action="http://localhost:4005/cargarVehiculo" onSubmit={(event) => cargarVehiculo(event)}>
                <div className="">
                    <label htmlFor="marca">Marca*</label>
                    <input type="text" placeholder="Toyota" id="marca" />
                    <label htmlFor="vehiculo">Vehiculo*</label>
                    <select name="vehiculo" className="select-car" id="vehiculo" onChange={(e) => clickCar(e)}>
                        <option value="auto" >Auto</option>
                        <option value="camioneta" >Camioneta</option>
                        <option value="moto">Moto</option>
                    </select>
                    <label htmlFor="patente">Patente*</label>
                    <input type="text" placeholder="123 AAA" id="patente" />
                </div>


                <div className="d-flex aling-items-center justify-content-center gap-2">
                    <input className="send" type="submit" value="Cargar" />
                    <input className="send" type="button" value="Cancelar" />
                </div>
            </form>




        </Fragment>
    )
}
export default FormVehiculo;