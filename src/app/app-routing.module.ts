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


const routes: Routes = [
  { path: '', redirectTo: '/inicio/bienvenidos', pathMatch: 'full' },
  { path:'inicio', component: InicioComponent, children: [
    { path: 'bienvenidos', component: BienvenidaComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'listCuestionarios', component:ListCuestionariosComponent }
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: CuestionariosComponent },
      { path: 'cambiarPassword', component: CambiarPasswordComponent },
      { path:'verCuestionario/:id', component: CuestionarioComponent },
      { path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
        { path: 'pasoUno', component: PasoUnoComponent },
        { path: 'pasoDos', component:PasoDosComponent }
      ]}
  ]},
  { path: '**', redirectTo: '/inicio/bienvenidos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

