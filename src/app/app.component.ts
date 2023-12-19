import { Component, OnInit, ViewChild } from '@angular/core';
import { HackerStoryServiceService } from './Service/hacker-story-service.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Hacker Story';
  pager!: Pager;
  
  isLoading:boolean = true;
  ELEMENTS: Element[]=[];
  sortProperty: string = 'id';
    sortOrder = 1;
    displayedColumns = ['id', 'title', 'by', 'url'];
    //dataSource = new MatTableDataSource<Element>(this.ELEMENTS);
  datasource:any;
    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
    @ViewChild(MatSort)
  sort: MatSort = new MatSort;
    constructor(private apiService: HackerStoryServiceService ){
    

      
      
      
    }
    getdata(){
      
    }
    ngOnInit(){
      
      this.isLoading = true;
      this.apiService.getStoryListPageWise().subscribe(
        (result:any)=>{
                setTimeout(() => {
                this.pager ={totalItems: result.totalCount,
                  currentPage: result.currentPage,
                  pageSize: result.pageSize,
                  totalPages: result.totalPages,
                  startPage: 1,
                  endPage: result.totalPages,
                  startIndex: 1-1,
                  endIndex: result.totalPages-1,
                  pages: result.totalPages};
          
                this.ELEMENTS=result.hackerstory;
                this.datasource = new MatTableDataSource<Element>( this.ELEMENTS);
                this.datasource.paginator=this.paginator;
                this.datasource.sort=this.sort;
                this.isLoading = false;
            
          }, 200);
                
              }, 
              (error)=>{
                this.isLoading = false;
            console.log(error);
            
              },
            )
    }
    applyFilter(event : Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.datasource.filter =  filterValue.trim().toLocaleLowerCase()

      if(this.datasource.paginator){
        this.datasource.paginator.firstPage()
      }

    }
}
export interface Pager {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number;
}
export interface Element {
  id:number;
  title:string;
  by:string;
  url:string;
}