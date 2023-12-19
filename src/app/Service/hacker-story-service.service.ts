import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HackerStoryServiceService {

  constructor(private httpClient: HttpClient) { }
  public getStoryListPageWise(){
    return this.httpClient.get("http://localhost:5222/api/HackerStoryAPI/GetHackerStories?pageSize=200");
  }
}
