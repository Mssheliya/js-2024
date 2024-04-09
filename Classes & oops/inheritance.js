class employee{
    constructor(empid,empname){
        this.empid = empid;
        this.empname = empname;
    };

    printemp(){
        console.log(`EmpId:- ${this.empid}, EmpName:- ${this.empname}`);
    }
};
// create blank object of employee Class And User There Properties
// const emp1 = new employee("01","Mustafa",45000);
// emp1.printemp();

//Created HR Class Which is use all property And metods Of employee Class (Inherited employee Class with using extends keyWord) 
class Hr extends employee{
    constructor(empid,empname,salary){
        // this.empid = empid;
        super(empid,empname);
        this.salary = salary;
    };

    addEmployee(){
        console.log(`Employee Added Empid:- ${this.empid}, EmpName:- ${this.empname}, Salary:- ${this.salary}`);
    }
};
const hr1 = new Hr("01","Mustafa",45000);
hr1.addEmployee();
hr1.printemp();

//* intenceof key will tell you perticuller object are instece of this class 
console.log(hr1 instanceof Hr); //true
console.log(hr1 instanceof employee); //true