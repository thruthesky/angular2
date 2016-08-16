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
    private addingHero: boolean = false;
    private error: boolean = false;

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
    addHero() {
      this.addingHero = true;
      this.selectedHero = null;
    }
    close(savedHero: Hero) {
  this.addingHero = false;
  if (savedHero) { this.getHeroes(); }
}
deleteHero(hero: Hero, event: any) {
  event.stopPropagation();
  this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
}

}

