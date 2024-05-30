import { Fragment, useEffect, useState } from "react";
import Nav from "./nav";
import Clientes from "./clientes";
import Form from "./formularios/formulario";
import truck from "./img/truck.png";
import motoB from "./img/moto.png";
import Lavado from "./lavado/lavado";
import FormVehiculo from "./formularios/formV";

function Home() {

    const [informacion, setInformacion] = useState([]);
    const [showNew, setShowNew] = useState(true);
    const [showCar, setShowCar] = useState(false);
    const [seleccion, setSeleccion] = useState([]);
    const [auto, setAuto] = useState("auto");
    const [camioneta, setCamioneta] = useState("camioneta");
    const [moto, setMoto] = useState("moto");


    const show = () => {
        setShowNew(!showNew);
        setShowCar(!showCar);
    }




    const infoVehiculos = async () => {
        await fetch('http://localhost:4005/vehiculos')
            .then(res => { return res.json() })
            .then((data) => { setInformacion(data) })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        infoVehiculos();
    }, [])


    // const clienteNuevo = (e) => {
    //     setOpOk(true)
    //     e.preventDefault();

    //     let objectoFetch = {};

    //     if (metodo === "post") {
    //         let formInfo = new FormData(e.target);

    //         objectoFetch = {
    //             method: metodo,
    //             body: formInfo
    //         }
    //     }

    // }

    let camionet = <img src={truck} alt="" />
    let motoBike = <img src={motoB} alt="" />
    let car = <i class="bi bi-car-front-fill"></i>

    const clickCar = (e) => {
        e.preventDefault();

        let select = e.target.value
        setSeleccion(select)

        if (seleccion === auto) {
            return setAuto(car)
        }
        if (seleccion === camioneta) {
            return setCamioneta(camionet)
        }
        if (seleccion === moto) {
            return setMoto(motoBike)
        }
    }



    return (
        <Fragment>
            <Nav />
            <section className="d-flex  pt-5">

                <article className="div-clientes">
                    <h2>Datos del cliente:</h2>
                    <div>
                        <p onClick={show} className="new-client">+ Nuevo</p>
                        <p onClick={show} className="new-client">Cargar Vehiculo</p>

                        {informacion.length > 0 ?
                            informacion.map((cliente) => {
                                return <Clientes key={cliente.id_usuario} nombre={cliente.nombre} apellido={cliente.apellido} email={cliente.email} phone={cliente.telefono} vehiculo={cliente.vehiculo} patente={cliente.patente} marca={cliente.marca} />
                            }) : ""}
                    </div>
                </article>

                <article className="container">
                    {showNew && (
                        <Form  />
                    )}

                    {

                        showCar && (
                            <FormVehiculo clickCar={clickCar} />
                        )
                    }


    
                    <Lavado />
                </article>
            </section>
        </Fragment>
    )
}
export default Home;