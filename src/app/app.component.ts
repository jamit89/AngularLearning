import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  password='';

  OnButtonClick()
  {
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    this.password="MY Password!!!";
  }

  onChangeUseLetters()
  {
    this.includeLetters= !this.includeLetters;
  }
  onChangeUseNumbers()
  {
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols()
  {
    this.includeSymbols =!this.includeSymbols;
  }
}
