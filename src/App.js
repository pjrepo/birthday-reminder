import React, { useState } from "react";
import data from "./Data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clickHandler = () => setPeople([]);

  return (
    <React.Fragment>
      <main>
        <section>
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button onClick={clickHandler}>Clear All</button>
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
