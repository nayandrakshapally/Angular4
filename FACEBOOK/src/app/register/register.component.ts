import { Component } from '@angular/core';

@Component({
  selector: 'custom-register',
  templateUrl: './register.component.html'
  
})
export class RegisterComponent {

  user={};

registerUser(){
  console.log(this.user);
  
}
 LengthOfAge=2;
 LengthOfFirstName=10;
}
