import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepositoryComponent } from './git-hub-repository.component';

describe('GitHubRepositoryComponent', () => {
  let component: GitHubRepositoryComponent;
  let fixture: ComponentFixture<GitHubRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
