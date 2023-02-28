const BASE_URL = ``;
const API_KEY = process.env.REACT_APP_API_KEY;
// Offers
const OFFER_BASE_URL = `${BASE_URL}offers/`;
const SEARCH_BASE_URL = `${OFFER_BASE_URL}offer?api_key=${API_KEY}&query=`;
// Transactions
const TRANSACTIONS_URL = `${BASE_URL}transactions`;
// Orders
const ORDERS_BASE_URL = `${BASE_URL}orders/`;
const ACTIVE_ORDERS = `${ORDERS_BASE_URL}active/`;
// Auth
const USERS_URL = ``;
const REQ_TOKEN_URL = ``;
const SESSION_ID_URL = ``;

export {
    BASE_URL,
    API_KEY,
    OFFER_BASE_URL,
    ORDERS_BASE_URL,
    TRANSACTIONS_URL,
    ACTIVE_ORDERS,
    SEARCH_BASE_URL,
    USERS_URL,
    REQ_TOKEN_URL,
    SESSION_ID_URL,
};