import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  propertyBindingVar: string  = 'property binding test';
  stringInterpolationVar : string = "string interpolation test";

  username: string = "";

  pressFun() : void {
    console.log("button pressed...");
  }

  buttonTitle : string = "default button title";

  changeButtonTitle() : void {
    this.buttonTitle = "new button title";
  }

  onUpdateName(event : any) : void {
    this.username = event.target.value;
    if (this.username.length > 0) {
      this.nameDisabled = false;
    }
    else {
      this.nameDisabled = true;
    }
  }

  onReset() : void {
    this.username = "";
    this.nameDisabled = true;
  }

  nameDisabled : boolean = true;
}
