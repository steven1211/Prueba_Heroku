import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css';
import './Componentes/General/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/General/Header';
import AsesorVentanaGeneral from './Componentes/General/AsesorVentanaPrincipal';
import Login from './Componentes/Login/Login';
import NoMatch from './Componentes/General/NoMatch';
import CrearGrupo from './Componentes/Paginas/CrearGrupo';
import CrearRama from './Componentes/Paginas/CrearRama';
import CrearZona from './Componentes/Paginas/CrearZona';
import MenuEstructura from './Componentes/Paginas/MenuEstructuras';
import RegistroMiembro from './Componentes/RegistroMiembro/RegistroMiembro';
import TrasladarMiembro from './Componentes/TrasladarMiembro/TrasladarMiembro';
import TreeContainer from './Componentes/Tree/TreeContainer';
import CambiarNombreGrupo from './Componentes/CambiarNombreGrupo/CambiarNombreGrupo';
import ConsultaMiembroXElemento from './Componentes/Consultas/miembrosXelemento';
import AfiliacionMiembros from './Componentes/AfiliacionMiembros/AfiliacionMiembros';
import AfiliacionPersonal from './Componentes/AfiliacionPersonal/AfiliacionPersonal';
import AsignacionMiembros from './Componentes/AsignacionMiembros/AsignacionMiembros';
import ConsultaGruposRolesXMiembro from './Componentes/GrupoRolesXMiembro/GrupoRolesXMiembro';
import ConsultaCompGrupo from './Componentes/ConsultarComposicionGrupo/ConsultarCompGrupo';
//import ConsultarGrupoResult from './Componentes/ConsultarComposicionGrupo/ConsultarGrupoResult';
import VentanaAsesor from './Componentes/VentanaAsesor/VentanaAsesor';


function App() {
    return (
    <Router>
      <div>
        <Switch>    
          <Route exact path="/" component={Login}/>;
          <Route exact path="/ventanaAsesor" component={VentanaAsesor}/> 
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/registroMiembro" component={RegistroMiembro}/> 
          <Route exact path="/trasladoMiembro" component={TrasladarMiembro}/> 
          <Route exact path="/creacionZona" component={CrearZona}/> 
          <Route exact path="/creacionRama" component={CrearRama}/> 
          <Route exact path="/creacionGrupo" component={CrearGrupo}/> 
          <Route exact path="/estructura" component={MenuEstructura}/> 
          <Route exact path="/cambiarNombreGrupo" component={CambiarNombreGrupo}/> 
          <Route exact path="/arbolEstructural" component={TreeContainer}/> 
          {/*                       PENDIENTES          */}            
          {/*
          <Route path="/contacto" component={Contacto}/>
          */}
          <Route path="/afiliacionMiembros" component={AfiliacionMiembros}/>
          <Route path="/afiliacionPersonal" component={AfiliacionPersonal}/>
          <Route path="/asignacionMiembros" component={AsignacionMiembros}/>


          {/*                       Consultas             */}
          <Route path="/consultaMiembrosPorElemento" component={ConsultaMiembroXElemento}/> 
          <Route path="/consultaGruposPorMiembro" component={ConsultaGruposRolesXMiembro}/> 
          <Route path="/consultaComposicionGrupo" component={ConsultaCompGrupo}/> 

          {/*                        Creacion de estructuras */}
          <Route path="/crearGrupo" component={CrearGrupo}/> 
          <Route path="/crearZona" component={CrearZona}/> 
          <Route path="/crearRama" component={CrearRama}/> 
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
    );
  }
export default App;
