import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  private subject: string = '';
  private email: string = '';
  private message: string = '';

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
    //TODO: Send this form to POST request in backend
  }

  public refreshForm():void {
    this.subjectFormControl.reset();
    this.emailFormControl.reset();
    this.messageFormControl.reset();
  }
  
}
