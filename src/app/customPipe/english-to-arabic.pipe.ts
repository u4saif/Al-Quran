import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'englishToArabic',
})
export class EnglishToArabicPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (typeof value == 'number') {
      
      var id = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];
      return value.toString().replace(/[0-9]/g, function (w) {
        return id[+w];
      });
    }
    return ''
  }
}
