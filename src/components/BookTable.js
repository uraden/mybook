import React from 'react'
import './BookTable.css'

function BookTable(props) {
    return (
        <div className="top-input-container">
            {props.books.map((book) => (
                <div key={book.id} className="input-container">
                    <div className="iinside">
                        <h1> {book.book_name} </h1>
                        <h2> {book.author} </h2>
                        <h3> {book.published_year} </h3>
                        <div className="btns-1">
                            <button type="button" className="btn-warning" onClick={() => { props.editRow(book) }}>EDIT</button>
                            <button type="button" className="btn-danger" onClick={() => props.deleteBook(book.id)}>DELETE</button>
                        </div>
                    </div>

                </div>

            ))}




        </div>
    )
}

export default BookTable
