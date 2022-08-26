import React from "react";

const List = (props) => {
  const { people } = props;
  return (
    <React.Fragment>
      <h1>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
      </h1>
    </React.Fragment>
  );
};

export default List;
