import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//interceptor 
import{ AddTokenInterceptor } from '../app/helpers/add-token.interceptor'

//modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SimpleModalModule } from 'ngx-simple-modal';
// componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoCuestionarioComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { CuestionarioComponent } from './components/dashboard/cuestionarios/cuestionario/cuestionario.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component';
import { AdministracionComponent } from './components/dashboard/administracion/administracion.component';
import { IngresosComponent } from './components/dashboard/administracion/ingresos/ingresos.component';
import { PanelBienvenidaComponent } from './components/dashboard/panel-bienvenida/panel-bienvenida.component';
import { FuncionarioComponent } from './components/dashboard/administracion/ingresos/funcionario/funcionario.component';
import { EstudianteComponent } from './components/dashboard/administracion/ingresos/estudiante/estudiante.component';
import { EstablecimientoComponent } from './components/dashboard/administracion/ingresos/establecimiento/establecimiento.component';
import { UsuarioComponent } from './components/dashboard/administracion/ingresos/usuario/usuario.component';
import { RegistroComponent } from './components/dashboard/registro/registro.component';
import { RegPasoUnoComponent } from './components/dashboard/registro/reg-paso-uno/reg-paso-uno.component';
import { RegPasoDosComponent } from './components/dashboard/registro/reg-paso-dos/reg-paso-dos.component';
import { BusquedaRutComponent } from './shared/busqueda-rut/busqueda-rut.component';
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
import { VisitaDomicialiariaComponent } from './components/dashboard/visita-domicialiaria/visita-domicialiaria.component';
import { MiEstablecimientoComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/mi-establecimiento.component';
import { TematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/tematicas.component';
import { PanelComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/panel/panel.component';
import { PanelAdminComponent } from './components/dashboard/administracion/panel-admin/panel-admin.component';
import { PanelTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/panel-tematicas/panel-tematicas.component';
import { VerTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/ver-tematicas/ver-tematicas.component';
import { NuevaTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/nueva-tematicas/nueva-tematicas.component';
import { EditarTematicasComponent } from './components/dashboard/administracion/ingresos/mi-establecimiento/tematicas/editar-tematicas/editar-tematicas.component';
import { ReuPasoUnoComponent } from './components/dashboard/reuniones-actas/reu-paso-uno/reu-paso-uno.component';
import { ReuPasoDosComponent } from './components/dashboard/reuniones-actas/reu-paso-dos/reu-paso-dos.component';
import { TematicaCompComponent } from './shared/tematica-comp/tematica-comp.component';
import { ProtocoloCompComponent } from './shared/protocolo-comp/protocolo-comp.component';
import { RutManualComponent } from './shared/rut-manual/rut-manual.component';
import { ReuPasoTresComponent } from './components/dashboard/reuniones-actas/reu-paso-tres/reu-paso-tres.component';
import { DenunciaPasoTresComponent } from './components/dashboard/denuncia/denuncia-paso-tres/denuncia-paso-tres.component';
import { PanelEstudianteComponent } from './components/dashboard/administracion/ingresos/estudiante/panel-estudiante/panel-estudiante.component';
import { NuevoEstudianteComponent } from './components/dashboard/administracion/ingresos/estudiante/nuevo-estudiante/nuevo-estudiante.component';
import { EditarEstudianteComponent } from './components/dashboard/administracion/ingresos/estudiante/editar-estudiante/editar-estudiante.component';
import { PanelEstablecimientoComponent } from './components/dashboard/administracion/ingresos/establecimiento/panel-establecimiento/panel-establecimiento.component';
import { EditarEstablecimientoComponent } from './components/dashboard/administracion/ingresos/establecimiento/editar-establecimiento/editar-establecimiento.component';
import { NuevoEstablecimientoComponent } from './components/dashboard/administracion/ingresos/establecimiento/nuevo-establecimiento/nuevo-establecimiento.component';
import { NuevoFuncionarioComponent } from './components/dashboard/administracion/ingresos/funcionario/nuevo-funcionario/nuevo-funcionario.component';
import { EditarFuncionarioComponent } from './components/dashboard/administracion/ingresos/funcionario/editar-funcionario/editar-funcionario.component';
import { PanelFuncionarioComponent } from './components/dashboard/administracion/ingresos/funcionario/panel-funcionario/panel-funcionario.component';
import { NuevoUsuarioComponent } from './components/dashboard/administracion/ingresos/usuario/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/dashboard/administracion/ingresos/usuario/editar-usuario/editar-usuario.component';
import { PanelUsuarioComponent } from './components/dashboard/administracion/ingresos/usuario/panel-usuario/panel-usuario.component';
import { SeguimientoComponent } from './components/dashboard/seguimiento/seguimiento.component';
import { IngresarSeguimientoComponent } from './components/dashboard/seguimiento/ingresar-seguimiento/ingresar-seguimiento.component';
import { PanelSeguimientoComponent } from './components/dashboard/seguimiento/panel-seguimiento/panel-seguimiento.component';
import { EditarSeguimientoComponent } from './components/dashboard/seguimiento/editar-seguimiento/editar-seguimiento.component';
import { BusqReuPasoTresComponent } from './components/dashboard/busqueda/busq-reu-paso-tres/busq-reu-paso-tres.component';
import { BusqDenunPasoTresComponent } from './components/dashboard/busqueda/busq-denun-paso-tres/busq-denun-paso-tres.component';
import { BusqTabRegComponent } from './components/dashboard/busqueda/busq-tab-reg/busq-tab-reg.component';
import { BusqTabReunComponent } from './components/dashboard/busqueda/busq-tab-reun/busq-tab-reun.component';
import { BusqTabDenunComponent } from './components/dashboard/busqueda/busq-tab-denun/busq-tab-denun.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    CuestionarioComponent,
    ListCuestionariosComponent,
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestionarioComponent,
    AdministracionComponent,
    IngresosComponent,
    PanelBienvenidaComponent,
    FuncionarioComponent,
    EstudianteComponent,
    EstablecimientoComponent,
    UsuarioComponent,
    RegistroComponent,
    RegPasoUnoComponent,
    RegPasoDosComponent,
    BusquedaRutComponent,
    BusquedaComponent,
    BusqPasoUnoComponent,
    BusqPasoDosComponent,
    BusqRegPasoTresComponent,
    ReunionesActasComponent,
    ProtocolosComponent,
    NuevoProtocoloComponent,
    VerProtocolosComponent,
    PanelProtocoloComponent,
    EditarProtocolosComponent,
    DenunciaComponent,
    DenunciaPasoUnoComponent,
    DenunciaPasoDosComponent,
    DenunciaBuscadorComponent,
    ProgramasComponent,
    VisitaDomicialiariaComponent,
    MiEstablecimientoComponent,
    TematicasComponent,
    PanelComponent,
    PanelAdminComponent,
    PanelTematicasComponent,
    VerTematicasComponent,
    NuevaTematicasComponent,
    EditarTematicasComponent,
    ReuPasoUnoComponent,
    ReuPasoDosComponent,
    TematicaCompComponent,
    ProtocoloCompComponent,
    RutManualComponent,
    ReuPasoTresComponent,
    DenunciaPasoTresComponent,
    PanelEstudianteComponent,
    NuevoEstudianteComponent,
    EditarEstudianteComponent,
    PanelEstablecimientoComponent,
    EditarEstablecimientoComponent,
    NuevoEstablecimientoComponent,
    NuevoFuncionarioComponent,
    EditarFuncionarioComponent,
    PanelFuncionarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    PanelUsuarioComponent,
    SeguimientoComponent,
    IngresarSeguimientoComponent,
    PanelSeguimientoComponent,
    EditarSeguimientoComponent,
    BusqReuPasoTresComponent,
    BusqDenunPasoTresComponent,
    BusqTabRegComponent,
    BusqTabReunComponent,
    BusqTabDenunComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxPermissionsModule.forRoot(),
    SimpleModalModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
