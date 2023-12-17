import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryangulartableComponent } from './storyangulartable.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('StoryangulartableComponent', () => {
  let component: StoryangulartableComponent;
  let fixture: ComponentFixture<StoryangulartableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports:[HttpClientTestingModule,MatInputModule,MatPaginatorModule,BrowserAnimationsModule,NoopAnimationsModule],
      declarations: [StoryangulartableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryangulartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
