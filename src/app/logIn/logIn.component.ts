import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';


@Component({
  selector: 'log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
    loginForm:any = FormGroup;
    constructor(private formBuilder:FormBuilder,private appComponent:AppComponent ,private router:Router){}
    ngOnInit(): void {
        console.log(this.appComponent.users);

        this.loginForm = this.formBuilder.group({
            name:new FormControl('',Validators.required),
            password:new FormControl('',Validators.required)
        })
        
    }

    onSubmit(){
        console.log(this.loginForm.value);
console.log(this.appComponent.users.length);

        for(let i=0;i<this.appComponent.users.length;i++)
        {
            if(this.loginForm.value.name == this.appComponent.users[i].name)
            {
                if(this.loginForm.value.password == this.appComponent.users[i].password)
                {
                    console.log("login Success");
                    this.router.navigate(['welcome']);
                }
                else{
                    console.log("incorrect password");
                    
                }

            }
            else{
                console.log("no user present");
                
            }
        }
        
    }
}

