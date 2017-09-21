import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input:boolean = false;
  gbudget = {
    date: '',
    description: '',
    montant: '',
    categorie: ''
  };

  constructor(){}
  ngOnInit() {
  }

  afficher() {
    console.log(this.gbudget);
  }
}
