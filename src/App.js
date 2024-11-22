import React, { useState } from 'react';

// Exercise 1 - 1: ClickMe Button
function ClickButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

// Exercise 1 - 2: Toggle Button
function ToggleButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>Toggle</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

// Exercise 1 - 3: Three Buttons
function ButtonClicker() {
  const [clicked, setClicked] = useState("");

  return (
    <div>
      {["Button1", "Button2", "Button3"].map((btn, i) => (
        <button key={i} onClick={() => setClicked(`Button #${i + 1} was clicked`)}>
          {btn}
        </button>
      ))}
      <p>{clicked}</p>
    </div>
  );
}

// Exercise 1 - 4: Counter
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

// Exercise 2 - 1: Display List from Array
function DisplayTab({ tab }) {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Exercise 2 - 2: Display List with Element Numbers
function DisplayTabNumbered({ tab }) {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>Element {index + 1} is: {item}</li>
      ))}
    </ul>
  );
}

// Exercise 2 - 3: Remove Item on Click
function ClickableList({ tab }) {
  const [items, setItems] = useState(tab);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => removeItem(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// Exercise 2 - 4: Parameterized DisplayTab
function DisplayTabParam({ tab }) {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>Element {index + 1} is: {item}</li>
      ))}
    </ul>
  );
}

// Exercise 3 - 1: Authentication Form
function AuthForm() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    setUsers([...users, { username, password }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} <button onClick={() => setUsers(users.filter((_, i) => i !== index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exercise 4 - 1: Add Div to Page
function AddDivForm() {
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const height = e.target.height.value;
    const width = e.target.width.value;
    const backgroundColor = e.target.color.value;

    setDivs([...divs, { height, width, backgroundColor }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="height" placeholder="Height" required />
        <input name="width" placeholder="Width" required />
        <input name="color" placeholder="Background Color" required />
        <button type="submit">Add Div</button>
      </form>
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.backgroundColor,
              border: "1px solid black",
              margin: "5px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <div>
      <h1>Lab 5: React Components</h1>
      
      <h2>Exercise 1 - 1: ClickMe Button</h2>
      <ClickButton />

      <h2>Exercise 1 - 2: Toggle Button</h2>
      <ToggleButton />

      <h2>Exercise 1 - 3: Button Clicker</h2>
      <ButtonClicker />

      <h2>Exercise 1 - 4: Counter</h2>
      <Counter />

      <h2>Exercise 2 - 1: Display List</h2>
      <DisplayTab tab={tab} />

      <h2>Exercise 2 - 2: Display List with Element Numbers</h2>
      <DisplayTabNumbered tab={tab} />

      <h2>Exercise 2 - 3: Clickable List</h2>
      <ClickableList tab={tab} />

      <h2>Exercise 2 - 4: Parameterized DisplayTab</h2>
      <DisplayTabParam tab={tab} />

      <h2>Exercise 3 - 1: Authentication Form</h2>
      <AuthForm />

      <h2>Exercise 4 - 1: Add Div</h2>
      <AddDivForm />
    </div>
  );
}

export default App;
