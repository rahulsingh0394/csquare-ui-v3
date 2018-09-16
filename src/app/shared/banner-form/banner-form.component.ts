import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormArray, Form } from '@angular/forms';
import { ApiService } from './api-service.service';
import { FireFilterPipe, SortPipe } from '../pipes/filters/filter.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.css']
})
export class BannerFormComponent implements OnInit {

  locationData: FormGroup;
  personalData: FormGroup;
  basicDetail: FormGroup;
  start: any = false;
  activeStep: any = 0;

  public location: AbstractControl;
  public city: AbstractControl;
  public firstName: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  public grade: AbstractControl;
  public isstudent: AbstractControl;
  public istutor: AbstractControl;
  public comment: AbstractControl;
  cityList: any[] = [];
  locationList: any[] = [];
  filteredOptions: any[] = [];
  gradeList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    public dialogRef: MatDialogRef<BannerFormComponent>,
    private filter: FireFilterPipe,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initForm();
    this.service.getCity().subscribe(res => {
      this.cityList = res.json();
      if(this.data.value){
        this.city.setValue((this.data.value.city).toString());
        this.location.setValue(this.data.value.location);
      }
    })
    this.service.getGrades().subscribe(res => {
      this.gradeList = res.json();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
   
  }

  private initForm() {
    this.locationData = this.fb.group({
      'city': ['', Validators.compose([Validators.required])],
      'location': [''],
      'isstudent': [true],
      'istutor': [false]
    });

    this.city = this.locationData.controls['city'];
    this.location = this.locationData.controls['location'];
    this.isstudent = this.locationData.controls['isstudent'];
    this.istutor = this.locationData.controls['istutor'];

    this.city.valueChanges.subscribe(val => {
      this.location.reset();
      if (val) {
        this.service.searchLocationByCity(val).subscribe(res => {
          this.locationList = res.json();
          this.filteredOptions = res.json();
        })
      }
    })

    this.location.valueChanges.subscribe(val => {
      this.filteredOptions = this.filter.transform(this.locationList, val);
    })

    this.personalData = this.fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
      Validators.minLength(10)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])]
    })
    this.firstName = this.personalData.controls['firstName'];
    this.phone = this.personalData.controls['phone'];
    this.email = this.personalData.controls['email'];

    this.basicDetail = this.fb.group({
      'leadGradeList': [''],
      'grade': ['', Validators.compose([Validators.required])],
      'comment': ['']
    })

    this.grade = this.basicDetail.controls['grade'];
    this.comment = this.basicDetail.controls['comment'];

  }

  proceed() {
    this.start = !this.start;
  }

  submit() {
    let formData = {};
    formData['city'] = this.city.value;
    const index = this.locationList.findIndex(item => {
      if (item.location_name + ' - ' + item.pincode == this.location.value) {
        formData['location'] = item.pk;
        return true;
      }
    })
    formData['firstName'] = this.firstName.value;
    formData['phone'] = this.phone.value;
    formData['email'] = this.email.value;
    formData['leadGradeList'] = [{ 'gradeId': this.grade.value }];
    formData['comment'] = this.comment.value;
    this.service.addLead(formData).subscribe(res => {
     if(res._body == 'Email already exists'){
      this.toastr.warning('Warning', 'Email: ' + this.email.value + ' already exists. Please try with different email.')
     } else {
      this.toastr.success('Success', 'Thank you ' + this.firstName.value + ' for contacting CsqsuareEducation. Our representative will reach you soon.');
      this.dialogRef.close(true);
     }
    }, error => {
      this.toastr.error('Error', 'Error submitting form. Please try after some time.')
    })
  }

}
