import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;

    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
            ]),
            password: new FormControl(null, Validators.required)
        })
    }

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
}