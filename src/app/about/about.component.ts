import { Component, OnInit } from '@angular/core';
import { darkTheme } from '../darkTheme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  theme:boolean;
  constructor(private darkThemeService:darkTheme) {
    this.darkThemeService.themeUpdated.subscribe(
      (currentTheme:boolean) => this.theme = currentTheme
      );
   }

  ngOnInit(): void {
  }

}
