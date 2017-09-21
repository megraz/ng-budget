import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
liste:string[] = [];

newBudget: string;

  constructor() { }

  ngOnInit() {
  }

  addBudget() {
    this.liste.push(this.newBudget);
  }

  removeBudget(index:number) {
    this.liste.splice(index,1);
  }

}