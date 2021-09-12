class vehicle {
  constructor( manufacture_company, name ,iD) {
    this.manufacture_company=manufacture_company;
    this.name=name;
    this.iD;
  }
  present() {
    return 'I have a ' + this.manufacture_company;
  }
}
 
 
 
 
class Car extends vehicle {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }

  class airplane extends vehicle {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }

  class employee {
    constructor(name, dateOFbirth ,id,type) {
      this.name = name;
      this.dateOFbirth =dateOFbirth;
      this.id =id;
      this.type = type;
    }
  }

  class travel {
    constructor(type) {
      this.type = type;
    }
  }

  function myfun(){
    var getSelectedValue = document.querySelector( 'input[name="flex"]:checked');
if(getSelectedValue == "driver") {
alert("The trip has been added to the car list");
}
else{
  alert("The trip has been added to the flight list");

}
  }