import React, { useState } from 'react'
import './AddBookForm.css'

function AddBookForm(props) {

    const initialFormState = { id: null, book_name: '', author: '', published_year: '' }
    const [book, setBook] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setBook({ ...book, [name]: value })
    }


    return (
        <div className="add-form-container">
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!book.book_name || !book.author || !book.published_year) return

                    props.addBook(book)
                    setBook(initialFormState)

                }}
                className="add_form"
            >
                <div className="add-inpt">
                   <div className="title-name"> <label> Book Name</label> </div>
                   <div> <input placeholder="book name" className="inut-border" type="text" name="book_name" value={book.book_name} onChange={handleInputChange} /> </div>
                </div>

                <div className="add-inpt">
                  <div className="title-name"> <label> Author </label></div>  
                   <div> <input className="inut-border" placeholder="author" type="text" name="author" value={book.author} onChange={handleInputChange} /> </div> 
                </div>

                <div className="add-inpt">
                   <div className="title-name"><label> Published Year </label> </div> 
                   <div><input className="inut-border" placeholder="published year" type="text" name="published_year" value={book.published_year} onChange={handleInputChange} /></div> 
                </div>

               <div className="btn-pos"><button className="btn-success">Add Book</button></div> 
            </form>
        </div>
    )
}

export default AddBookForm
