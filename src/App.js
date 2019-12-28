import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

//state principal
const [ciudad, guardarCiudad] = useState('');
const [país, guardarPaís] = useState('');
const [error, guardarError] = useState(false);
const [resultado, guardarResultado] = useState({});

useEffect(()=>{

  //prevenir ejecucion
  if (ciudad === '') return;

  const consultarAPI = async () =>{
 
    const appId='664dcc26358034c4a468edbdb1e18dcf'; 
     
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${país}&appid=${appId}`;
    
    //consultar a la url
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    guardarResultado(resultado);
    };
consultarAPI();
}, [ ciudad , país]);


const datosConsulta = datos => {
//validad los campos
if (datos.ciudad === '' || datos.país === ''){
//error
guardarError(true);
return;
}

//ciudad y país existen, agregarlos al state
guardarCiudad(datos.ciudad);
guardarPaís(datos.país);
guardarError(false);
};



let componente;
//cargar el componente condicionalmente
if(error){
componente = <Error mensaje='Ambos campos son oligatorios'/>
}else if (resultado.cod === "404"){
  componente = <Error mensaje='La ciudad no existe en ese país'/>
}
else {
componente = <Clima
resultado={resultado}
/>;
}

return (
<div className="App">
<Header
titulo='Clima React'
/>

<div className="contenedor-form">
  <div className="container">
    <div className="row">
      <div className="col s12 m6">
      <Formulario
      datosConsulta = {datosConsulta}/>
      </div>
      <div className="col s12 m6">
        {componente}
      </div>
    </div>
  </div>
</div>
</div>
);
}

export default App;
