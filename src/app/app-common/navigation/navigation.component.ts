import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  themeClass = localStorage.getItem('classNameOfTheme');
  constructor() { }

  ngOnInit() {
  }

  changeTheme(theme){
    this.themeClass = theme
    localStorage.setItem('classNameOfTheme', theme)
  }

}
