import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import ViewCourses from './components/ViewCourses/ViewCourses';

function App() {
  return (
    <div className="">
      <Header></Header> <br/><br/>
      <div className="container">
      <ViewCourses></ViewCourses>
      </div>
    </div>
  );
}

export default App;
