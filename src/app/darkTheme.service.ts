
import { EventEmitter } from "@angular/core";

export class darkTheme{

    darkTheme:boolean=false;

    themeUpdated = new EventEmitter<boolean>();

    onThemeToggle(){
        this.darkTheme = !this.darkTheme;
       
    }
}