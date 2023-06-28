import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  private subject: string = '';
  private email: string = '';
  private message: string = '';
  public isLoading: boolean = false;
  public showOk: boolean = false;
  public showError: boolean = false;

  constructor(private httpClient: HttpClient) {}
  
  public subjectFormControl: FormControl = new FormControl('', [Validators.required])
  public emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public messageFormControl: FormControl = new FormControl('', [Validators.required]);

  public getEmailErrorMessage():string {
    if (this.emailFormControl.hasError('required')) {
      return 'Required field';
    }
    return this.emailFormControl.hasError('email') ? 'The email is not valid' : '';
  }

  public onSubmit():void {
    if (this.subjectFormControl.invalid || this.emailFormControl.invalid || this.messageFormControl.invalid)
      return;
    this.subject = this.subjectFormControl.value;
    this.email = this.emailFormControl.value;
    this.message = this.messageFormControl.value;
    var requestBody = {
      "subject": this.subject,
      "email": this.email,
      "message": this.message
    };
    this.isLoading = true;
    this.sendMail(requestBody).subscribe(response => {
      setTimeout(() => {
        this.isLoading = false;
        this.refreshForm();
      }, 1000);
      setTimeout(() => {
        this.showOk = true;
      }, 1500);
      setTimeout(() => {
        this.showOk = false;
      }, 6500);
    },
    error => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      setTimeout(() => {
        this.showError = true;
      }, 1500);
      setTimeout(() => {
        this.showError = false;
      }, 6500);
    });
  }

  public refreshForm():void {
    this.subjectFormControl.reset();
    this.emailFormControl.reset();
    this.messageFormControl.reset();
  }
  
  private sendMail(emailForm:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post("https://stefanstefanapi.azurewebsites.net/api/mail/contact", emailForm, { headers });
  }

}
