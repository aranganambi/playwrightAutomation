Feature: Ecommerce validations

Scenario: Placing the order
Given Login to ecommerce application with "aranganambi.elumalai@gmail.com" and "Eras@9080068137"
When Add "ZARA COAT 3" to cart
Then Verify "ZARA COAT 3" is displayed in the cart
Then Enter valid detatails and place the order
Then Verify order present in the order history page