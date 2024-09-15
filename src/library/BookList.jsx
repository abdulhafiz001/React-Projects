import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`https://openlibrary.org/search.json?q=books`)
            .then(response => {
                setBooks(response.data.docs || []); // Ensure that `docs` is an array
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    // Filter books based on the search query
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (book.author_name && book.author_name.join(', ').toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="library-container">
            <header className="library-header">
                <h1>Library</h1>
            </header>

            <section className="search-section">
                <input
                    type="search"
                    className="search-input"
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                />
            </section>

            <section className="books-section">
                {filteredBooks.slice(0, 20).map(book => (
                    <div key={book.key} className="book-card">
                        <Link to={`/book${book.key}`}>
                            <img 
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
                                alt={book.title} 
                                onError={(e) => { e.target.src = 'fallback-image.jpg'; }} // Fallback image
                            />
                            <h2 className="book-title">{book.title}</h2>
                        </Link>
                        <p className="book-author">
                            {/* {Array.isArray(book.author_name) ? book.author_name.join(', ') : 'Unknown Author'} */}
                        </p>
                        <p className="book-date">
                            {Array.isArray(book.publish_year) ? book.publish_year[0] : 'Unknown Year'}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default BookList;
