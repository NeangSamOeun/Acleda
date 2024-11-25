import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css',
})
export class GradesComponent {
  selectTerm = [
    { id: 1, term: '01-1-2024 to 01-04-2024' },
    { id: 2, term: '03-1-2025 to 03-04-2025' },
    { id: 3, term: '05-1-2026 to 04-04-2026' },
    { id: 4, term: '04-1-2027 to 05-04-2027' },
  ];

  titleTerm = [
    'CoursesCode',
    'Course Title',
    'Alpha.Grade',
    'Credits Attempt.',
    'Credits Earned',
    'GradePoint',
    'TotalPoint',
    'Remarks',
  ];

  bodyTerm = [
    {
      courseCode: 'IT 205',
      coursetile: 'DBMS',
      grade: 'A+',
      creditsAttempt: '4',
      creditsEarned: '5',
      gradePoint: '5.00',
      totalPoint: '12',
      remake: 'Superior',
    },
    {
      courseCode: 'IT 201',
      coursetile: '	Basic Electronics',
      grade: 'A+',
      creditsAttempt: '4',  
      creditsEarned: '5',
      gradePoint: '5.00',
      totalPoint: '12',
      remake: 'Excellent',
    },
    {
      courseCode: 'IT 202',
      coursetile: '	Data Communication',
      grade: 'A+',
      creditsAttempt: '4',
      creditsEarned: '5',
      gradePoint: '5.00',
      totalPoint: '12',
      remake: 'Superior',
    },
    {
      courseCode: 'IT 207',
      coursetile: 'NET C# Programming',
      grade: 'A+',
      creditsAttempt: '4',
      creditsEarned: '5',
      gradePoint: '5.00',
      totalPoint: '12',
      remake: 'Excellent',
    },
    {
      courseCode: 'IT 205',
      coursetile: '	Web Development',
      grade: 'A+',
      creditsAttempt: '3',
      creditsEarned: '4',
      gradePoint: '5.00',
      totalPoint: '11',
      remake: 'Good',
    },
  ]


}
