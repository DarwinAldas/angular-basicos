import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent   {
heroes: string[]=['Ironman','Hulk','CapAmerica','Thor','Batman'];
herBorrado:string="";
borrarHeroe(){
  console.log('Borrando...');
  this.herBorrado=this.heroes.shift()||''; 
  console.log(this.herBorrado);
}





}
