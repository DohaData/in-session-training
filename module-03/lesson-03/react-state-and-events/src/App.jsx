// App.jsx
// ... previous import stays unchanged
import { useState } from 'react';

import Counter from '../components/Counter';


function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={theme}>
      <h1>React - state and events</h1>

      <Counter />
      <select onChange={ event => setTheme(event.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
