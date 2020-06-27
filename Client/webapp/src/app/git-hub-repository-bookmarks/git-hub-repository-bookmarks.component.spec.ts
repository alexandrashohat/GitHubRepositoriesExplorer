import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepositoryBookmarksComponent } from './git-hub-repository-bookmarks.component';

describe('GitHubRepositoryBookmarksComponent', () => {
  let component: GitHubRepositoryBookmarksComponent;
  let fixture: ComponentFixture<GitHubRepositoryBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubRepositoryBookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubRepositoryBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
