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
    {id: 1, titre: "Projet bbb", description: "Description A", niveau: "DEBUTANT", leguer: "Oui"},
    {id: 2, titre: "Projet B", description: "Description B", niveau: "DEBUTANT", leguer: "Non"},
    {id: 3, titre: "Projet C", description: "Description B", niveau: "DEBUTANT", leguer: "Oui"},
    {id: 4, titre: "Projet D", description: "Description B", niveau: "DEBUTANT", leguer: "Non"},
    {id: 5, titre: "Projet E", description: "Description B", niveau: "DEBUTANT", leguer: "Oui"},
    {id: 6, titre: "Projet F", description: "Description B", niveau: "DEBUTANT", leguer: "Non"},
    {id: 7, titre: "Projet G", description: "Description B", niveau: "DEBUTANT", leguer: "Oui"},
    {id: 8, titre: "Projet H", description: "Description B", niveau: "DEBUTANT", leguer: "Non"},
    {id: 9, titre: "Projet I", description: "Description B", niveau: "DEBUTANT", leguer: "Oui"},
    {id: 10, titre: "Projet J", description: "Description B", niveau: "DEBUTANT", leguer: "Non"}
  ];
  deleteRow(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette ligne ?')) {
      this.data = this.data.filter(item => item.id !== id);
    }
  }
}
