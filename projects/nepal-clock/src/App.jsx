function App() {

  let currDateTime = new Date();

  return (
    <div>
      <h1>Nepal Clock</h1>
      <p>This is the clock that show the time of Nepal all the times</p>
      <p>This is the current time: {currDateTime.getDate()} - {currDateTime.getTime()}</p>
    </div>
  );
}

export default App;