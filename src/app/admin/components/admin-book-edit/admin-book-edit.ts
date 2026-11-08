import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../books/book';
import { BookService } from '../../../books/book.service';
import { BookForm } from '../../../books/components/book-form/book-form';

@Component({
  imports: [BookForm],
  selector: 'app-admin-book-edit',
  styleUrl: './admin-book-edit.css',
  templateUrl: './admin-book-edit.html',
})
export class AdminBookEdit {
  private bookService = inject(BookService);
  private router = inject(Router);

  id = input<string>();

  readonly isEditMode = computed(() => this.id() !== undefined);
  readonly book = computed(() => this.bookService.getBookById(Number(this.id())));

  save(book: Book): void {
    if (this.isEditMode()) {
      this.bookService.updateBook(book);
    } else {
      this.bookService.addBook(book);
    }
    this.router.navigate(['/admin']);
  }

  cancel(): void {
    this.router.navigate(['/admin']);
  }
}
