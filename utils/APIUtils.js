const { expect } = require('@playwright/test');

class APIUtils{

    constructor(apiContext, loginPayLoad){
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken(){

    //API call for login scenario
    const loginResponse =  await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: this.loginPayLoad
    });

        await expect(loginResponse, 'API login request failed').toBeOK();
        const loginResponseJson = await loginResponse.json(); 
        const token = loginResponseJson.token;
        expect(token, 'Login token was not returned').toBeTruthy();
        return token;
}

async createOrder(orderPayLoad){
    const token = await this.getToken();

    //API call for ordering scenario
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
            data : orderPayLoad,
            headers: {
                'Authorization' : token,
                'content-type' : 'application/json'
    
            }
    });

    await expect(orderResponse, 'API order creation failed').toBeOK();
    const orderResponseJson = await orderResponse.json();
    const orderId = orderResponseJson.orders?.[0];
    expect(orderId, 'Order ID was not returned').toBeTruthy();
    return { token, orderId };
}
}

module.exports = {APIUtils};