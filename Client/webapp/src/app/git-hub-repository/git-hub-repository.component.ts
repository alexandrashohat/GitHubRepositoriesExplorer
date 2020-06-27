import { Component, OnInit } from '@angular/core';
import { ApiServiceService, GitHubSearchResponse } from 'app/api-service.service';

@Component({
  selector: 'app-git-hub-repository',
  templateUrl: './git-hub-repository.component.html',
  styleUrls: ['./git-hub-repository.component.scss']
})
// export class GitHubSearchResponse
// {
//     total_count: number;
//     incomplete_results: boolean;
//     items: GitHubSearchResponseItem[];
// }

// export class GitHubSearchResponseItem
// {
//     id: number;
//     name: string;
//     full_name: string;
//     owner: GitHubSearchResponseItemOwner ;
//     html_url : string;
//     description : string;
//     url : string;
// }

// export class GitHubSearchResponseItemOwner
// {
//   id: number;
//     avatar_url: string;
//    url:  string;
// }
export class GitHubRepositoryComponent implements OnInit {

  public repository: GitHubSearchResponse;
  constructor(
    private apiService: ApiServiceService
  ) {
    // this.apiService.getValues('aspnet').subscribe(v => {

    //   console.log('sfsdf', v);
    //   this.repository.items = v.items;
    //   this.apiService.setBookmark((v as any).items[0]).subscribe(a => {
    //     console.log('book set:', a);
    //     this.apiService.getBookmark().subscribe(b => console.log('books get', b));
    //   });
    // });
  }

  ngOnInit(): void {
  }

}
