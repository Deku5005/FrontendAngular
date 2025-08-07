import { Component } from '@angular/core';

@Component({
  selector: 'app-new-contribution',
  imports: [],
  templateUrl: './new-contribution.html',
  styleUrl: './new-contribution.css'
})
export class NewContribution {
  closeModal() {
    // Logique pour fermer la modal
    console.log('Modal fermée');
  }

  onSubmit() {
    // Logique pour soumettre le formulaire
    console.log('Formulaire soumis');
  }

  onFileUpload() {
    // Logique pour téléverser un fichier
    console.log('Téléversement de fichier');
  }

}
