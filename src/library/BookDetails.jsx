import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams(); // Ensure this matches the route param name
    const [book, setBook] = useState(null);
    const [authorBooks, setAuthorBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Fetch detailed book information using the id
        fetch(`https://openlibrary.org/works/${id}.json`)
            .then(response => response.json())
            .then(data => {
                setBook(data);

                // Ensure data.authors and data.authors[0] are defined
                if (data.authors && data.authors[0] && data.authors[0].author) {
                    return fetch(`https://openlibrary.org/authors/${data.authors[0].author.key}/works.json`); // Fetch books by the same author
                } else {
                    throw new Error('Author information is not available.');
                }
            })
            .then(response => response.json())
            .then(data => {
                setAuthorBooks(data.entries);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>Error: Book details not available.</div>;
    }

    return (
        <div className="book-details-container">
            <header className="library-header">
                <Link to="/library" className="back-button">← Back to Book List</Link>
                <h1>Book Details</h1>
            </header>

            <div className="book-main">
                <div className="book-img">
                    <img src={`https://covers.openlibrary.org/b/id/${book.covers ? book.covers[0] : ''}-L.jpg`} alt="Book Cover" />
                </div>
                <div className="book-info">
                    <h2 className="book-title"><strong>Title:</strong> {book.title}</h2>
                    <p className="book-author"><strong>Author:</strong> {book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown Author'}</p>
                    <p className="book-pub-date"><strong>Publication Date:</strong> {book.first_publish_date || 'Unknown'}</p>
                    <div className="book-summary">
                        <h3>Summary:</h3>
                        <p>{book.description ? (book.description.value || book.description) : 'No description available'}</p>
                    </div>
                </div>
            </div>

            <div className="author-section">
                <h2>More from this Author</h2>
                <div className="author-books">
                    {authorBooks.length > 0 ? (
                        authorBooks.map(authorBook => (
                            <div className="book-card" key={authorBook.key}>
                                <img src={`https://covers.openlibrary.org/b/id/${authorBook.covers ? authorBook.covers[0] : ''}-M.jpg`} alt={authorBook.title} />
                                <p className="book-title">{authorBook.title}</p>
                                <p className="book-date">{authorBook.first_publish_date || 'Unknown'}</p>
                            </div>
                        ))
                    ) : (
                        <p>No other books available by this author.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
