/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { del } from "@/utils";

type BookCardProps = {
  id?: number;
  name: string;
  imageUrl: string;
  price: string;
};

const BookCard: React.FC<BookCardProps> = ({ id, name, imageUrl, price }) => {
  const router = useRouter();
  const handleUpdate = () => {
    router.push(`/update/${id}`);
  };

  const handleDelete = () => {
    del(`/api/books/${id}`)
      .then(() => {
        router.push("/"); // Redirect to the specified route after successful deletion
      })
      .catch((error) => {
        // Handle the error, if necessary
      });
  };
  return (
    <div className={styles.bookCard}>
      <h3>{name}</h3>
      <img src={imageUrl} alt={"Image URL"} className={styles.img} />
      <p>Price: {price}</p>
      <div className={styles.btn}>
        <Button
          className={styles.primary}
          onClick={handleUpdate}
          label="UPDATE"
        />
        <Button
          className={styles.secondary}
          onClick={handleDelete}
          label="DELETE"
        />
      </div>
    </div>
  );
};

export default BookCard;
