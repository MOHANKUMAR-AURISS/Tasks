import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
    user :any ={};
    constructor(private location:Location,private formBuilder:FormBuilder){}
    signForm:any = FormGroup;
    ngOnInit(): void {
        this.signForm = this.formBuilder.group({
            name:new FormControl('',Validators.required),
            password:new FormControl('',Validators.required)
        })
    }

    onSubmit(){
      this.user = Object.assign(this.user,this.signForm.value)
     this.addUser(this.user);
     this.location.back();
        
    }

    addUser(user:any){
        let users:any =[];
        if(localStorage.getItem('Users'))
        {
            let temp:any =localStorage.getItem('Users')
            users = JSON.parse(temp);
            users=[user,...users];
        }
        else{
            users=[user];
        }
        localStorage.setItem('Users',JSON.stringify(users));
    }

}

