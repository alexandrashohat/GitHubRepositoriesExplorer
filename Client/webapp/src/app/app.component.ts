import { Component } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import { ThrowStmt } from '@angular/compiler';

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
    this.apiService.getValues('aspnet').subscribe(v => console.log('sfsdf', v));
  }
}
