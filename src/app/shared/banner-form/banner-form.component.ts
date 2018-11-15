import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormArray, Form } from '@angular/forms';
import { ApiService } from './api-service.service';
import { FireFilterPipe, SortPipe } from '../pipes/filters/filter.pipe';
import { ToastrService } from 'ngx-toastr';
import { MatStepper } from '@angular/material';
import { timer } from 'rxjs';

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
  type: any;
  error: any;

  public location: AbstractControl;
  public city: AbstractControl;
  public firstName: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  public grade: AbstractControl;
  public isstudent: AbstractControl;
  public istutor: AbstractControl;
  public comment: AbstractControl;
  public otp: AbstractControl;
  cityList: any[] = [];
  locationList: any[] = [];
  filteredOptions: any[] = [];
  gradeList: any[] = [];
  locationChecked: any[] = [];
  sentOtp: boolean = false;
  otpValid: boolean = false;

  source = timer(1000, 1000);
  time: any = 60;
  minute: any = 3;
  second: any = 0;

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
      if(this.data.value.city){
        this.city.setValue((this.data.value.city).toString());
        this.location.setValue(this.data.value.location);
      }
    })
    this.service.getGrades().subscribe(res => {
      this.gradeList = res.json();
    })
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  goForward(stepper: MatStepper) {
    if(stepper.selectedIndex == 0) {
      if(this.locationData.valid) {
        stepper.next();
      } else {
        for (let i in this.locationData.controls) {
          if (this.locationData.controls[i]) {
            this.locationData.controls[i].markAsTouched();
          }
        }
      }
    } else if(stepper.selectedIndex == 1) {
      if(this.personalData.valid) {
        stepper.next();
      } else {
        for (let i in this.personalData.controls) {
          if (this.personalData.controls[i]) {
            this.personalData.controls[i].markAsTouched();
          }
        }
      }
    } else {
      if(this.basicDetail.valid) {
        this.submit();
      } else {
        for (let i in this.basicDetail.controls) {
          if (this.basicDetail.controls[i]) {
            this.basicDetail.controls[i].markAsTouched();
          }
        }
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if(this.data.value) {
      this.type = this.data.value.type;
      this.start = true;
    }
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
          let data = res.json();
          data.forEach(element => {
            element['checked'] = false;
          });
          this.locationList = data;
          this.filteredOptions = data;
        })
      }
    })

    this.location.valueChanges.subscribe(val => {
      let data = this.filter.transform(this.locationList, val);
      data.forEach(ele => {
        ele['checked'] = false;
      })
      this.filteredOptions = data;
    })

    this.personalData = this.fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10),
      Validators.minLength(10)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'otp': ['']
    })
    this.firstName = this.personalData.controls['firstName'];
    this.phone = this.personalData.controls['phone'];
    this.email = this.personalData.controls['email'];
    this.otp = this.personalData.controls['otp'];

    // this.phone.valueChanges.subscribe(val => {
    //   if(val.length == 10) {
    //     this.sentOtp = true;
    //     const subscribe = this.source.subscribe(
    //       val => {
    //         if(val < 60) {
    //           this.second = this.time - val;
    //         } else if(val == 60) {
    //           this.second = this.time - val;
    //           this.minute = this.minute - 1;
    //           this.time = 60;
    //         } else if(val > 60 && val < 120) {
    //           this.second = this.time - val % 60;
    //         } else if(val == 120) {
    //           this.second = this.time - 60;
    //           this.minute--;
    //           this.time = 60
    //         } else if(val > 120 && val <180) {
    //           this.second = this.time - (val/2) % 60;
    //         } else if(val == 180) {
    //           this.second = this.time - 60;
    //           this.
    //         }
    //         // console.log(val)
    //       });
    //   }
    // })

    // this.otp.valueChanges.subscribe(val => {
    //   if(val.length == 6) {
    //     this.otpValid = true;
    //     setTimeout(() => {
    //       this.sentOtp = false;
    //     }, 6000);
    //   }
    // })
    
    this.basicDetail = this.fb.group({
      'leadGradeList': [''],
      'grade': ['', Validators.compose([Validators.required])],
      'comment': ['']
    })

    this.grade = this.basicDetail.controls['grade'];
    this.comment = this.basicDetail.controls['comment'];

  }

  proceed() {
    if(!this.type) {
      this.error = 'Please select any one and then proceed.'
      setTimeout(() => {
        this.error = '';
      }, 3000);
    } else {
      this.start = !this.start;
    }
  }

  submit() {
    let formData = {};
    formData['city'] = this.city.value;
    let list: any = [];
    formData['cityName'] = this.cityList.find(ite => ite.pK == this.city.value).city_name;
    if(this.type == 1) {
      let x = this.locationList.findIndex(i => {
        if(this.location.value == i.location_name + ' - ' + i.pincode) {
          formData['leadLocationList'] = [{ 'locationId': i.pk }];
          formData['locationName'] = i.location_name + ' - ' + i.pincode;
          return true;
        }
      })
    } else {
      this.locationChecked.forEach(element => {
        let x = this.locationList.findIndex(i => {
          if(element == i.location_name + ' - ' + i.pincode) {
            list.push({ 'locationId': i.pk });
            return true;
          }
        })
      });
      formData['leadLocationList'] = list;
    }

    formData['firstName'] = this.firstName.value;
    formData['phone'] = this.phone.value;
    formData['email'] = this.email.value;
    if(this.type == 1) {
      formData['leadGradeList'] = [{ 'gradeId': this.grade.value }];
      formData['grade'] = this.gradeList.find(ite => ite.pk == this.grade.value).grade;
    } else {
      list = [];
      this.grade.value.forEach(element => {
        list.push({ 'gradeId': element });
      });
      formData['leadGradeList'] = list;
    }
    formData['comment'] = this.comment.value;
    this.service.addLead(formData).subscribe(res => {
     if(res._body != 'Lead Successfully Created'){
      this.toastr.warning('Warning', 'Sorry for inconvenience! Something went wrong. Please try to submit again or after sometime.')
     } else {
      this.toastr.success('Success', 'Thank you ' + this.firstName.value + ' for contacting CsqsuareEducation. Our representative will reach you soon.');
      this.dialogRef.close(true);
     }
    }, error => {
      this.toastr.error('Error', 'Error submitting form. Please try after some time.')
    })
  }

  locationSelect(event:string) {
    if (this.locationChecked.length) {
      const index = this.locationChecked.findIndex(i => {
        if(i == event.toString()) {
          return true;
        }
      })
      if(index < 0) {
        const i = this.filteredOptions.findIndex(x => {
          if(x.location_name + ' - ' + x.pincode == event.toString()) {
            return true;
          }
        })
        this.filteredOptions[i].checked = true;
        this.locationChecked.push(event.toString());
      }
    } else {
      const i = this.filteredOptions.findIndex(x => {
        if(x.location_name + ' - ' + x.pincode == event.toString()) {
          return true;
        }
      })
      this.filteredOptions[i].checked = true;
      this.locationChecked.push(event.toString());
    }
  }

  removeLocation(index, event) {
    this.locationChecked.splice(index, 1);
    const i = this.filteredOptions.findIndex(x => {
      if(x.location_name + ' - ' + x.pincode == event) {
        return true;
      }
    })
    this.filteredOptions[i].checked = false;
  }

}
