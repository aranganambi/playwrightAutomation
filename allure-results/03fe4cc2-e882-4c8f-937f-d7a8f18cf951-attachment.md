# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Locator_Pratice.spec.js >> End_To_End_locator_Practice
- Location: tests\Locator_Pratice.spec.js:36:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - navigation [ref=f1e5]:
    - link "ProtoCommerce" [ref=f1e6] [cursor=pointer]:
      - /url: "#"
    - list [ref=f1e7]:
      - listitem [ref=f1e8]:
        - link "Home" [ref=f1e9] [cursor=pointer]:
          - /url: /angularpractice
      - listitem [ref=f1e10]:
        - link "Shop" [ref=f1e11] [cursor=pointer]:
          - /url: /angularpractice/shop
  - generic [ref=f1e12]:
    - navigation [ref=f1e13]:
      - generic [ref=f1e14]:
        - link "ProtoCommerce Home" [ref=f1e15] [cursor=pointer]:
          - /url: "#"
        - generic:
          - list:
            - listitem
    - table [ref=f1e19]:
      - rowgroup [ref=f1e20]:
        - row [ref=f1e21]:
          - columnheader "Product" [ref=f1e22]
          - columnheader "Quantity" [ref=f1e23]
          - columnheader "Price" [ref=f1e24]
          - columnheader "Total" [ref=f1e25]
          - columnheader [ref=f1e26]
      - rowgroup [ref=f1e27]:
        - row [ref=f1e28]:
          - cell [ref=f1e29]:
            - generic [ref=f1e30]:
              - link [ref=f1e31] [cursor=pointer]:
                - /url: "#"
              - generic [ref=f1e33]:
                - heading [level=4] [ref=f1e34]:
                  - link "Samsung Note 8" [ref=f1e35] [cursor=pointer]:
                    - /url: "#"
                - heading [level=5] [ref=f1e36]:
                  - text: by
                  - link "Sim cart" [ref=f1e37] [cursor=pointer]:
                    - /url: "#"
                - text: "Status:"
                - strong [ref=f1e39]: In Stock
          - cell [ref=f1e40]:
            - spinbutton [ref=f1e41]: "1"
          - cell [ref=f1e42]:
            - strong [ref=f1e43]: ₹. 85000
          - cell [ref=f1e44]:
            - strong [ref=f1e45]: ₹. 85000
          - cell [ref=f1e46]:
            - button "Remove" [ref=f1e47] [cursor=pointer]
        - row [ref=f1e48]:
          - cell [ref=f1e49]
          - cell [ref=f1e50]
          - cell [ref=f1e51]
          - cell [ref=f1e52]:
            - heading "Total" [level=3] [ref=f1e53]
          - cell [ref=f1e54]:
            - heading [level=3] [ref=f1e55]:
              - strong [ref=f1e56]: ₹. 85000
        - row [ref=f1e57]:
          - cell [ref=f1e58]
          - cell [ref=f1e59]
          - cell [ref=f1e60]
          - cell [ref=f1e61]:
            - button "Continue Shopping" [ref=f1e62] [cursor=pointer]
          - cell [ref=f1e63]:
            - button "Checkout" [ref=f1e64] [cursor=pointer]
    - contentinfo [ref=f1e65]:
      - paragraph [ref=f1e67]: Copyright © ProtoCommerce 2018
```