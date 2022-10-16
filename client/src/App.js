import "./App.css";
import Navbar from "./Components/Navabar";
import Books from "./Components/Books";
import Add from "./Components/Add";
import SignUp from "./Components/SignUp";
import LandingPage from "./Components/LandingPage";

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
      <LandingPage />
    </div>
  );
}

export default App;
