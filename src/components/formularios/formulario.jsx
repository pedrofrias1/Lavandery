import { Fragment} from "react";


function Form({  }) {

    

    const cargarCliente = async (event) => {
        event.preventDefault();
        const form = {
            "nombre": event.target[0].value,
            "apellido": event.target[1].value,
            "email": event.target[2].value,
            "telefono": event.target[3].value,
        }

        await fetch("http://localhost:4005/cargarClientes", {
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






  


    return (
        <Fragment>
            <form className="d-flex gap-1 align-items-center justify-content-center pt-5 ps-4 pe- forms " action="http://localhost:4005/cargarClientes" onSubmit={(event) => cargarCliente(event)}>
                <div className="formularios gap-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="nombre">Nombre *</label>
                        <input type="text" placeholder="Nombre" id="nombre" required />
                        <label htmlFor="apellido">Apellido *</label>
                        <input type="text" placeholder="Apellido" id="apellido" required/>
                        <label htmlFor="email">Email </label>
                        <input type="text" placeholder="example@gmail.com" id="email" />
                        <label htmlFor="phone">Telefono *</label>
                        <input type="text" placeholder="+54387556685" id="phone" required />
                    </div>
                    

                </div>
                <div className="d-flex aling-items-center justify-content-center gap-2">
                    <input className="send" type="submit" value="Cargar" />
                    <input className="send" type="button" value="Cancelar" />
                </div>





            </form>
        </Fragment>
    )
}
export default Form;