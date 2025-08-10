import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Sidebar} from "../sidebar/sidebar";
import {Header} from "../header/header";

@Component({
  selector: 'app-idee-de-projet',
  imports: [CommonModule, Sidebar, Header],
  templateUrl: './idee-de-projet.html',
  styleUrl: './idee-de-projet.css'
})
export class IdeeDeProjet {
  data = [
    {id: 1, titre: "Projet bbb", description: "Description A",dateCreation: "02/05/2025",nivaux:"Intermedaire", contributeurs: "Mamoutou, Sangaré"},
    {id: 2, titre: "Projet bbb", description: "Description A",dateCreation: "02/05/2025",nivaux:"Intermedaire", contributeurs: "Mamoutou, Sangaré"},
    {id: 3, titre: "Projet bbb", description: "Description A",dateCreation: "02/05/2025",nivaux:"Intermedaire", contributeurs: "Mamoutou, Sangaré"},
    {id: 4, titre: "Projet bbb", description: "Description A",dateCreation: "02/05/2025",nivaux:"Intermedaire", contributeurs: "Mamoutou, Sangaré"},
    {id: 5, titre: "Projet bbb", description: "Description A",dateCreation: "02/05/2025",nivaux:"Intermedaire", contributeurs: "Mamoutou, Sangaré"},
    {id: 6, titre: "Projet bbb", description: "Description A",dateCreation: "02/05/2025",nivaux:"Intermedaire", contributeurs: "Mamoutou, Sangaré"}

  ];
  deleteRow(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette ligne ?')) {
      this.data = this.data.filter(item => item.id !== id);
    }
  }
}
