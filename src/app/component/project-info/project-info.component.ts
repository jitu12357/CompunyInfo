import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectDetail } from 'src/app/models/employ.model';
import { EmployDetailService } from 'src/app/services/employ-detail.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  projects : ProjectDetail[];
  project : ProjectDetail = new ProjectDetail();
  pID:String = '';
  pName:String='';
  mID:String='';
  empCount1:number=1;
  tUse:String='';
  isValid=false;
  constructor(private employDetailService : EmployDetailService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.project.projectID=this.pID;
    this.project.projectName=this.pName;
    this.project.managerID=this.mID;
    this.project.noOfEmploy=this.empCount1;
    this.project.technology=this.tUse;
    this.employDetailService.addProject(this.project).subscribe(data=>{
      console.log(data);
      this.projects= data;
      this.snack.open("Record Inserted");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
    this.pID='';this.pName='';this.mID='';this.empCount1=0;this.tUse='';
  }

  onUpdate(){
    this.project.projectID=this.pID;
    this.project.projectName=this.pName;
    this.project.managerID=this.mID;
    this.project.noOfEmploy=this.empCount1;
    this.project.technology=this.tUse;
    this.employDetailService.editProject(this.project).subscribe(data=>{
      console.log(data);
      this.projects= data;
      this.snack.open("Record Inserted");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
    this.pID='';this.pName='';this.mID='';this.empCount1=0;this.tUse='';
    this.isValid=false;
  }
  onEdit(project : ProjectDetail){
    this.pID=project.projectID;
    this.pName=project.projectName;
    this.mID=project.managerID;
    this.empCount1=project.noOfEmploy;
    this.tUse=project.technology;
    this.isValid=true;
    this.snack.open("Edit mode");
  }

  viewProject(){
    this.employDetailService.getProject().subscribe(data=>{
      console.log(data);
      this.projects= data;
      this.snack.open("View Record");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
  }

  onDelete(id: String){
    this.employDetailService.delProject(id).subscribe(data=>{
      console.log(data);
      this.projects= data;
      this.snack.open("Removed Record");
    }, error=> {
      console.log(error);
      this.snack.open("Error");
    });
  }
}
