import React from 'react'
import PropTypes from 'prop-types'
import { decimalToBinary } from '../helpers/decimalToBinary';

const TrueTable = ({trueValues}) => {

    trueValues = Object.values(trueValues);

    const nVariables = Math.log2(trueValues.length);
    let variables = [];

    for(let i=0; i<nVariables; ++i) {
        variables.push(String.fromCharCode(65+i));
    }

    return (
        <table className="true-table">
            <thead>
                <tr>
                    {
                        variables.map((variable, key)=><th key={key}>{variable}</th>)
                    }
                    <th className="table-response">R</th>
                </tr>
            </thead>
            <tbody>
                {
                    trueValues.map((value, index)=>(
                        <tr key={"tr-"+index}>
                            {
                                decimalToBinary(index, nVariables).map((i, key)=>{
                                    return(
                                    <td key={key}>{i}</td>
                                    )
                                })
                            }
                            <td className="table-response">{value}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

TrueTable.propTypes = {
    trueValues: PropTypes.object.isRequired
}

export default TrueTable;
