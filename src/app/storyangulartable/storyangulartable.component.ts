import { Component, OnInit, ViewChild } from '@angular/core';
import { HackerStoryServiceService } from '../Service/hacker-story-service.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-storyangulartable',
  templateUrl: './storyangulartable.component.html',
  styleUrl: './storyangulartable.component.css'
  // providers: [
  //   {
  //     provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  //     useValue: appearance
  //   }
  // ]
})
export class StoryangulartableComponent implements OnInit{
  pager!: Pager;
  title:String="";
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
      this.apiService.getStoryListPageWise(1).subscribe(
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
    sortBy(property: string) {
      this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
      this.sortProperty = property;
      this.ELEMENTS = [...this.ELEMENTS.sort((a: any, b: any) => {
          // sort comparison function
          let result = 0;
          if (a[property] < b[property]) {
              result = -1;
          }
          if (a[property] > b[property]) {
              result = 1;
          }
          return result * this.sortOrder;
      })];
    }
    
    sortIcon(property: string) {
      if (property === this.sortProperty) {
          return this.sortOrder === 1 ? '☝️' : '👇';
      }
      return '';
    }
    setPage(page:number){
      this.isLoading = true;
      this.apiService.getStoryListPageWise(page).subscribe(
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
// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];