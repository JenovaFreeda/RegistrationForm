import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registerform';

  
  constructor(private fb : FormBuilder) { }

  ngOnInit() {

  }

  signup() {
    console.log(this.signupForm.value)
    this.signupForm.updateValueAndValidity();
    
  }
  signupForm = new FormGroup({
    uname: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.maxLength(30)]),
    mail: new FormControl('',[Validators.required, Validators.email]),
    pass: new FormControl('',[Validators.required,Validators.minLength(8)]),
    num: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    department: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    check: new FormControl('',Validators.required),
    gen: new FormControl('', [Validators.required])
   
  })

  
  
  
  get uname(){
     return this.signupForm.get('uname')
  }
  get mail(){
    return this.signupForm.get('mail')
  }
  get pass(){
    return this.signupForm.get('pass')
  }
  get num(){
    return this.signupForm.get('num')
  }
  get department(){
    return this.signupForm.get('department');
  }
  get address(){
    return this.signupForm.get('address');
  }
  get check(){
    return this.signupForm.get('check');
  }
  get gen(){
    return this.signupForm.get('gen');
  }
 
}
