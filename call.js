let person1={
    firstname:"lavanya",
    lastname:"pothanaboina"
}
let person2={
    firstname:"aishwarya",
    lastname:"pothanaboina"
}
let person={
    firstname:"shiva",
    lastname:"the god",
    fullname:function(){
        return this.firstname+" "+this.lastname;

    }
}
console.log(person.fullname());
console.log(person.fullname.call(person1));
console.log(person.fullname.call(person2));
display : function (city,state) {
    console.log("fullname="+this.firstname+" "+this.lastname);
    console.log("city="+city+" "+"state="+state);
}
person.display("gnt","AP");
person.display.call(person1,"hyd","tp");
person.display.call(person2,"bang","india");

