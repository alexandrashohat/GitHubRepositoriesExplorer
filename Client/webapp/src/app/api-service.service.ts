import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment';
import { Observable } from 'rxjs';


export class GitHubSearchResponse
{
    total_count: number;
    incomplete_results: boolean;
    items: GitHubSearchResponseItem[];
}

export class GitHubSearchResponseItem
{
    id: number;
    name: string;
    full_name: string;
    owner: GitHubSearchResponseItemOwner ;
    html_url : string;
    description : string;
    url : string;
}

export class GitHubSearchResponseItemOwner
{
  id: number;
    avatar_url: string;
   url:  string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    ) {
 
  }
  
  public getValues(name: string): Observable<GitHubSearchResponse> {
    return this.http.get<GitHubSearchResponse>(`${this.api}/github/search/${name}`);
  }
  public setBookmark(item: any): Observable<any> {
    return this.http.post(`${this.api}/github/bookmarks`, item);
  }
  public getBookmark(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/github/bookmarks`);
  }
}
