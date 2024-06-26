import OneOnOne from "./1-on-1.jsx";
import "./ShowMore.css";

export default function ShowMore({student}) {

    return (
    <>
        <div className="showmore-container">
            <div className="codewars">
            <h2>Codewars:</h2>
                <p>Current Total: {student.codewars.current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {student.codewars.goal.total}</p>
                <p>Percent of Goal Achieved: {student.codewars.goal.lastWeek}%</p>
            </div>
            <div className="scores">
            <h2>Scores:</h2>
                <p>Assignments: {student.cohort.scores.assignments}</p>
                <p>Projects: {student.cohort.scores.projects}</p>
                <p>Assessments: {student.cohort.scores.assessments}</p>
            </div>
            <div className="certifications">
            <h2>Certifications:</h2>
                <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
                <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
                <p>Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}</p>
                <p>GitHub: {student.certifications.github}</p>
            </div>
        </div>
        <OneOnOne student={student}/>
    </>
    )
}