import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { darkTheme } from '../darkTheme.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme:boolean;
  @Output() darkTheme: EventEmitter<boolean>= new EventEmitter();
  constructor(private darkThemeService:darkTheme) { }

  ngOnInit(): void {
    this.theme = this.darkThemeService.darkTheme;
    // console.log("first theme : "+this.theme);
  }

  darktheme(){
    this.darkThemeService.onThemeToggle();
    this.theme = this.darkThemeService.darkTheme;
    this.darkThemeService.themeUpdated.emit(this.theme);
    // console.log("toogle theme : "+this.theme);
    if(!this.theme){

      document.getElementById("ball").style.transform = "translateX(0px)";
    }
    else{
    document.getElementById("ball").style.transform = "translateX(24px)";

    }
  }

}
