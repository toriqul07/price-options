import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarksData = [
        { "id": 1, "name": "Student 1", "math": 85, "physics": 78, "chemistry": 90 },
        { "id": 2, "name": "Student 2", "math": 72, "physics": 65, "chemistry": 80 },
        { "id": 3, "name": "Student 3", "math": 91, "physics": 88, "chemistry": 85 },
        { "id": 4, "name": "Student 4", "math": 68, "physics": 72, "chemistry": 75 },
        { "id": 5, "name": "Student 5", "math": 78, "physics": 75, "chemistry": 82 },
        { "id": 6, "name": "Student 6", "math": 89, "physics": 82, "chemistry": 88 },
        { "id": 7, "name": "Student 7", "math": 95, "physics": 90, "chemistry": 92 },
        { "id": 8, "name": "Student 8", "math": 62, "physics": 55, "chemistry": 60 },
        { "id": 9, "name": "Student 9", "math": 81, "physics": 76, "chemistry": 78 },
        { "id": 10, "name": "Student 10", "math": 70, "physics": 68, "chemistry": 72 }
      ];

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis datakey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;