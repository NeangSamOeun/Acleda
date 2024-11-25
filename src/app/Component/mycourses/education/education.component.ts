import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  
  thead = [
    'CourseCode',
    'Course Title',
    'Rooms',
    'ClassTime',
    'Teachers',
    'Credits',
    'Batches',
    'Students',
  ];

  courses = [
    {
      coursescode: 'IT 312',
      coursesTitle: 'OOP Java Programming',
      Room: 'Prasat Beng Mealea',
      classTime: '17:30-19:00(Thu) /19:00-20:30(Thu)',
      teacher: 'Reach Makara',
      credits: 3,
      baches: 'CSE-7.E.WD.1',
      Student: 55,
    },
    {
      coursescode: 'IT 312',
      coursesTitle: 'Mobile App Dev I',
      Room: 'Prasat Beng Mealea',
      classTime: '17:30-19:00(Thu) /19:00-20:30(Thu)',
      teacher: 'Vannsith Lonh',
      credits: 3,
      baches: 'CSE-7.E.WD.1',
      Student: 55,
    },
    {
      coursescode: 'IT 312',
      coursesTitle: 'C#',
      Room: 'Prasat Beng Mealea',
      classTime: '17:30-19:00(Thu) /19:00-20:30(Thu)',
      teacher: 'Nhim Nhanh',
      credits: 3,
      baches: 'CSE-7.E.WD.1',
      Student: 55,
    },
    {
      coursescode: 'IT 312',
      coursesTitle: 'Computer Vision',
      Room: 'Prasat Beng Mealea',
      classTime: '17:30-19:00(Thu) /19:00-20:30(Thu)',
      teacher: 'Sovanda Chib',
      credits: 3,
      baches: 'CSE-7.E.WD.1',
      Student: 55,
    },
    {
      coursescode: 'IT 312',
      coursesTitle: 'Windows Server',
      Room: 'Prasat Beng Mealea',
      classTime: '17:30-19:00(Thu) /19:00-20:30(Thu)',
      teacher: 'Mom Hong',
      credits: 3,
      baches: 'CSE-7.E.WD.1',
      Student: 55,
    },
  ];


}
