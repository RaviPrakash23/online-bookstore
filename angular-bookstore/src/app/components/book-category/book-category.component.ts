import { Component, OnInit } from '@angular/core';
import { BookCategory } from '../../common/book-category'
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  bookCategory: BookCategory[];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.listBookCategories();
  }

  listBookCategories() {
    this._bookService.getBookCategory().subscribe(
      data => {
        console.log(data);
        this.bookCategory = data;
      }
    )
  }

}
