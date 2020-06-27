import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { GitHubRepositoryComponent } from './git-hub-repository/git-hub-repository.component';
import { WithCredentialsInterceptor } from './interceptors/with-credentials.interceptor';
import { GitHubRepositoryBookmarksComponent } from './git-hub-repository-bookmarks/git-hub-repository-bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubRepositoryComponent,
    GitHubRepositoryBookmarksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
   {
     provide: HTTP_INTERCEPTORS,
     useClass: WithCredentialsInterceptor,
     multi: true
 },
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
