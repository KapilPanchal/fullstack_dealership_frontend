import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/service/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private signinService: SigninService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: [''],
      password: [''],
      rememberme: [''],
      clientId: ['REVIEWS-COLLECTION']
    });
  }

  onSigninFormSubmit(){
    console.log(this.signinForm.value);
    // this.signinService.getTokenFromServer(this.signinForm.value).subscribe({
    //   next: (res) => {console.log(res)},
    //   error: (error) =>{console.log(error)}
    // })
  }
}