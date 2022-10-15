import React from "react";
import axios from "axios";
import "./Add.css";
import { useState } from "react";

const Add = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    price: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    axios.post(" http://127.0.0.1:3000/books", {
        title: data.books_title,
        description: data.description,
        image: data.book_image,
        author: data.author,
        price: data.price,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div className="main">
      <div className="inputAdd">
        <form className="list" onSubmit={(e) => submit(e)}>
          <label>
            <h4>Book Title</h4>
            <input
              className="gap"
              onChange={(e) => handle(e)}
              id="books_name"
              value={data.books_title}
              placeholder="books_name"
              type="text"
              name="books_name"
            />
          </label>
          <label>
            <h4> Book Description</h4>
            <input
              className="gap"
              onChange={(e) => handle(e)}
              id="description"
              value={data.description}
              placeholder="Book Description"
              type="text"
              name="description"
            />
          </label>
          <label>
            <h4> Image-Url</h4>
            <input
              className="gap"
              onChange={(e) => handle(e)}
              id="book_image"
              value={data.book_image}
              placeholder="image_ url"
              type="url"
              name="book_image"
            />
          </label>
          <label>
            <h4> Author</h4>
            <input
              className="gap"
              onChange={(e) => handle(e)}
              id="author"
              value={data.author}
              placeholder="author"
              type="text"
              name="author"
            />
          </label>

          <label>
            <h4> Price</h4>
            <input
              className="gap"
              onChange={(e) => handle(e)}
              id="price"
              value={data.price}
              placeholder="$ price"
              type="integer"
              name="price"
            />
          </label>
          <div className="btn">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
