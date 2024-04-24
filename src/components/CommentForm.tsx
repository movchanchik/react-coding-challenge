import React, { useState } from "react";
import { CommentType } from "../types/type";

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState<CommentType>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<CommentType>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors: Partial<CommentType> = {};

    if (!comment.name) {
      errors.name = "Name is required";
    }
    if (!comment.email) {
      errors.email = "Email is required";
    }
    if (!comment.message) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Cooment", comment);
    } else {
      setErrors(errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-100 p-6 rounded-md shadow-md mt-6"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={comment.name}
          onChange={handleChange}
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={comment.email}
          onChange={handleChange}
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={comment.message}
          onChange={handleChange}
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
