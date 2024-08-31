import { useEffect } from "react";
//sayan

const App = () => {
  var firstName = "Sayan";
  let lastName = "Majumder";
  const roll = 21;
  const names = ["arijit","sunil",8]; //array
  
  const student = { //Object and scoping (as variable)
    firstName,
    lastName:"Singh",
    roll:201,
    parents:{ //Object inside Object named "parents"
      motherName:"Anjali",
      fatherName:"Rocky",
      relatives:{
        vagni:"antara",
        vagna:"dholu",
        vagna2nd:"bholu"
      }
    }
  }

  const students=[student] //object inside array
  
  const show = () => { //scoping (as function)
    let lastName = "mana";
    console.log(lastName);
  }
  // show();

  const printInfo = () => {
    console.log(students);
    return `${students}`
  }

  return (
    <>
      <div>
        {printInfo()}
     
      </div>
    </>
  )
}

export default App;
