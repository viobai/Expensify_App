import React from 'react';
import { Link } from 'react-router-dom';

// <Link> swap info instead of whole page refresh, good for client side routing
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;