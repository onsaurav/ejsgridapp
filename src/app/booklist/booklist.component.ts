import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../src/model/book';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent implements OnInit {
  public books: Book[];

  constructor(){
    this.books = [];
  }

  ngOnInit(): void {
    this.books = this.generateBooks();
  }

  private generateBooks(): Book[] {
    const books: Book[] = [];
    for (let i = 1; i <= 50; i++) {
      books.push({
        id: i,
        name: `Book ${i}`,
        author: `Author ${i}`,
        price: 10 + i,
        publicationDate: new Date(),
        inStock: i % 2 === 0
      });
    }
    return books;
  }

}
