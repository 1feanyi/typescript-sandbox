import { CoursesService } from '../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Cras tincidunt lorem ac urna ullamcorper luctus. 
  Aliquam pellentesque orci at nibh rhoncus faucibus. 
  Curabitur non convallis massa. Sed imperdiet vehicula sodales. 
  In ac tristique urna. Nulla feugiat eros sed mi gravida, sit amet molestie diam posuere. 
  Nunc malesuada non neque dapibus pellentesque. 
  Etiam nulla dui, sagittis eu metus quis, ornare tincidunt dui. 
  Donec quis pulvinar nunc. Morbi porta non tellus sed molestie.
  `;
  
  ngOnInit() {
  }

}
