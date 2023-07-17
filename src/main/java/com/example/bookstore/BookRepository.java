package com.example.bookstore;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    void deleteById(Long id);
    Optional<Book> findByIsbn(String isbn);
}
