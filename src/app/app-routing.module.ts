import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { NuevoCuestionarioComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { CuestionarioComponent } from './components/dashboard/cuestionarios/cuestionario/cuestionario.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component';
import { PanelBienvenidaComponent } from './components/dashboard/panel-bienvenida/panel-bienvenida.component'
import { AdministracionComponent } from './components/dashboard/administracion/administracion.component';
import { IngresosComponent } from './components/dashboard/administracion/ingresos/ingresos.component';
import { FuncionarioComponent } from './components/dashboard/administracion/ingresos/funcionario/funcionario.component';
import { EstudianteComponent } from './components/dashboard/administracion/ingresos/estudiante/estudiante.component';
import { EstablecimientoComponent } from './components/dashboard/administracion/ingresos/establecimiento/establecimiento.component';
import { Usuario } from './models/usuario';
import { UsuarioComponent } from './components/dashboard/administracion/ingresos/usuario/usuario.component';
import { RegPasoUnoComponent } from './components/dashboard/registro/reg-paso-uno/reg-paso-uno.component';
import { RegistroComponent } from './components/dashboard/registro/registro.component';
import { RegPasoDosComponent } from './components/dashboard/registro/reg-paso-dos/reg-paso-dos.component';
import { BusquedaComponent } from './components/dashboard/busqueda/busqueda.component';
import { BusqPasoUnoComponent } from './components/dashboard/busqueda/busq-paso-uno/busq-paso-uno.component';
import { BusqPasoDosComponent } from './components/dashboard/busqueda/busq-paso-dos/busq-paso-dos.component';
import { BusqRegPasoTresComponent } from './components/dashboard/busqueda/busq-reg-paso-tres/busq-reg-paso-tres.component';
import { ReunionesActasComponent } from './components/dashboard/reuniones-actas/reuniones-actas.component';
import { ProtocolosComponent } from './components/dashboard/protocolos/protocolos.component';
import { NuevoProtocoloComponent } from './components/dashboard/protocolos/nuevo-protocolo/nuevo-protocolo.component';
import { VerProtocolosComponent } from './components/dashboard/protocolos/ver-protocolos/ver-protocolos.component';
import { PanelProtocoloComponent } from './components/dashboard/protocolos/panel-protocolo/panel-protocolo.component';
import { EditarProtocolosComponent } from './components/dashboard/protocolos/editar-protocolos/editar-protocolos.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio/login', pathMatch: 'full' },
  { path:'inicio', component: InicioComponent, children: [
    { path: 'bienvenidos', component: BienvenidaComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'listCuestionarios', component:ListCuestionariosComponent },
    { path: 'ingresarNombre' , component: IngresarNombreComponent},
    { path: 'pregunta' , component: PreguntaComponent},
    { path: 'respuestaCuestionario', component: RespuestaCuestionarioComponent }
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: '',component: PanelBienvenidaComponent },
      { path: 'cambiarPassword', component: CambiarPasswordComponent },
      { path:'verCuestionario/:id', component: CuestionarioComponent },
      { path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
        { path: 'pasoUno', component: PasoUnoComponent },
        { path: 'pasoDos', component:PasoDosComponent }
      ]},
      {path:'registro', component:RegistroComponent, children:[
        { path:'regPasoUno', component:RegPasoUnoComponent },
        { path: 'regPasoDos', component:RegPasoDosComponent }
      ]},
      {path:'busqueda', component:BusquedaComponent, children:[
        { path:'buspasouno', component:BusqPasoUnoComponent },
        { path:'buspasodos/:rut', component:BusqPasoDosComponent},
        { path: 'buspasodos', component:BusqPasoDosComponent },
        { path: 'busqregpasotres/:numReg/:ruta', component:BusqRegPasoTresComponent }
      ]},
      {path:'protocolos', component:ProtocolosComponent,children:[
        { path:'panelprotocolo', component: PanelProtocoloComponent},
        {path:'nuevoprotocolo', component:NuevoProtocoloComponent},
        {path:'verprotocolos', component:VerProtocolosComponent},
        {path:'editarprotocolos/:numIdProtocolo', component:EditarProtocolosComponent}
      ]},
      { path: 'reuniones', component: ReunionesActasComponent },
      { path: 'panelBienvenida', component: PanelBienvenidaComponent }, 
      { path: 'administracion', component: AdministracionComponent},
      { path: 'administracion/ingresos', component: IngresosComponent},
      { path: 'administracion/ingresos/funcionario', component: FuncionarioComponent},
      { path: 'administracion/ingresos/estudiante', component:EstudianteComponent },
      { path: 'administracion/ingresos/establecimiento', component:EstablecimientoComponent },
      { path: 'administracion/ingresos/usuario', component:UsuarioComponent},

      
  ]},
  { path: '**', redirectTo: '/inicio/bienvenidos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

