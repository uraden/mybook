import React, { useState } from 'react'
import './EditBookForm.css'

function EditBookForm(props) {

    const [book, setBook] = useState(props.currentBook)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setBook({ ...book, [name]: value })
    }


    return (
        <div className="add-form-container">
            <form
                onSubmit={(event) => {
                    event.preventDefault()

                    props.updateBook(book.id, book)
                }}
                className="add_form"
            >
                <div className="add-inpt">
                    <div className="title-name"><label> Book Name</label></div>
                    <div> <input placeholder="book name" className="inut-border" type="text" name="book_name" value={book.book_name} onChange={handleInputChange} /> </div>
                </div>

                <div className="add-inpt">
                    <div className="title-name"> <label> Author </label> </div>
                    <div><input placeholder="author" className="inut-border" type="text" name="author" value={book.author} onChange={handleInputChange} /> </div>
                </div>

                <div className="add-inpt">
                    <div className="title-name"><label> Published Year </label> </div>
                    <div> <input placeholder="published year" className="inut-border" type="text" name="published_year" value={book.published_year} onChange={handleInputChange} /> </div>
                </div>

                
                    <div className="btn-pos"><button className="btn-primary">Update User</button> </div>

                    <div className="btn-pos"><button type="button" className=" btn-secondary" onClick={() => props.setEditing(false)} >Cancel</button> </div>
                
            </form>
        </div>
    )
}

export default EditBookForm

