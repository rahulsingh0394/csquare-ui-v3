import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { FireFilterPipe } from '../pipes/filters/filter.pipe';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { ApiService } from '../banner-form/api-service.service';
import { BannerFormService } from '../banner-form/banner-form.service';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})
export class LeadFormComponent implements OnInit {

  @Input() city: any;
  leadForm: FormGroup;
  title: any = 'Need home tuition? You are at right place.';
  subjectList: any [] = [];
  filteredSubject: any [] = [];
  locationList: any [] = [];
  filteredLocation: any [] = [];
  shoeMultiple: any = false;

  public grade: AbstractControl;
  public location: AbstractControl;

  constructor(
    private http: Http,
    private filter: FireFilterPipe,
    private fb: FormBuilder,
    private service: ApiService,
    private modal: BannerFormService
  ) { 
    this.initForm();
  }

  ngOnInit() {
    this.http.get('assets/requirements.json').subscribe(res =>{
      this.subjectList = res.json();
      this.filteredSubject = res.json();
    })
    this.service.searchLocationByCity(this.city).subscribe(res => {
      this.locationList = res.json();
      this.filteredLocation = res.json();
    })
  }

  initForm(){
    this.leadForm = this.fb.group({
      'grade': [],
      'location': []
    })
    this.grade = this.leadForm.controls['grade'];
    this.location = this.leadForm.controls['location'];

    this.grade.valueChanges.subscribe(val =>{
      if(val){
        this.filteredSubject = this.filter.transform(this.subjectList, val);
      }
    })

    this.location.valueChanges.subscribe(val =>{
      if(val){
        this.filteredLocation = this.filter.transform(this.locationList, val);
      }
    })
  }

  changeTab(event){
   if(event == 1){
     this.title = 'Get Students for tuition near your localities.';
     this.shoeMultiple = true;
   } else if(event == 0){
     this.title = 'Need home tuition? You are at right place.';
     this.shoeMultiple = false;
   } else {
     this.title = 'Need online tutor? We will help you.';
   }
  }

  student(){
    let value = {};
    value['city'] = this.city;
    value['location'] = this.location.value;
    // value['grade'] = this.grade.value;
    value['type'] = 1;
    this.modal.confirm('','','','',value).subscribe(res =>{

    })
  }

  tutor(){
    let value = {};
    value['city'] = this.city;
    value['location'] = this.location.value;
    // value['grade'] = this.grade.value;
    value['type'] = 2;
    this.modal.confirm('','','','',value).subscribe(res =>{

    })
  }

}
