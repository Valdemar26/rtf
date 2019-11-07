import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { file } from './source.txt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  public rtfText: any = '{ \\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033{ \\fonttbl{ \\f0\\fnil\\fcharset0 Arial; }{\\f1\\fnil\\fcharset0 Tahoma; }{ \\f2\\fnil Arial; }}\'#$D#$A\'{ \\colortbl;\\red255\\green0\\blue0;\\red0\\green128\\blue0; \\red0\\green0\\blue0; }\'#$D#$A\'\\viewkind4\'uc1\\pard\\cf1\\b\\fs28 RED TEXT CAPS BOLD FS14 FF Arial\\par\'#$D#$A\'\\cf2\\ul\\b0\\fs24Green text normal underscore FS12\\b\\par\'#$D#$A\'\\cf3\\ulnone\\b0\\i\\f1\\fs32Blue text cursive FS16 FF Tahoma\\par\'#$D#$A\'\\par\'#$D#$A\'\\i0Bottom\\f2\\fs20\\par\'#$D#$A\'}';

  comment = 'This is a comment\nAnother comment\nOne more\nLast';
  comment2 = 'red255';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.comment = this.comment.replace(/\n/g, '<br />');
    console.log('COMMENT: ', this.comment);

    this.comment2.replace('red255', 'RED');

  }

}
