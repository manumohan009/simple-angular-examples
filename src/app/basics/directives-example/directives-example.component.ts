import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {

  courses = ['English', 'Hindi', 'Physics', 'Chemistry', 'Biology'];
  // courses = []

  coursesArr;
  viewMode = 'map';

  isSelected: true;
  constructor() { }

  ngOnInit() {
  }

  loadCourses() {
    this.coursesArr = [
      { id: 1, name: 'Course-1'},
      { id: 2, name: 'Course-2'},
      { id: 3, name: 'Course-3'},
      { id: 4, name: 'Course-4'},
      { id: 5, name: 'Course-5'}
    ];
  }
  onAdd() {
    this.coursesArr.push({ id: 6, name: 'Course-6' });
  }

  onRemove(course) {
    const index = this.coursesArr.indexOf(course);
    this.coursesArr.splice(index, 1);
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
