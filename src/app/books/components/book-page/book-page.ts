import { Component, computed, inject, input } from '@angular/core';
import { BookService } from '../../book.service';

@Component({
  imports: [],
  selector: 'app-book-page',
  styleUrl: './book-page.css',
  templateUrl: './book-page.html',
})
export class BookPage {
  private bookService = inject(BookService);
  id = input.required<string>();

  readonly book = computed(() => this.bookService.getBookById(Number(this.id())));
}
