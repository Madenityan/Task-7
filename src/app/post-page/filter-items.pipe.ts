import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})

export class FilterItemsPipe implements PipeTransform {
  transform(value: any[], titleArticles: string): any {
    console.log(value, titleArticles);
    if (titleArticles && titleArticles.length) {
      return value.filter(val => {
        return val.title.toLowerCase().indexOf(titleArticles.toLowerCase()) > -1;
      });
    } else {
      return value;
    }
  }
}
