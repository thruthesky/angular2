import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.ts';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/hero/heroes.component.css'],
  templateUrl: 'app/hero/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    private title: string = 'Tour of heroes';
    private heroes: Hero[];
    private selectedHero: Hero;

    constructor(private router: Router, private heroService: HeroService) { }
    getHeroes() {
      this.heroService.getHeroes().then( x => this.heroes = x );
    }

    ngOnInit() {
      this.getHeroes();
    }
    
    onSelect( myhero:Hero ) {
        this.selectedHero = myhero;
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
