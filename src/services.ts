import Http from "./utils/Http";

interface CommonHeaderProperties{
    "auth-token": string | null
}

export function login(params: Object){
    return Http.post('api/auth/login', params);
}

export function register(params: Object){
    return Http.post('api/auth/register', params);   
}

export function fetchIngredients(){
    (Http.defaults.headers! as unknown as Record<string, CommonHeaderProperties>).common['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('/api/ingredients');
}

export function fetchCartItems(){
    (Http.defaults.headers! as unknown as Record<string, CommonHeaderProperties>).common['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('/api/cart');
}

export function addToCart(params: Object){
    (Http.defaults.headers! as unknown as Record<string, CommonHeaderProperties>).common['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('/api/cart/add', params);
}

export function fetchPreviousOrders(){
    (Http.defaults.headers! as unknown as Record<string, CommonHeaderProperties>).common['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('/api/order');
}

export function placeOrder(params: Object){
    (Http.defaults.headers! as unknown as Record<string, CommonHeaderProperties>).common['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('/api/order/add', params);
}