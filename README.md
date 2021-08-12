 
```
$ NODE_DEBUG=server,stripe,worker node index.js
```
 

### Placing an order

Fastest way to place an order is:

1. [create a user](#create-user)
2. [create a token ](#create-token)
3. [list menu](#list-menu-items)
4. [update the cart](#update-cart)
5. [place the order](#create-order)


### Ping
Check API status with:

```
$ curl localhost:3000/ping
```

---

### Users

#### Create user
Required fields: 
- name: string
- email: string
- address: string
- password: string
- tosAgreement: boolean

```
$ curl POST /users
```

#### Read user 
Required fields: 
- email: string

Requires `token` header for authentication. 

```
$ curl GET /users/:email
```

#### Update user
Required fields: 
- email: string

Optional fields (at least one is required):
- name: string
- address: string
- password: string

Requires `token` header for authentication.

```
$ curl PUT /users/:email
```

#### Destroy user
Required fields: 
- email: string

Requires `token` header for authentication.

```
$ curl DELETE /users/:email
```

---

### Access Tokens

Required fields: 
- email: string
- password: string

#### Create token
```
$ curl POST /tokens
```

Required fields: 
- id: string

#### Read token 
```
$ curl GET /tokens/:id
```

Required fields: 
- id: string
- extend: boolean

#### Update token
```
$ curl PUT /tokens/:id
```

Required fields: 
- id: string

#### Destroy token
```
$ curl DELETE /tokens/:id
```

---

### Menu

#### List menu items

Requires `token` header for authentication.

```
$ curl Get /menu
```

---

### Shopping Cart
Each user has only one cart. A cart may contain any number of menu items.

#### Read cart 

Requires `token` header for authentication.

```
$ curl GET /cart
```

#### Update cart

Adds or substracts menu items from cart. 
Positive values of quantity increment, negative values decrement.

Required fields: 
- menu_item_id: string
- quantity: integer

Requires `token` header for authentication.

```
$ curl PUT /cart
```

#### Destroy cart

Empties the cart or a single item

Optional fields: 
- menu_item_id: string

Requires `token` header for authentication.

```
$ curl DELETE /cart?menu_item_id
```

---

### Orders

#### Create order
Creates an order based on the current cart.

Required fields: 
- card_number: string
- card_exp_month: string
- card_exp_year: string
- card_cvc: string

Requires `token` header for authentication.

```
$ curl POST /orders
```

#### Read order 

Required fields: 
- id: string

Requires `token` header for authentication.

```
$ curl GET /orders?:id
```

---

### Note on HTTPS

HTTPS is disabled by default.
To use HTTPS, update the add your certificate and private key files to the project and update `config.js`.

