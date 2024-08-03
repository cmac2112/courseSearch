import React, { useEffect, useState } from 'react';
import axios from "axios"
import '../App.css';

interface HelloResponse {
    commentId: number;
    message: string;
    }
const ApiExample = () => {
    const [count, setCount] = useState(0);
    const [apiResponse, setApiResponse] = React.useState<HelloResponse[]>([]);
  
    const getHello = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/helloworld');
        setApiResponse(response.data);
      } catch (err) {
        console.log(err);
      }
    }; 
    useEffect(() => {
      getHello();
    }, []);
  
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">

          </a>
          <a href="https://react.dev" target="_blank">
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div>
          {apiResponse.map((item) => (
            <div key={item.commentId}>
            <p>{item.message}</p>
            </div>
          ))}
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }

export default ApiExample