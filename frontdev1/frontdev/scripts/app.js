/**
 * Created by user on 5/11/2015.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table border="1" class="table table-striped" ><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+
            '</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td>'+
            '<button onclick="view('+i+')">View</button>'+'</td><td>'+'<button onclick="deleteRow('+i+')">Delete</button>'+'</td></tr>';

    }
    myTable +='<tr><td>'+'</td><td>'+nrNumeUnice()+'</td><td>'+numeDes()+'</td><td>'+'</td><td>'+cifre()+'</td><td>'+medie()+'</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
function salaryTotal(){
    var sum=0;
    for(var i in employeesList){
        sum+=parseFloat(employeesList[i].salary);

    }
    console.log(sum);
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
    clear("firstName");
    clear("lastName");
    clear("phone");
    clear("salary");
}
function deleteLastEmployee(){
    employeesList.pop();
    showList();
}
function view(index) {
        var afisare = employeesList[index].firstName + " " + employeesList[index].lastName + " " + employeesList[index].phone + " " + employeesList[index].salary;
        alert(afisare);
}
function deleteRow(i) {
   delete employeesList[i];
    showList();
}
function numeDes(){
        var contor=[];
        for (var i in employeesList ){
            contor[i]=0;
            for (var j in employeesList)
                 {
                     if(employeesList[i].lastName==employeesList[j].lastName) contor[i]++;

                 }
 }
        var max=0;
        for(var c in contor){
           if(contor[c]>max) max=contor[c] ;
        }

        for(var cont in contor){
            if(contor[cont]==max) var nume=employeesList[cont].lastName;
        }
    console.log(nume);
}
function nrNumeUnice(){
    var contor=[];
   for(var i in employeesList) {
       contor [i] = 0;
       for (var j in employeesList) {
           if (employeesList[i].firstName == employeesList[j].firstName) contor[i]++;
       }
   }
   var nrNume=0;
   for(var c in contor){
       if(contor[c]==1) nrNume++;
   }
    console.log(nrNume);
}
//?????
function cifre() {
    var lista=[];
    for(var i in employeesList){
        for(var j=0;j<employeesList[i].phone.length;j++)
        lista[i]=employeesList[i].phone.split("");
    }

}

function medie(){
    var med=0;var sum=0;
    for (var i in employeesList){
        sum+=employeesList[i].salary;
    }
    med=parseFloat(sum/employeesList.length);
    console.log(med);
}
function sortByType(){
var i =document.getElementById("sortTable").value;
    if(i==1) console.log(employeesList.lastName.sort());
    else if(i==2) console.log(employeesList.firstName.sort());
    else if(i==3) console.log(employeesList.phone.sort());
    else console.log(employeesList.salary.sort());
}
function getVal() {
    var i=document.getElementById("val").value;
    console.log(i);
   /* for(var j in employeesList)
    {
        if(employeesList[j].firstName== i.toString())
        else if (employeesList[j].lastName== i.toString())
        else if (employeesList[j].phone== i)
        else if(employeesList[j].salary==parseFloat(i))
    }*/

}