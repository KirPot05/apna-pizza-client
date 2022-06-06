import Cart from './Cart';
// import Login from './Login';

function Private() {
    // const token = localStorage.getItem('auth-token');

    return(
        // token ? <Cart/> : <Login/>
        <Cart/>
    );
}

export default Private;