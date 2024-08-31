import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../src/model/book';
import { GridModule, PageService, SortService, FilterService, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule, GridModule],
  providers: [PageService, SortService, FilterService],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent implements OnInit {
  public books: Book[];
  public columns: any[];

  public pageSettings: Object;
  public sortSettings: Object;
  public filterSettings: FilterSettingsModel;

  constructor(){
    this.books = [];
    this.columns = [];
    this.pageSettings = { pageSize: 15 }; 
    this.sortSettings = { columns: [{ field: 'id', direction: 'Ascending' }] };
    this.filterSettings = { type: 'CheckBox', mode: 'OnEnter' };
  }

  ngOnInit(): void {
    this.books = this.generateBooks();
    this.columns = this.generateColumns();
  }

  private generateBooks(): Book[] {
    console.log("Loading books");
    const books: Book[] = [];
    for (let i = 1; i <= 50; i++) {
      books.push({
        id: i,
        name: `Book ${i}`,
        author: `Author ${i}`,
        price: this.getRandomPrice(100, 999), 
        publicationDate: this.getRandomDate(new Date(2013, 0, 1), new Date()),  // Random date in the last 10 years
        inStock: i % 2 === 0
      });
    }
    return books;
  }
  
  private getRandomPrice(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }
  
  private getRandomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  private generateColumns(): any[] {
    return [
      { field: 'id', headerText: 'ID', textAlign: 'Right', width: 90, isPrimaryKey: true, allowSorting: true, allowFiltering: true },
      { field: 'name', headerText: 'Name', width: 150, allowSorting: true, allowFiltering: true },
      { field: 'author', headerText: 'Author', width: 150, allowSorting: true, allowFiltering: true },
      { field: 'price', headerText: 'Price', textAlign: 'Right', width: 120, format: 'C2', allowSorting: true, allowFiltering: true },
      { field: 'publicationDate', headerText: 'Publication Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'date', allowSorting: true, allowFiltering: true }, 
      { field: 'inStock', headerText: 'In Stock', width: 120, type: 'boolean', allowSorting: true, allowFiltering: true }
    ];
  }

}
