import { Component } from '@angular/core';
import { Goal } from './goal/goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    { title: 'Master Styling', isActive: true},
    { title: 'Understand animations', isActive: false},
    { title: 'Master Angular Animations', isActive: false}
  ] as Array<Goal>;
}
