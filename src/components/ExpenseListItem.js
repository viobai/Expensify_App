import React from 'react'; // for using jsx
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={'/edit/'+id} >
            <h3>{description}</h3>
        </Link>
        <p>{amount/100} - {createdAt}</p>
        
    </div>
);

export default (ExpenseListItem);