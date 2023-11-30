function Hello() {

  let name = 'Santosh';
  let age = 24;
  let fullName = () => { return 'Santosh Shah';
}
  return <p>
      Hello everyone my name is {fullName()}, you guys can call me {name} just {name}, I am {age} years old.
  </p>
}

export default Hello;