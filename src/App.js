import React from 'react';
import AppContextTest from "./example/context/ReactContext";
import HookContent from "./example/context/HookContent";
// import CounterContainer from "./containers/CounterContainerE";
// import TodosContainer from "./containers/TodosContainerB";
// import StorageSample from "./components/Storage.Sample";

const App = () => {
    return (
        <div>
            {/*<CounterContainer />*/}
            {/*<hr />*/}
            {/*<TodosContainer />*/}
            {/*<StorageSample />*/}
            <AppContextTest />
            <br />
            <HookContent />
        </div>
    );
};

export default App;