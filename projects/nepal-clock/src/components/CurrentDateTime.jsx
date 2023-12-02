function CurrentDateTime() {
  let currDateTime = new Date();

  return (
    <p className="lead">This is the current time: {currDateTime.toLocaleDateString()} - {currDateTime.toLocaleTimeString()}</p>
  );
}

export default CurrentDateTime;