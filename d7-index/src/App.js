import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './Components/SingleBook';
import horrorArray from './Data/horror.json';
import BookList from './Components/BookList';
import { Container, Row, Col } from "react-bootstrap";
import FilterBookList from './Components/FilterBookList';


function App() {
  return (
    <div className="main-class">
      <div className="App">
        {/*<SingleBook book={horrorArray[0]} />*/}

        {/* <div>
        <BookList books={horrorArray} />
        </div>*/}
        <FilterBookList book={horrorArray} />
      </div>
    </div>
  );
}

export default App;