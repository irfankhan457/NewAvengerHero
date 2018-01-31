import { Component } from 'angular2/core';
import { IHero } from './hero';
import { HeroFilterPipe } from './hero-pipe.component';


@Component({
    selector:'super-heroes',
    templateUrl: 'app/avengers/hero-list.component.html',
    pipes:[HeroFilterPipe]
})
export class HeroListComponent {
        heroListTitle = "HERO LIST";
        imageWidth:number=100;
        imageMargin:number=2;
        showImage:boolean=false;
        listFilter:string="m";
        toggleImage():void{
            this.showImage =!this.showImage;
        }

        heroes: IHero[]=[
            {
                "heroId": 1,
                "heroName": "Captain America",
                "realName": "Steven Rogers",
                "heroStrength": "Shield",
                "heroNature": "Confident",
                "imageUrl": "./app/assets/images/cap.jpg"
            },
            {
                 "heroId": 2,
                "heroName": "Iron Man",
                "realName": "Tony Stark",
                "heroStrength": "Suit and Jarvis",
                "heroNature": "Stylish",
                "imageUrl": "./app/assets/images/IronMan.jpg"
            },
            {
                  "heroId": 3,
                "heroName": "Thor",
                "realName": "Thor",
                "heroStrength": "Hammer",
                "heroNature": "Confused",
                "imageUrl": "./app/assets/images/thor.jpg"
            },
            {
                "heroId": 4,
                "heroName": "Hulk",
                "realName": "Bruce Banner",
                "heroStrength": "Size",
                "heroNature": "Angry",
                "imageUrl": "./app/assets/images/hulk.jpg"
            },
            {
                "heroId": 5,
                "heroName": "Black Widow ",
                "realName": "Agent Romanoff ",
                "heroStrength": "Mind Games",
                "heroNature": "Smart",
                "imageUrl": "./app/assets/images/blackwidow.jpg"
            },
             {
                "heroId": 6,
                "heroName": "Agent Fury",
                "realName": "Nick Fury",
                "heroStrength": "Nothing",
                "heroNature": "Serious",
                "imageUrl": "./app/assets/images/fury.jpg"
            }
        ];
}