import { Component, OnInit } from '@angular/core';
import { ApiServiceService, GitHubSearchResponseItem } from 'app/api-service.service';

@Component({
  selector: 'app-git-hub-repository-bookmarks',
  templateUrl: './git-hub-repository-bookmarks.component.html',
  styleUrls: ['./git-hub-repository-bookmarks.component.scss']
})
export class GitHubRepositoryBookmarksComponent implements OnInit {

  public repository: GitHubSearchResponseItem[];

  constructor(private apiService: ApiServiceService) {
    // gets all the saved bookmarks from the session
    this.apiService.getBookmark().subscribe(rep =>
      this.repository = rep);
  }

  ngOnInit(): void {
  }

}
