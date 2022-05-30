import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageServece: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero: Hero | undefined;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageServece.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
