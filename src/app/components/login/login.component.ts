import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      email: '',
      password: ''
    });
  }

  onSubmit(): void {
    console.log(this.form.getRawValue());
      this.toggle(document.getElementById("myPlants"));
      this.toggle(document.getElementById("visualization"));
      this.toggle(document.getElementById("charts"));
      this.toggle(document.getElementById("weather"));
      this.router.navigateByUrl('/myplants');


  }

  toggle(x){
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
  }


}

