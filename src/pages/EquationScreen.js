import React, { useState } from 'react'
import TrueTable from '../components/TrueTable';

export const EquationScreen = () => {

    const [equationData, setEquationData] = useState({});

    const handleSearch = (e)=>{
        e.preventDefault();
        
        fetch('http://localhost:8000/trueTable/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: [`equation=${encodeURIComponent(equationData.equation)}`]
        }).then(async(value)=>{
            let res = await value.json();
            setEquationData({...res, equation: equationData.equation});
        });
    }

    return (
        <div className="container mt-5">
            <h2>Ecuación booleana a tabla de verdad</h2>
            <hr />
            <div 
                className="d-flex main-container"
            >
                <form 
                    className="d-flex flex-column col-md-5"
                    onSubmit={handleSearch}
                >
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="A'B+CDA" 
                        aria-label="Search"
                        onChange={({target})=>{
                            setEquationData({...equationData, equation:target.value})
                        }}
                    />
                    <button 
                        className="btn btn-outline-success ml-5 mr-5" 
                        type="submit"
                    >
                        Calcular tabla
                    </button>
                    <br/><br/>
                    <h4>Salida en bruto de la API</h4>
                    <pre className="raw-data">
                        {JSON.stringify(equationData, null, 5)}
                    </pre>
                </form>
                <div className="d-flex col-md-5 response-container">
                    {
                        !equationData.output?<div></div>:<TrueTable trueValues={equationData.output}/>
                    }
                </div>
            </div>
        </div>
    )
}
