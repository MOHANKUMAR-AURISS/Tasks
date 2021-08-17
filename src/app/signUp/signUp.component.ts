import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
@Component({
  selector: 'sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
    constructor(private location:Location,private formBuilder:FormBuilder,private appComponent:AppComponent ){}
    signForm:any = FormGroup;
    ngOnInit(): void {
        this.signForm = this.formBuilder.group({
            name:new FormControl('',Validators.required),
            password:new FormControl('',Validators.required)
        })
    }

    onSubmit(){
        // console.log(this.appComponent.users);
        let user:any ={ name:this.signForm.value.name,
                     password:this.signForm.value.password
                    };
        // console.log(this.signForm.value);
        // console.log(user);
        this.appComponent.users.push(user);
        console.log(this.appComponent.users);
        this.location.back();
        
    }

}

