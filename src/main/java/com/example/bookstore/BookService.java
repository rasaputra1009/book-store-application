package com.example.bookstore;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(Book existingBook, Book updatedBook) {
        existingBook.setName(updatedBook.getName());
        existingBook.setImageUrl(updatedBook.getImageUrl());
        existingBook.setPrice(updatedBook.getPrice());
        existingBook.setIsbn(updatedBook.getIsbn());
        return bookRepository.save(existingBook);
    }

    public boolean deleteBook(Long id) {
        try {
            Optional<Book> book = bookRepository.findById(id);
            if (book.isPresent()) {
                bookRepository.delete(book.get());
                return true;
            } else {
                System.out.println("Book not found for ID: " + id);
                return false;
            }
        } catch (Exception e) {
            System.out.println("Error deleting book: " + e.getMessage());
            return false;
        }
    }

}
