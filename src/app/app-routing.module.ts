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
import { DenunciaComponent } from './components/dashboard/denuncia/denuncia.component';
import { DenunciaPasoUnoComponent } from './components/dashboard/denuncia/denuncia-paso-uno/denuncia-paso-uno.component';
import { DenunciaPasoDosComponent } from './components/dashboard/denuncia/denuncia-paso-dos/denuncia-paso-dos.component';
import { DenunciaBuscadorComponent } from './components/dashboard/denuncia/denuncia-buscador/denuncia-buscador.component';
import { ProgramasComponent } from './components/dashboard/programas/programas.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { VisitaDomicialiariaComponent } from './components/dashboard/visita-domicialiaria/visita-domicialiaria.component';
import { PanelAdminComponent } from './components/dashboard/administracion/panel-admin/panel-admin.component';
import { MiEstablecimientoComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/mi-establecimiento.component';
import { Tematicas } from './models/tematicas';
import { PanelComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/panel/panel.component';
import { TematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/tematicas.component';
import { PanelTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/panel-tematicas/panel-tematicas.component';
import { VerTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/ver-tematicas/ver-tematicas.component';
import { EditarTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/editar-tematicas/editar-tematicas.component';
import { NuevaTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/nueva-tematicas/nueva-tematicas.component';
import { ReuPasoUnoComponent } from './components/dashboard/reuniones-actas/reu-paso-uno/reu-paso-uno.component';
import { ReuPasoDosComponent } from './components/dashboard/reuniones-actas/reu-paso-dos/reu-paso-dos.component';
import { ReuPasoTresComponent } from './components/dashboard/reuniones-actas/reu-paso-tres/reu-paso-tres.component';


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
      { path:'denuncia', component:DenunciaComponent, children:[
          { path: 'denunciapasouno', component: DenunciaPasoUnoComponent },
          { path: 'denunciapasodos', component: DenunciaPasoDosComponent },
          { path: 'denunciabuscador', component: DenunciaBuscadorComponent }
      ]},
      {path:'protocolos', component:ProtocolosComponent,children:[
        { path:'panelprotocolo', component: PanelProtocoloComponent},
        {path:'nuevoprotocolo', component:NuevoProtocoloComponent},
        {path:'verprotocolos', component:VerProtocolosComponent},
        {path:'editarprotocolos/:numIdProtocolo', component:EditarProtocolosComponent}
      ]},
      { path: 'visitas', component: VisitaDomicialiariaComponent },
      { path: 'reuniones', component: ReunionesActasComponent, children:[
        { path:'reupasouno', component: ReuPasoUnoComponent },
        { path: 'reupasodos/:reunionId', component: ReuPasoDosComponent },
        { path: 'reupasotres/:reunionId', component: ReuPasoTresComponent }
      ] 
      },
      { path: 'programas', component:ProgramasComponent },
      { path: 'panelBienvenida', component: PanelBienvenidaComponent }, 
      { path: 'administracion', component: AdministracionComponent, children:[
        { path:'paneladm', component: PanelAdminComponent },
        { path: 'funcionario', component: FuncionarioComponent },
        { path: 'ingresos', component: IngresosComponent },
        { path: 'estudiante', component: EstudianteComponent },
        { path: 'establecimiento', component: EstablecimientoComponent},
        { path: 'usuarios', component: UsuarioComponent},
        { path: 'miestablecimiento', component: MiEstablecimientoComponent,children:[
          { path:'paneladm', component:PanelComponent},
          { path:'tematicas', component:TematicasComponent,children:[
            {path:'paneltematicas', component:PanelTematicasComponent},
            { path:'vertematicas', component:VerTematicasComponent },
            { path:'editartematicas/:numIdTematica', component: EditarTematicasComponent },
            { path:'nuevatematica', component:NuevaTematicasComponent }
          ]},
        ] },
        
      ]},
  ]},
  { path: '**', redirectTo: '/inicio/bienvenidos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

