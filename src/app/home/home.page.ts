import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  myName: string = "Amirul";
  myAge: number = 25;
  today: Date = new Date();

  constructor(
    private router: Router
  ) {}

  changeAge() {
    this.myAge = this.myAge + 1;
  }

  navListPg() {
    //router declare inside constructor
    this.router.navigateByUrl("/list")
  }
}
