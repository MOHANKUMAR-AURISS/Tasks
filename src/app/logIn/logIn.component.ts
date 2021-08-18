import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
    loginForm:any = FormGroup;
    constructor(private formBuilder:FormBuilder ,private router:Router){}
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            name:new FormControl('',Validators.required),
            password:new FormControl('',Validators.required)
        })
        
    }

    onSubmit(){
        console.log(this.loginForm.value);
      let temp:any=localStorage.getItem('Users');
      console.log(temp);
      let  users = JSON.parse(temp) ;
        for(let i=0;i<users.length;i++)
        {
            if(this.loginForm.value.name == users[i].name)
            {
                if(this.loginForm.value.password == users[i].password)
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

