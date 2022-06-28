import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './Components/SingleBook';
import horrorArray from './Data/horror.json';
import BookList from './Components/BookList';
import FilterBookList from './Components/FilterBookList';
import AddComment from './Components/AddComment';


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