import React, { useState, useEffect } from 'react/cjs/react.development';
import './App.css';
import BookTable from './components/BookTable'
import AddBookForm from './components/AddBookForm'
import EditBookForm from './components/EditBookForm'


function App() {
  const bookData = [
    { id: 1, book_name: "Lord of Rings ", author: "J. R. R. Tolkien", published_year: 1954 },
    { id: 2, book_name: "Anna Karenina", author: "Leo Tolstoy", published_year: 1878 },
    { id: 3, book_name: "Kite Runner ", author: "Khaled Hosseini", published_year: 2003 },
     
  ]

  const [books, setBooks] = useState(bookData)

  useEffect(()=>{
    const data = localStorage.getItem("my-list-item")
    if(data){
      setBooks(JSON.parse(data))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("my-list-item", JSON.stringify(books))
  })


  //adding the book
  const addBook = (book) => {
    book.id = books.length + 1
    setBooks([...books, book])
  }


  //deleting the book 

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }


  //edit the book 
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, book_name: '', author: '', published_year: '' }

  const [currentBook, setCurrentBook] = useState(initialFormState)

  const editRow = (book) => {
    setEditing(true)

    setCurrentBook({ id: book.id, book_name: book.book_name, author: book.author, published_year: book.published_year })
  }

  const updateBook = (id, updatedBook) => {
    setEditing(false)

    setBooks(books.map((book) => (book.id === id ? updatedBook : book)))
  }


  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">

        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit book</h2>
              <EditBookForm
                setEditing={setEditing}
                currentBook={currentBook}
                updateBook={updateBook}
              />
            </div>
          ) : (
              <div>
                <h2>Add book</h2>
                <AddBookForm addBook={addBook} />
              </div>
            )}
        </div>

        <div className="flex-large">
         
          <BookTable books={books} editRow={editRow} deleteBook={deleteBook} />
        </div>
      </div>
    </div>
  );
}

export default App;

