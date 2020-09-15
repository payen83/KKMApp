import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"]
})
export class ListPage implements OnInit {
  gameList: Game[] = [
    { id: "py", nama: "Pokémon Yellow", harga: 90, color: "danger" },
    { id: "mmx", nama: "Mega Man X", harga: 75, color: "primary" },
    { id: "tlz", nama: "The Legend of Zelda", harga: 55, color: "secondary" },
    { id: "pm", nama: "Pac-Man", harga: 88, color: "warning" },
    { id: "smw", nama: "Super Mario World", harga: 68, color: "success" }
  ];

  constructor() {}

  ngOnInit() {}

  viewDetails(id: string) {
    console.log("This is game id >> " + id);
    //navigate to game detail page
  }
}
