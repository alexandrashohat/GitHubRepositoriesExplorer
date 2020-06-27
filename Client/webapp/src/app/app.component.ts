import { Component } from '@angular/core';
import {ApiServiceService} from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  constructor(
    private apiService: ApiServiceService
  ) {
    this.apiService.getValues('aspnet').subscribe(v => {
      console.log('sfsdf', v);
      this.apiService.setBookmark((v as any).items[0]).subscribe(a => {
        console.log('book set:', a);
        this.apiService.getBookmark().subscribe(b => console.log('books get', b));
      });
    });
  }


}
