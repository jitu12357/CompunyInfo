export class EmployDetail{
    public employID: String = '';
	public employName: String = '';
	public age: number;
	public gender: String= '';
	public indExp: String= '';
	public salary: String= '';
	public designation: String= '';
}

export class ProjectDetail{
	public projectID: String;
	public projectName: String;
	public managerID: String;
	public noOfEmploy: number;
	public technology: String;
}

export class EmpProMap{
	public id: number;
	public employID: String;
	public projectID: String;
}