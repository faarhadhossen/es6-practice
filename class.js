class Student{     //class name start with capital letter
    constructor (sName,sId){     
    this.name = sName;
    this.id = sId;
    this.college = "Comilla Victoria College";
    }
}


const student1 = new Student('Farhad',3011);
const student2 = new Student('Rony', 6280);
console.log(student1);
console.log(student2);


class Father {
    constructor(){
        this.fatherName = "Shachin";
    }
}


class Child extends Father {
    constructor(bName,bAge){
        super();
        this.name = bName;
        this.age = bAge;
    }

    //function can be call inside class. but that function can not have a name.

    paragraph(){
        return 'This baby name is ' + this.name + ' His father name is ' + this.fatherName;
    }
}

const baby1 = new Child('Anrold',2)
const baby2 = new Child('Tommy',4)


console.log(baby1.paragraph());
console.log(baby2);
