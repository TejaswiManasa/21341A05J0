import React, {useState} from 'react';

function App() {
  const [numberType,setNumberType]=useState('e');
  const [responseData,setResponseData]=useState(null);
  const [error,setError]=useState(null);
  const handleFetchNumbers=async()=>{
    const response=await fetch(`http://localhost:9876/numbers/${numberType}`);
    const data=await response.json();
    setResponseData(data);
    setError(null);
  };
// }
return(
  <div style={{ padding: '20px' }}>
            <h1>Average Calculator</h1>
            <div>
                <label>Select Number Type: </label>
                <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
                    <option value="p">Prime</option>
                    <option value="f">Fibonacci</option>
                    <option value="e">Even</option>
                    <option value="r">Random</option>
                </select>
            </div>
            <button onClick={handleFetchNumbers} style={{ marginTop: '20px' }}>Fetch Numbers</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {responseData && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Response</h2>
                    <p><strong>Previous Window State:</strong> {JSON.stringify(responseData.windowPrevState)}</p>
                    <p><strong>Current Window State:</strong> {JSON.stringify(responseData.windowCurrState)}</p>
                    <p><strong>Fetched Numbers:</strong> {JSON.stringify(responseData.numbers)}</p>
                    <p><strong>Average:</strong> {responseData.avg}</p>
                </div>
            )}
        </div>
);
}
export default App;
