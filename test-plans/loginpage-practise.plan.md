# LoginPage Practise and ProtoCommerce Shop Test Plan

## Application Overview

Test the Rahul Shetty Academy LoginPage Practise form and its linked ProtoCommerce shop. The plan covers primary authentication, failed and blank submissions, the User-role prompt, and adding/removing an item in the cart. Run each scenario independently from a fresh browser context. Enter the provided account credentials from approved test data at execution time; do not include passwords in plans, reports, or source control.

## Test Scenarios

### 1. Authentication and navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Valid login opens shop with iphone X available

**File:** `tests/loginpage-practise/valid-login-and-shop.spec.js`

**Steps:**
  1. In a fresh browser context, navigate to https://rahulshettyacademy.com/loginpagePractise/.
    - expect: The page title is LoginPage Practise | Rahul Shetty Academy.
    - expect: Username and Password textboxes, Admin and User radio controls, a role dropdown, a terms checkbox, and a Sign In button are displayed.
    - expect: Admin is the selected role, Student is the selected dropdown option, and the checkbox is unchecked in the fresh state.
  2. Fill the Username and Password fields with the supplied valid test credentials.
    - expect: The username contains the supplied username.
    - expect: The password is populated and masked.
  3. Check I Agree to the terms and conditions, then click Sign In.
    - expect: The checkbox is checked before submission.
    - expect: The login flow navigates to https://rahulshettyacademy.com/angularpractice/shop.
  4. Wait for the shop page to finish loading.
    - expect: The page title is ProtoCommerce.
    - expect: The shop contains product cards, including the iphone X heading and Add button.

#### 1.2. Invalid credentials do not navigate to the shop

**File:** `tests/loginpage-practise/invalid-credentials.spec.js`

**Steps:**
  1. Open the login page in a fresh browser context.
    - expect: The login form is displayed.
  2. Enter an invalid username and password, then click Sign In.
    - expect: The page stays on the login URL and does not display the shop.
    - expect: The form remains available for another login attempt.
    - expect: When the authentication error message is shown, it identifies the username/password as incorrect.

#### 1.3. Blank credentials do not open the shop

**File:** `tests/loginpage-practise/blank-credentials.spec.js`

**Steps:**
  1. Open the login page in a fresh browser context and leave both credential fields empty.
    - expect: Username and Password are empty.
  2. Click Sign In without entering credentials.
    - expect: The page remains on the login URL.
    - expect: The shop page does not load.
    - expect: Both credential fields remain empty.

#### 1.4. Terms checkbox toggles and can be checked for login

**File:** `tests/loginpage-practise/terms-checkbox.spec.js`

**Steps:**
  1. Open the login page in a fresh browser context.
    - expect: The I Agree to the terms and conditions checkbox is unchecked.
  2. Check the checkbox, then uncheck it, then check it again.
    - expect: The checkbox checked state follows each interaction and ends checked.

### 2. Role selection

**Seed:** `tests/seed.spec.ts`

#### 2.1. User role prompt can be canceled or confirmed

**File:** `tests/loginpage-practise/user-role-prompt.spec.js`

**Steps:**
  1. Open the login page in a fresh browser context and select the User radio option.
    - expect: A prompt states that the user will have fewer app functionalities and asks whether to proceed.
    - expect: Cancel and Okay controls are available.
  2. Click Cancel.
    - expect: The prompt closes and the login page remains open.
    - expect: No navigation to the shop occurs.
  3. Select User again and click Okay on the prompt.
    - expect: The prompt closes.
    - expect: The login page remains open until the Sign In action is submitted.

#### 2.2. Role dropdown exposes available user types

**File:** `tests/loginpage-practise/role-dropdown.spec.js`

**Steps:**
  1. Open the login page in a fresh browser context and inspect the role dropdown.
    - expect: Student is selected initially.
    - expect: The dropdown provides Student, Teacher, and Consultant options.
  2. Select Teacher, then Consultant, then Student.
    - expect: Each chosen value becomes the selected dropdown value.

### 3. Shop cart

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add iphone X to cart and verify cart details

**File:** `tests/loginpage-practise/iphone-x-cart.spec.js`

**Steps:**
  1. In a fresh browser context, log in using the supplied valid credentials and accept the terms.
    - expect: The browser navigates to the ProtoCommerce shop.
  2. Find the iphone X product card and click its Add button.
    - expect: The checkout cart count increments from 0 to 1.
  3. Open Checkout from the shop navigation.
    - expect: A cart table is displayed with Product, Quantity, Price, and Total columns.
    - expect: The cart contains iphone X with quantity 1 and In Stock status.
    - expect: A Remove button and a Checkout button are displayed.
  4. Click Remove for iphone X.
    - expect: iphone X is removed from the cart.
    - expect: The cart count and displayed cart rows update to reflect the empty cart.
