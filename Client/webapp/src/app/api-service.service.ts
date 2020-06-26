import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    ) {
 
  }

  public getValues(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/github/search/${name}`);
  }
}
