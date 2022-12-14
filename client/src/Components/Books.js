import React, { useEffect, useState } from "react";
import "./Books.css";
// import { Link } from "react-router-dom";

import axios from "axios";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editForm, setEditForm] = useState(false);
  // const [isShown, setIsShown] = useState(false)

  // function handleClick(event) {
  //   setIsShown(current => !current)
  // }

  function handleChanges(e, id) {
    if (e) {
      setEditForm(() => !editForm);
    }
    fetch(`http://127.0.0.1:3000/books/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Conteent-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((resp) => resp.json());
  }

  // function handleDelete(id) {
  //   if (window.confirm("Are you sure you want to delete this book?")) {
  //     axios.delete(`http://127.0.0.1:3000/books/${id}`).then((response) => {
  //       console.log(response.data);
  //       getAllBooks();
  //     });
  //   }
  // }

  useEffect(() => {
    getAllBooks();
  }, []);
  const getAllBooks = () => {
    axios
      .get("http://127.0.0.1:3000/books")
      .then((resp) => {
        const allBooks = resp.data;
        setBooks(allBooks);
        window.location = "/books";
      })
      .catch((err) => {
        console.log(err.resp);
      });
  };

  return (
    <section className="main">
      {books.map((book) => {
        return (
          <div key={book.id} className="flex-container">
            <div className="selves">
              <img src={book.image} alt="book" />
              <h4> Book Name :{book.title}</h4>
              <h5> Author :{book.author} </h5>
              <p className="descrip">{book.description}</p>
            </div>

            <div id="hide-form">
              {editForm ? (
                <editForm />
              ) : (
                <button className="button" onClick={handleChanges}>
                  Edit
                </button>
              )}
            </div>
          </div>
        );
      })}
    
    </section>
  );
};

export default Books;
