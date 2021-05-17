import React from 'react';
// import NewsList from "./NewsList";
// import Categories from "./Categories";
import NewsPage from "../pages/Pages";
import {Route} from "react-router-dom";
// import axios from 'axios';

const App = () => {

    // const [data, setData] = useState(null);

    // const onClick = () => {
    //     axios.get('http://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => {
    //             setData(response.data);
    //         });
    // }

    // const onClick = async () => {
    //     try {
    //         const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=62b3c5cb0d3a4d9da4b6aa19645e8da8');
    //         setData(response.data);
    //     }
    //     catch(e) {
    //         console.log(e);
    //     }
    // }

    // return (
    //     <div>
    //         <div>
    //             <button onClick={onClick}>불러오기</button>
    //         </div>
    //         { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
    //     </div>
    // );

    // const [category, setCategory] = useState('all');
    // const onSelect = useCallback(category => setCategory(category), []);

    // return (
    //     <>
    //         <Categories category={category} onSelect={onSelect} />
    //         <NewsList category={category} />
    //     </>
    // );

    return <Route path="/:category?" component={NewsPage} />;
};

export default App;