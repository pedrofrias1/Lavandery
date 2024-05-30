import { Fragment } from "react";
import lav from "../../lavados.json"
import HeaderLavado from "./navLav";

function Lavado() {
    const la = lav;


    const check = (e) => {
        console.log(e.target.name);
    }



    return (
        <Fragment>
           <HeaderLavado/>
           
            <section className="container ">
                <div>
                    <h4>Cliente</h4>
                    <input type="text" />
                </div>
                <div>
                    <h4>Auto</h4>
                    <input type="text" />
                </div>

                <div>
                    <h5 className="underline">Servicios</h5> {/* span precio total */}

                    {
                        la.length > 0 ?
                            la.map((la) => {

                                return <div className="d-flex align-items-center justify-content-around text-center gap-2 ">
                                    <span>{la.lavado} </span>
                                    <span>${la.precio} </span>
                                    <input type="checkbox" name="simple" id="simple" onClick={(e) => check(e)} />

                                </div>


                            }) : ""
                    }

                </div>
            </section>
        </Fragment>
    )
}
export default Lavado;