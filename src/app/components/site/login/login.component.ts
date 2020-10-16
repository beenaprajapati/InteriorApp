import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {environment} from '../../../../environments/environment'
@Component({templateUrl: 'login.component.html',
styleUrls: ['login.component.css']})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    baseURL = environment.adminUrl;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
       
    ) {
        // redirect to home if already logged in
        
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginForm.reset();
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
        if(this.f.username.value.toLowerCase() =="admin" &&  this.f.password.value.toLowerCase() =="admin")
        {
            window.location.href =this.baseURL;
        }
    }
    Cancel()
    {
        this.router.navigate(['/home']);
    }
}
