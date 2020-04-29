import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.listBooks()
  }

  listBooks() {
    this._bookService.getBooks().subscribe(
      data =>  
      {
      console.log(data);
      this.books = data;
      }
    )
  }

/* -------------------------------------- */
/* books: Book[] = [
  {
    "sku": "text-100",
    "name": "C Programming Language",
    "description": "Learn C Programming Language",
    "unitPrice": 600.00,
    "imageUrl": "assets/images/books/text-100.png",
    "active": true,
    "unitsInStock": 100,
    "createdOn": new Date(),
    "updatedOn": null,
  },
  {
    "sku": "text-101",
      "name": "C# Crash Course",
      "description": "Learn C# Programming Language",
      "unitPrice": 900.00,
      "imageUrl": "assets/images/books/text-101.png",
      "active": true,
      "unitsInStock": 100,
      "createdOn": new Date(),
      "updatedOn": null,
  },
  {
    "sku": "text-102",
    "name": "C++ Crash Course",
    "description": "Learn C++ Programming Language",
    "unitPrice": 700.00,
    "imageUrl": "assets/images/books/text-102.png",
    "active": true,
    "unitsInStock": 100,
    "createdOn": new Date(),
    "updatedOn": null,
  },
  {
    "sku": "text-103",
    "name": "Cracking The Coding Interview",
    "description": "Learn Cracking the coding interview",
    "unitPrice": 1000.00,
    "imageUrl": "assets/images/books/text-103.png",
    "active": true,
    "unitsInStock": 100,
    "createdOn": new Date(),
    "updatedOn": null,
  }
] */
/* -------------------------------------- */

}
