import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HackerStoryServiceService } from './Service/hacker-story-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoryangulartableComponent } from './storyangulartable/storyangulartable.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,BrowserModule,MatInputModule,MatPaginatorModule,MatChipsModule,BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers:[HackerStoryServiceService  ],
      declarations: [
        AppComponent, StoryangulartableComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hacker Story');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hacker Story');
  });
});
