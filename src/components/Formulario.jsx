import { useState } from "react";
import useClima from "../hooks/useClima"


export const Formulario = () => {

    const { busqueda, datosBusqueda, consultarClima } = useClima();
    const [alerta, setAlerta] = useState('')

    const {ciudad, pais} = busqueda;

    const handleSubmit = e => {
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        consultarClima(busqueda)
    }

    return (
        <div className="contenedor">

            {alerta && <p className="alerta">{alerta}</p>}
            <form action=""
                onSubmit={handleSubmit}        
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text"
                        id="ciudad"
                        name="ciudad" 
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select 
                        type="text"
                        id="pais"
                        name="pais" 
                        onChange={datosBusqueda}
                        value={pais}
                    >
                        <option value="">--Selecciona un país--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="ES">España</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="FR">Francia</option>       
                        <option value="DE">Alemania</option>       
                    </select>
                </div>
                <input 
                    type="submit"
                    value='consultar clima'
                />
            </form>
        </div>
    )
}
