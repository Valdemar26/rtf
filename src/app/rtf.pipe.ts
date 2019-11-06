import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtfToHtml'
})
export class RtfToHtmlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('RTF: ', value);

    // value.replace(/ansi/, /'TEST'/);  //  \
    console.log('SPLIT: ', value.split('/\'#\\$D#\\$A\'/'));
    console.log(value.match(/'#\$D#\$A'/g || []).length);

    console.log('NEW RTF: ', value, typeof value, value.length);
    return value;
  }

  /**
   *   #$D#$A   - новий рядок
   *   RED TEXT CAPS BOLD FS14 FF Arial  - текст
   *
   */

}
