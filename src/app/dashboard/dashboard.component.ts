import {Component} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";
import {MoECapacitorCore} from "capacitor-moengage-core";
import {Echo} from "echo-plugin";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[] = [];
  tag = "DashboardComponent"

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
