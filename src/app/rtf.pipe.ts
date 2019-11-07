import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtfToHtml'
})
export class RtfToHtmlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    // value.replace(/ansi/, /'TEST'/);  //  \
    console.log('SPLIT: ', value.split(/'#\$D#\$A'/));

    // console.log('NEW RTF: ', value, typeof value, value.length);
    // value = value.split(/'#\$D#\$A'/);
    value = value
      .replace(/'#\$D#\$A'/g, '<br/> <br/>')
      // .replace(/'\\n'/g, '<br/>')
      .replace(/fs/g, 'font-size: ');
    return value;
  }

  /**
   *   #$D#$A   - новий рядок
   *   RED TEXT CAPS BOLD FS14 FF Arial  - текст
   *
   */

}
