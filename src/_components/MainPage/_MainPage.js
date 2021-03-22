import React, { useState } from 'react';
import routes from '../../_routes/_main-routes';
import Navigation from '../Navigation/_Navigation';

function MainPage(props) {
    const { route, updateRoute } = props;
    const [search, updateSearch] = useState('');
    const [filters, updateFilters] = useState([]);

    const propObj = { search, filters, updateSearch, updateFilters };
    return (
        <div className="main-page-content">
            <Navigation updateRoute={updateRoute} route={route} search={search} updateSearch={updateSearch} />
            {routes(propObj)}
        </div>
    )
}

export default MainPage;