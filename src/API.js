import {
    BASE_URL,
    API_KEY,
    OFFER_BASE_URL,
    ORDERS_BASE_URL,
    ACTIVE_ORDERS,
    SEARCH_BASE_URL,
    USERS_URL,
    REQ_TOKEN_URL,
    SESSION_ID_URL,
} from './Config';

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const apiConfig = {
    fetchOffers: async (searchTerm, page) => {
        const endpoint = searchTerm ?
            `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${OFFER_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchOffer: async (offerId) => {
        const endpoint = `${OFFER_BASE_URL}offer/${offerId}`;
        return await (await fetch(endpoint)).json();
    },
    fetchOrders: async () => {
        const endpoint = `${ORDERS_BASE_URL}`;
        return await (await fetch(endpoint)).json();
    },
    makeOrder: async () => {

    },
    getReqToken: async () => {
        const reqToken = await (await fetch(REQ_TOKEN_URL)).json();
        return reqToken.req_token;
    },
    login: async (reqToken, email, password) => {
        const body = {
            email,
            password,
            req_token: reqToken
        };
        const data = await (
            await fetch(USERS_URL, {
                ...defaultConfig,
                body: JSON.stringify(body)
            })
        ).json();

        if (data.success) {
            const sessionId = await (
                await fetch(SESSION_ID_URL, {
                    ...defaultConfig,
                    body: JSON.stringify({ req_token: reqToken})
                })
            ).json();
            return sessionId;
        }
    },
    register: async (
        name, 
        lastName, 
        email,
        password, 
        phoneNumber,
        street,
        houseNumber,
        postalCode,
        city,
        reqToken
    ) => {
        const body = {
            name,
            lastName,
            email,
            password,
            phoneNumber,
            street,
            houseNumber,
            postalCode,
            city,
            req_token: reqToken,
        }
        const data = await (
            await fetch(USERS_URL, {
                ...defaultConfig,
                body: JSON.stringify(body)
            })
        );

        if (data.success) {
            const sessionId = await (
                await fetch(SESSION_ID_URL, {
                    ...defaultConfig,
                    body: JSON.stringify({ req_token: reqToken})
                })
            ).json();
            return sessionId;
        }
    }
}

export default apiConfig