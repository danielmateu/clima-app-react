

export const Formulario = () => {
    return (
        <div className="contenedor">
            <form action="">
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text"
                        id="ciudad"
                        name="ciudad" 
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select 
                        type="text"
                        id="pais"
                        name="pais" 
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
