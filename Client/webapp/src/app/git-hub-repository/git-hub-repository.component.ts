import { Component, OnInit } from '@angular/core';
import { ApiServiceService, GitHubSearchResponse, GitHubSearchResponseItem } from 'app/api-service.service';

@Component({
  selector: 'app-git-hub-repository',
  templateUrl: './git-hub-repository.component.html',
  styleUrls: ['./git-hub-repository.component.scss']
})
export class GitHubRepositoryComponent implements OnInit {

  public repository: GitHubSearchResponseItem[];

  constructor( private apiService: ApiServiceService) {}

  // search gitHub repository by clicking enter
  onEnter(search: string) {
    if (!search) {
      this.repository = [];
    } else {
      this.apiService.getValues(search).subscribe(v => {
        this.repository = v.items;
      });
    }
  }

  save(repo: GitHubSearchResponseItem) {
    this.apiService.setBookmark(repo).subscribe(a => {
        alert(`${repo.name} was added to bookmarks`);
       });
}

  ngOnInit(): void {
  }

}
