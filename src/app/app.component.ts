import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  password='';
  length=0;

  OnButtonClick()
  {
   const numbers='1234567890';
   const letters='abcdefghijklmnopqrstuvwxyz';
   const symbols='!@#$%^&*()';
    let validChar='';
    if(this.includeLetters)
    {
      validChar +=letters;
    }
    if(this.includeNumbers)
    {
      validChar +=numbers;
    }
    if(this.includeSymbols)
    {
      validChar +=symbols;
    }
    let generatedPassword='';
    for(let i=0;i<this.length;i++)
    {
      const index=Math.floor(Math.random()*validChar.length);
      generatedPassword +=validChar[index];
    }
    this.password=generatedPassword;
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

  onChangeLength(value:string)
  {
    const parseValue=parseInt(value);
    if(!isNaN(parseValue))
    {
      this.length=parseValue;
    }
  }
}
