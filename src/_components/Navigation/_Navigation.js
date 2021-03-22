import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from './Search';

function Navigation(props) {
    const { updateRoute, search, updateSearch } = props;

    const handleRoute = (routeName) => {
        updateRoute(routeName);
        props.history.push(routeName);
    }
    
    return (
        <div className="navigation flex-btwn">
            <Search search={search} updateSearch={updateSearch}/>
            <div className="nav-icon-container flex-around">
                <div className="align-ctr column">
                    <svg onClick={() => handleRoute('/')} width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.95096 0V1.02046H0V12.9646L4.95096 12.9672V14L13.9907 12.9362L14 1.07119L4.95096 0ZM6.45029 6.53134C6.75389 6.53134 7.00002 6.74118 7.00002 7C7.00002 7.25888 6.75393 7.46866 6.45029 7.46866C6.14666 7.46866 5.90057 7.25888 5.90057 7C5.90052 6.74118 6.1467 6.53134 6.45029 6.53134ZM1.46998 12.0023V1.98356H4.95096V12.0041L1.46998 12.0023Z" fill="black" /></svg>
                    <h2>Pantry</h2>
                </div>
                <div className="align-ctr column">
                    <svg onClick={() => handleRoute('/grocery')} width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56851 14.0001C6.51332 14.0001 7.27923 13.2592 7.27923 12.3451C7.27923 11.4311 6.51332 10.6901 5.56851 10.6901C4.6237 10.6901 3.85779 11.4311 3.85779 12.3451C3.85779 13.2592 4.6237 14.0001 5.56851 14.0001Z" fill="black" /><path d="M10.5611 10.6901C9.61627 10.6901 8.85034 11.4311 8.85034 12.3451C8.85034 13.2591 9.61627 14.0001 10.5611 14.0001C11.5059 14.0001 12.2718 13.2591 12.2718 12.3451C12.2718 11.4311 11.5059 10.6901 10.5611 10.6901Z" fill="black" /><path d="M13.4763 9.0012H4.55611L4.38155 8.02172H11.7132C11.9289 8.02234 12.1229 7.89496 12.202 7.70085L13.9476 3.44514C14.0537 3.18484 13.9215 2.89062 13.6524 2.78804C13.5908 2.76452 13.5251 2.75255 13.4589 2.75275H3.47382L3.05486 0.422243C3.01184 0.175821 2.78947 -0.00344602 2.53117 5.02649e-05H0.523691C0.234468 5.02649e-05 0 0.22688 0 0.506682C0 0.786483 0.234468 1.01331 0.523691 1.01331H2.09476L3.59601 9.59227C3.63904 9.83869 3.8614 10.018 4.1197 10.0145H13.4763C13.7655 10.0145 14 9.78764 14 9.50783C14 9.22803 13.7655 9.0012 13.4763 9.0012Z" fill="black" /></svg>
                    <h2>Grocery</h2>
                </div>
                <div className="align-ctr column">
                    <svg onClick={() => handleRoute('/login')} width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99993 0C4.68405 0 2.79993 1.65596 2.79993 3.69141C2.79993 5.72685 4.68405 7.38281 6.99993 7.38281C9.31581 7.38281 11.1999 5.72685 11.1999 3.69141C11.1999 1.65596 9.31581 0 6.99993 0Z" fill="black" /><path d="M12.2256 9.79439C11.0757 8.76824 9.55139 8.20312 7.93333 8.20312H6.06667C4.44864 8.20312 2.92426 8.76824 1.77439 9.79439C0.630155 10.8155 0 12.1634 0 13.5898C0 13.8164 0.208942 14 0.466667 14H13.5333C13.7911 14 14 13.8164 14 13.5898C14 12.1634 13.3698 10.8155 12.2256 9.79439Z" fill="black" /></svg>
                    {
                        props.user && props.user.id ?
                            <h2>{props.user.username}</h2>
                            :
                            <h2>Login</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navigation)