import LikeButton from './LikeButton.jsx'

function SubjectList({ subjects }) {
  return (
    <div className="box">
      <h2>My subjects</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.code}>
            {subject.code} {subject.name} <LikeButton label="Like" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubjectList