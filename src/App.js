import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from './movie/List';
import Directory from './stateDirectory/Directory';
import MovieDetails from './movie/MovieDetails';
import BookList from './library/BookList';
import BookDetails from './library/BookDetails';
import JobPoster from './jobp/JobPoster';
import JobListPage from './jobp/JobListPage';
import JobPost from './jobp/jobPost';
import JobDetails from './jobp/jobDetails';

function App() {
  
  return (
    <>
      <Router>  
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path='/directory' element={<Directory/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path='/library' element={<BookList/>} />
          <Route path="/book/works/:id" element={<BookDetails />} />
          <Route path='/' element={<JobPoster/>} />
          <Route path='/jobList' element={<JobListPage/>} />
          <Route path='/jobPost' element={<JobPost />} />
          <Route path='/jobDetails' element={<JobDetails />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
