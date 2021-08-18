import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcomePage.component.html',
  styleUrls: ['./welcomePage.component.css']
})
export class WelcomePageComponent implements OnInit {
  user:any;
  constructor(private router :Router){
    const navigation = this.router.getCurrentNavigation();
    if(navigation != undefined && navigation.extras != undefined && navigation.extras.state ){
      const state = navigation.extras.state;
      this.user = state;
      console.log(this.user);
      

    }
    else{
        let temp:any = localStorage.getItem('LoggedIn');
        this.user = JSON.parse(temp);
    
    }

  }
  ngOnInit(): void {
    

  }
}
