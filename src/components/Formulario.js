import React, {useState} from 'react';

function Formulario({datosConsulta}){

//state del componente
//busqueda = state inicial, guardarBusqueda = this.setState
const [busqueda, guardarBusqueda] = useState({
    ciudad : '',
    país : ''
});

const handleChange = e => {
//cambiar el state
guardarBusqueda({
    ...busqueda,
    [e.target.name] : e.target.value
})
};

const consultarClima = e =>{
  e.preventDefault();

  //pasar la busqueda del usuario hacia el componente principal
  datosConsulta(busqueda);
};

return(
<form
onSubmit={consultarClima}>
  <div className="input-field col s12">
   <input
   type="text"
   name="ciudad"
   id="ciudad"
   onChange={handleChange}
   />
   <label htmlFor="ciudad">Ciudad: </label>
  </div>

  <div className="input-field col s12">
    <select onChange={handleChange} name="país">
        <option value="">Selecciona un país</option>
        <option value="AR">Argentina</option>
        <option value="BO">Bolivia</option>
        <option value="BR">Brasil</option>
        <option value="CO">Colombia</option>
        <option value="CL">Chile</option>
        <option value="EC">Ecuador</option>
        <option value="GY">Guyana</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Perú</option>
        <option value="SR">Surinam</option>
        <option value="UY">Uruguay</option>
        <option value="VE">Venezuela</option>
    </select>
  </div>

  <div className="input-field col s12">
  <input type="submit" className="waves-effect waves-light btn-large btn-block 
  deep-purple lighten-5" value="Buscar Clima"/>
  </div>
</form>
)
}

export default Formulario;