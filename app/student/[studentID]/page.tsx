import React from 'react'
interface StudentDetailsProps {
    params: {
        studentID: number,
    }
}
const StudentDetails: React.FunctionComponent<StudentDetailsProps> = async ({ params }) => {

    const { studentID } = await params;
    if(studentID > 10) {
        throw new Error('Student ID is greater then 10');
    }
  return (
    <div>
        <h1>Student Details</h1>
        <h2>Student ID: {studentID}</h2>
    </div>
  )
}

export default StudentDetails