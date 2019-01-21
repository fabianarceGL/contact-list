import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpperCaseLetter'
})
export class FirstUpperCaseLetterPipe implements PipeTransform {

  transform(value: string): any {
    if(value != null) {
      const lowerCaseString = value.toLowerCase();
      const charsList = lowerCaseString.split('');
      charsList[0] = charsList[0].toUpperCase();
      return charsList.join('');
    }
  }
}
