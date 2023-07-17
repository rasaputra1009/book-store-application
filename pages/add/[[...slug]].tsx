import BookForm from "@/components/BookForm";
import Loader from "@/components/Loader";
import { BookProps } from "@/components/types";
import { post } from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";

const AddBook = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { name, imageUrl, price, isbn } = router.query;

  const initialData = {
    name: name || "",
    imageUrl: imageUrl || "",
    price: price || "",
    isbn: isbn || "",
  };

  const handleSubmit = async (bookData: BookProps) => {
    try {
      setIsSubmitting(true);

      // Make the PUT request
      const response = await post(`/api/books`, bookData);

      if (response) {
        router.push("/"); // Use router.push instead of window.location.href for Next.js
      } else {
        // Display alert message with error code on failure
        alert(`Error (${response.errorCode}): ${response.errorMessage}`);
      }
    } catch (error) {
      // Handle any other errors
      alert("An error occurred while updating the book.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSubmitting ? (
        <Loader />
      ) : (
        <BookForm initialData={initialData} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default AddBook;
