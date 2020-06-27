import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubRepositoryComponent } from './git-hub-repository/git-hub-repository.component';
import { GitHubRepositoryBookmarksComponent } from './git-hub-repository-bookmarks/git-hub-repository-bookmarks.component';

const routes: Routes = [{
  path: '',
  component: GitHubRepositoryComponent
},{
  path: 'bookmarks',
  component: GitHubRepositoryBookmarksComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
