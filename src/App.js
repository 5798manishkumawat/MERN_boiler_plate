import React from 'react';


function App() {
  return (
    <div className="App">
     <form action="/" method="POST">
      <div><label>Name :</label> <input type="text" name="name" /></div>
      <div><label>Email Id :</label> <input type="email" name="email" /></div>
      <div>
        <label>Password :</label> <input type="password" name="password" />
      </div>
      <div><button type="submit" value="Register">Register</button></div>
    </form>
    </div>
  );
}

export default App;
