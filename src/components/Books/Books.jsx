import { useEffect, useState } from "react";

const Books = () => {

    const [books, setBooks] = useState([]);
console.log(books)

    useEffect( () =>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(deta => setBooks(deta))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books: {books.length}</h2>


        </div>
    );
};

export default Books;