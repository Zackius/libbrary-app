import "./App.css";
import Navbar from "./Components/Navabar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Books from "./Components/Books";
import Add from "./Components/Add";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [books, setBooks] = useState([])

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const { data } = await bookApi.get("/books");
  //     setBooks(data)
  //   }
  //   fetchBooks()
  // }, [])
  // const addBook = async (newBooks) => {
  //   const { data } = await bookApi.post("/books", newBooks);
  //   setBooks((prevBooks) => {
  //     return [...prevBooks, data]
  //   })
  // }

  return (
    <div>
      <Navbar />
      <Routes className="nav-link">
        <Route path="signIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Books" element={<Books />} />
        <Route path="Add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
