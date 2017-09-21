export class Operation{
    id:number;
    date:Date;
    description:string;
    montant:number;
    categorie:string;

   constructor(date:Date, description:string,  montant:number, categorie:string, id?:number){
       this.id=id;
       this.date = date;
       this.description = description;
       this.montant = montant;
       this.categorie = categorie;
    }
}
