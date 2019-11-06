import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtfToHtml'
})
export class RtfToHtmlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('RTF: ', value);

    value.replace(/ansi/, /'TEST'/);
    const z = value.match(/'#$D#$A'/g || []).length;

    console.log('NEW RTF: ', value, typeof value, value.length, z);
    return value;
  }

}
