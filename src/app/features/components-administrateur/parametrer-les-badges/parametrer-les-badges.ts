import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus ,faEdit, faTrash, faMedal} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parametrer-les-badges',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './parametrer-les-badges.html',
  styleUrl: './parametrer-les-badges.css'
})
export class ParametrerLesBadges implements AfterViewInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faMedal = faMedal; 

  private estActiver = false;
  

  @ViewChild('btnAjouter') btnAjouterRef!: ElementRef;
  @ViewChild('Principal') PrincipalRef!: ElementRef;

  ngAfterViewInit():void{

    this.btnAjouterRef.nativeElement.addEventListener('click', ()=> {
      this.estActiver = !this.estActiver;

      if(this.estActiver){
        this.PrincipalRef.nativeElement.style.color='';
        this.PrincipalRef.nativeElement.style.backgroundColor='';
      }else{
        this.PrincipalRef.nativeElement.style.color='';
        this.PrincipalRef.nativeElement.style.backgroundColor='';
      }
    })

    
  }
  

}
