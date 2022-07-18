import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpProMap } from 'src/app/models/employ.model';
import { EmployDetailService } from 'src/app/services/employ-detail.service';

@Component({
  selector: 'app-assigned-project',
  templateUrl: './assigned-project.component.html',
  styleUrls: ['./assigned-project.component.css']
})
export class AssignedProjectComponent implements OnInit {

  mapps : EmpProMap[];
  mapp : EmpProMap = new EmpProMap();
  id:number;
  pID:String='';
  eID:String='';
  isValid=false;
  constructor(private employDetailService : EmployDetailService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.mapp.employID=this.eID;
    this.mapp.projectID=this.pID;
    this.employDetailService.addmapp(this.mapp).subscribe(data=>{
      console.log(data);
      this.mapps= data;
      this.snack.open("Record Inserted");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
    this.pID='';this.eID='';
  }

  onDelete(id: number){
    this.employDetailService.delmapp(id).subscribe(data=>{
      console.log(data);
      this.mapps= data;
      this.snack.open("Removed Record");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
  }

  viewProject(){
    this.employDetailService.getmapp().subscribe(data=>{
      console.log(data);
      this.mapps= data;
      this.snack.open("View Record");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
  }


}
