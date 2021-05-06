import { Component, OnInit } from '@angular/core';
import { darkTheme } from './darkTheme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  theme:boolean;

  constructor(private darkThemeService:darkTheme){
    this.darkThemeService.themeUpdated.subscribe(
    (currentTheme:boolean) => this.theme = currentTheme
    );

  }
  ngOnInit(): void {
    this.theme = this.darkThemeService.darkTheme;
  }

  
}
