import { AuthorsService } from '../authors.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  email = "me@example.com";

  onKeyUp(){
    console.log(this.email);    
  }

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
