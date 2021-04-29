import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  data: Employee[];
  columns: string[];

  constructor() {
    this.data = this.employeers
    this.columns = ["photo","name", "active"]
   }

  ngOnInit(): void {
  }

   employeers: Employee[] = [
    {
      id: 0,
      name: "Patricia Boyle",
      email: "patricia.boyle@dio.com",
      photo: "/assets/img/cat1.png",
      role: "CEO",
      departament: "Recursos Humanos",
      active: true,
      startedAt: this.getRandomDate()
    },
    {
      id: 1,
      name: "Nathan Brooks",
      email: "nathan.brooks@dio.com",
      photo: "/assets/img/cat2.png",
      role: "Gestor de Processos",
      departament: "Marketing",
      active: true,
      startedAt: this.getRandomDate()
  
    },
    {
      id: 2,
      name: "Manish Wabes",
      email: "manish.wabes@dio.com",
      photo: "/assets/img/cat3.png",
      role: "Desenvolvedor",
      departament: "Tecnologia",
      active: true,
      startedAt: this.getRandomDate()
  
    },
    {
      id: 3,
      name: "Jasmine Frank",
      email: "jasmine.frank@dio.com",
      photo: "/assets/img/cat4.png",
      role: "Comprador",
      departament: "Financeiro",
      active: true,
      startedAt: this.getRandomDate()
  
    },
    {
      id: 4,
      name: "Charles Stone",
      email: "charles.stone@dio.com",
      photo: "/assets/img/cat5.png",
      role: "Gerente de Controladoria",
      departament: "Logística",
      active: false,
      startedAt: this.getRandomDate()
  
    },
  ]
   getRandomDate() {
    let from: any = new Date(2018, 1, 1);
    let to: any = new Date(2021, 4, 1);
    return new Date(+from + Math.random() * (to - from));
  }

}
