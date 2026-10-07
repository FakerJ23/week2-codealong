import { useState } from 'react'
import Counter from './Counter.jsx'
import SubjectList from './SubjectList.jsx'
// Removed the import './App.css' line that was causing the error

function App() {
  const mySubjects = [
    { code: 'BICS 3301', name: 'Cross-Platform Software Development' },
    { code: 'INFO 1103', name: 'Database Systems' },
    { code: 'CSCI 2201', name: 'Data Structures and Algorithms' }
  ]

  return (
    <main>
      <h1>Part A: Code-Along</h1>
      
      <Counter />
      <hr />
      <SubjectList subjects={mySubjects} />
    </main>
  )
}

export default App