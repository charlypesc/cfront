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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
