import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/User';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  signatureImg!: string;
  userForm!: FormGroup;
  sign!: boolean;

  @ViewChild(SignaturePad) signaturePad!: SignaturePad;

  public signaturePadOptions = {
    minWidth: 2,
    penColor: 'rgb(0,0,0)',
    backgroundColor: 'rgb(255,255,255)',
    canvasWidth: 250,
    canvasHeight: 150
  }

  constructor(private readonly usersService:UsersService,
    private readonly router:Router,
    private readonly fb: FormBuilder){ }

  ngOnInit(): void{
    this.userForm = this.initForm();
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  initForm(): FormGroup{
    return this.fb.group({
      fullName: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] ],
      telephone: ['', Validators.required],
      sign: ['']
    });
  }

  submitUser(){
    this.usersService.createUser(this.userForm.value).subscribe(
      res => this.router.navigate(['/'])
    )
  }

  drawComplete() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.sign = true;
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

}
