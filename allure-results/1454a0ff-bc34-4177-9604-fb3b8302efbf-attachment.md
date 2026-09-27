# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Client_End_To_End_PO.spec.js >> End ${datas1.productName}
- Location: tests\Client_End_To_End_PO.spec.js:12:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e29]:
    - paragraph [ref=e31]: Thank you for Shopping With Us
    - generic [ref=e32]:
      - generic [ref=e33]: order summary
      - generic [ref=e35]:
        - text: Order Id
        - generic [ref=e36]: 6ab8d21a2be7a4bc2b724499
      - generic [ref=e38]:
        - generic [ref=e40]:
          - generic [ref=e41]: Billing Address
          - paragraph [ref=e42]: aranganambi.elumalai@gmail.com
          - paragraph [ref=e43]: Country - India
        - generic [ref=e45]:
          - generic [ref=e46]: Delivery Address
          - paragraph [ref=e47]: aranganambi.elumalai@gmail.com
          - paragraph [ref=e48]: Country - India
      - generic [ref=e49]: Product Ordered
      - generic [ref=e57]:
        - generic [ref=e58]: ADIDAS ORIGINAL
        - generic [ref=e59]:
          - generic [ref=e60]: by ECOM
          - generic [ref=e61]: $ 11500
      - generic [ref=e62]: View Orders
```