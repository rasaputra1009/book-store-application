import { useState, useEffect } from "react";
import { get } from "../utils";
import BookCard from "../components/BookCard";
import styles from "../styles/styles.module.scss";
import Loader from "@/components/Loader";
interface Book {
  id: number;
  name: string;
  imageUrl: string;
  isbn: number;
  price: number;
}

export default function Home() {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const data = await get<Book[]>("/api/books");
        setBookList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching book list:", error);
        setIsLoading(false);
      }
    };

    fetchBookList();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.bookList}>
          {bookList.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </div>
  );
}
