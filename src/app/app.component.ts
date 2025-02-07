import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from './client/pokemon.service';
import { Pokemon } from 'src/model/pokemon';
import { HotkeysService } from '@ngneat/hotkeys';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valentine';
  showValentine = false;
  showBack= false;
  constructor(private pokemonService: PokemonService, private hotkeys: HotkeysService, public dataService: DataService) {
  }
  ngOnInit() {


  }

  back(){
    this.showValentine = false;
    this.showBack = false;
  }
  show() {
    setTimeout(() => {
      this.showBack = true;
    }, 2000);
    this.showValentine = true;
  }

}
