import { Component, OnInit } from '@angular/core';
import { ApiServiceService, GitHubSearchResponse, GitHubSearchResponseItem } from 'app/api-service.service';

@Component({
  selector: 'app-git-hub-repository',
  templateUrl: './git-hub-repository.component.html',
  styleUrls: ['./git-hub-repository.component.scss']
})
export class GitHubRepositoryComponent implements OnInit {

  public repositories: GitHubSearchResponseItem[];

  constructor( private apiService: ApiServiceService) {}

  // search gitHub repository by clicking enter
  search(search: string) {
    if (!search) {
      this.repositories = [];
    } else {
      this.apiService.getValues(search).subscribe(v => {
        this.repositories = v.items;
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
