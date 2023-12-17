import { TestBed } from '@angular/core/testing';

import { HackerStoryServiceService } from './hacker-story-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('HackerStoryServiceService', () => {
  let service: HackerStoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(HackerStoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
