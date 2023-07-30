import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import BookForm from "@/components/BookForm";
import { get, put } from "@/utils";
import { BookProps } from "@/components/types";
import Loader from "@/components/Loader";

const UpdateBookPage: NextPage<BookProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const [bookDetails, setBookDetails] = useState<BookProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await get<BookProps>(`/api/books/${id}`);
        setBookDetails(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching book:", error);
        setIsLoading(false);
      }
    };
    console.log(router);
    fetchBook();
  }, [id, router]);

  const handleSubmit = async (bookData: BookProps) => {
    try {
      setIsSubmitting(true);

      // Make the PUT request
      const response = await put(`/api/books/${id}`, bookData);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isSubmitting ? (
        <Loader />
      ) : !isLoading && bookDetails ? (
        <BookForm initialData={bookDetails} onSubmit={handleSubmit} />
      ) : (
        <div>No book details found.</div>
      )}
    </div>
  );
};

export default UpdateBookPage;
