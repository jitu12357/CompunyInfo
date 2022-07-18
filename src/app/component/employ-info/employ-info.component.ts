import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployDetail } from 'src/app/models/employ.model';
import { EmployDetailService } from 'src/app/services/employ-detail.service';

@Component({
  selector: 'app-employ-info',
  templateUrl: './employ-info.component.html',
  styleUrls: ['./employ-info.component.css']
})
export class EmployInfoComponent implements OnInit {
  employs : EmployDetail[];
  employ : EmployDetail = new EmployDetail();
  empID:String = '';
  empName:String='';
  age:number=0;
  gender:String='';
  indexp:String='';
  salary:String='';
  design:String='';
  isAdded=false;
  
  constructor(private employDetailService : EmployDetailService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  onSubmit(){
    this.employ.employID = this.empID;
    this.employ.employName = this.empName;
    this.employ.age = this.age;
    this.employ.gender = this.gender;
    this.employ.indExp = this.indexp;
    this.employ.salary = this.salary;
    this.employ.designation = this.design;
    this.employDetailService.addemploy(this.employ).subscribe(data=>{
      console.log(data);
      this.employs= data;
      this.snack.open("Record Inserted");
      this.isAdded = true;
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
    this.empID='';this.empName='';this.age=0;this.gender='';this.indexp='';this.salary='';this.design='';
  }

  onUpdate(){
    this.employ.employID = this.empID;
    this.employ.employName = this.empName;
    this.employ.age = this.age;
    this.employ.gender = this.gender;
    this.employ.indExp = this.indexp;
    this.employ.salary = this.salary;
    this.employ.designation = this.design;
    this.employDetailService.editemploy(this.employ).subscribe(data=>{
      console.log(data);
      this.employs= data;
      this.snack.open("Record Updated");
      this.isAdded = true;
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
    this.empID='';this.empName='';this.age=0;this.gender='';this.indexp='';this.salary='';this.design='';
  }

  onEdit(emp: EmployDetail){
    this.empID=emp.employID;this.empName=emp.employName;this.age=emp.age;this.gender=emp.gender;this.indexp=emp.indExp;this.salary=emp.salary;this.design=emp.designation;
    this.snack.open("Edit mode");
  }

  viewEmploy(){
    this.employDetailService.getemploy().subscribe(data=>{
      console.log(data);
      this.employs= data;
      this.snack.open("View Record");
      this.isAdded = true;
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
  }

  onDelete(id: String){
    this.employDetailService.delemploy(id).subscribe(data=>{
      console.log(data);
      this.employs= data;
      this.snack.open("Removed Record");
      this.isAdded = true;
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
  }

}
