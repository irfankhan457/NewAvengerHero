System.register(['angular2/core', './hero-pipe.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_pipe_component_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_pipe_component_1_1) {
                hero_pipe_component_1 = hero_pipe_component_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent() {
                    this.heroListTitle = "HERO LIST";
                    this.imageWidth = 100;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = "m";
                    this.heroes = [
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
                HeroListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'super-heroes',
                        templateUrl: 'app/avengers/hero-list.component.html',
                        pipes: [hero_pipe_component_1.HeroFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map