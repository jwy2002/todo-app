import React from 'react';
import CounterContainer from "./containers/CounterContainerE";
import TodosContainer from "./containers/TodosContainerB";

const App = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    );
};

export default App;