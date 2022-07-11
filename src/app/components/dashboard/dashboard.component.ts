import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faCogs, faFileAlt, faGavel, faHandshake, faHome, faSearch, faUserCog, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { interval } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    flag:number=0
    tokenRefreshed:string;
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  //@Input() finishDateString: string = '';
  finishDate: Date = new Date();
  
 
  constructor(private Login:LoginService,
              private router:Router) { }


  ngOnInit(): void {

      // Inicializamos el momento que falta hasta llegara tiempo objetivo con valores en 0
      this.time = {
        days: 0, hours: 0, minutes: 0, seconds: 0
      };
      // Creamos la fecha a partir de la fecha en formato string AAAA-MM-dd HH:mm:ss
      //this.finishDate = new Date(); 
     
      this.start().subscribe(); 
      
     
      //this.fecha();


    }


  updateTime() {


    const dateToken= new Date (this.Login.getTokenDecoded().exp * 1000);
    const dateNow= new Date(Date.now());
    const diffe = dateToken.getTime() - dateNow.getTime();
    const min= Math.floor(diffe / (1000*60))
    if(min < 5 && this.flag==0){
      this.flag=1
      Swal.fire({
        title: 'Deseas mantener tu sesion activa?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, dame más tiempo!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.Login.getTokenRefresh().subscribe(data=>{
          
            localStorage.removeItem('token');
            
            this.Login.setLocalStorage(data.token)
          })
        
        }
      })
      

    }

    if(min < 1){
      this.Login.removeLocalStorage();
      this.router.navigate(['/inicio/login']);
    }
    const now = new Date();
    const diff = dateToken.getTime() - dateNow.getTime();
    

    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    
    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }



  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }

}