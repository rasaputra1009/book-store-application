import React from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Button from "../Button";

const Index: React.FC = () => {

  const router = useRouter();
  const { name, imageUrl, price, isbn } = router.query;

  const initialData = {
    name: name || "",
    imageUrl: imageUrl || "",
    price: price || "",
    isbn: isbn || "",
  };

  const handleSubmit = (bookData) => {
    // Handle form submission for updating a book
    console.log("A book form submitted:", bookData);
    // Perform any additional actions for updating a book
  };


  return (
    <nav className={styles.navBar}>
      <h1 onClick={()=>router.push("/")} className={styles.title}>Bookstore</h1>
      <Button
        className={styles.primary}
        onClick={()=>router.push('/add')}
        label="Add Book"
      />
    </nav>
  );
};

export default Index;