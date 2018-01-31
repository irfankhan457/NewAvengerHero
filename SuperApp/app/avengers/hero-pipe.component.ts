import  { PipeTransform, Pipe } from 'angular2/core';
import { IHero } from './hero';

@Pipe({
    name:'heroFilter'
})

export class HeroFilterPipe implements PipeTransform{
    transform(value: IHero[], args: string[]): IHero[] {
        let filter:string = args[0] ? args[0].toLocaleLowerCase():null;
        return filter ? value.filter((hero:IHero) =>
        hero.heroName.toLocaleLowerCase().indexOf(filter) != -1):value;
    }
}