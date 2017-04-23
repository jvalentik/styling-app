import { Component, Input, OnInit } from '@angular/core';
import { Goal } from './goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input()
  goal: Goal;

  constructor() { }

  ngOnInit() {
  }

}
