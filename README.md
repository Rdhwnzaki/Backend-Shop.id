# Shop.id - Backend

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rdhwnzaki/Backend-Shop.id.git
```

Go to the project directory

```bash
  cd Backend-Shop.id
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
Start the server

```body
DB_USER=
DB_HOST=
DB_NAME=
DB_PASS=
DB_PORT=

JWT_KEY=

PHOTO_NAME=
PHOTO_KEY=
PHOTO_SECRET=

MAIL_USERNAME=
MAIL_PASSWORD=
OAUTH_CLIENTID=
OAUTH_CLIENT_SECRET=
OAUTH_REFRESH_TOKEN=
```

## API Reference

### API Deploy

```http
  https://real-pear-fossa-shoe.cyclic.app
```

### Users

#### Login

```http
  POST /users/login
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "message": {
        "id_user": "9304ed81-9988-49fd-a715-90ef3c7ec235",
        "email_user": "ridhwanzaki@gmail.com",
        "fullname_user": "ridhwan",
        "role_user": "toko",
        "photo_user": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673524659/shop.id/m2whmojzg1qpiknwghlc.webp",
        "phone_user": "0893543432",
        "gender_user": null,
        "date_user": null,
        "store_name": "NIKE",
        "store_description": "Toko NIKE",
        "address_user": null,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiOTMwNGVkODEtOTk4OC00OWZkLWE3MTUtOTBlZjNjN2VjMjM1IiwiZnVsbG5hbWVfdXNlciI6InJpZGh3YW4iLCJlbWFpbF91c2VyIjoicmlkaHdhbnpha2lAZ21haWwuY29tIiwicm9sZV91c2VyIjoidG9rbyIsImlhdCI6MTY3MzU0NTAxMywiZXhwIjoxNjczNTQ4NjEzfQ.7WQ5wsJOvIqfoLvg34qNXQVlDNuZjiHGkDRI9nmkygY",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiOTMwNGVkODEtOTk4OC00OWZkLWE3MTUtOTBlZjNjN2VjMjM1IiwiZnVsbG5hbWVfdXNlciI6InJpZGh3YW4iLCJlbWFpbF91c2VyIjoicmlkaHdhbnpha2lAZ21haWwuY29tIiwicm9sZV91c2VyIjoidG9rbyIsImlhdCI6MTY3MzU0NTAxMywiZXhwIjoxNjczNjMxNDEzfQ.Q3uXcD-08-VNyhLLmjtpaVGR0DH8MTShvUbqPlSzauQ"
    }
}
```

#### Register

```http
  POST /users/register/:role_user
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "email_user": "ridhwanzakirgx@gmail.com"
    },
    "message": "register success please check your email"
  }
```

#### Verification

```http
  POST /users/verif
```

#### Body

```body
  {
    "email_user":"mgc08959@nezid.com",
    "otp":"569255"
}
```

#### Profile

```http
  GET /users/profile
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_user": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "email_user": "ridhwanzaki@gmail.com",
            "password_user": "$2a$10$kHZQMq6ddkMO9b4IKCBOauncEasO0KzkKMvCEr15AewNbgrjZqNXO",
            "fullname_user": "ridhwan",
            "role_user": "toko",
            "verif": 1,
            "otp": "867322",
            "photo_user": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673524659/shop.id/m2whmojzg1qpiknwghlc.webp",
            "phone_user": "0893543432",
            "gender_user": null,
            "date_user": null,
            "store_name": "NIKE",
            "store_description": "Toko NIKE",
            "address_user": null
        }
    ],
    "message": "Success Get User By Token"
  }
```

#### Photo Profile

```http
  PUT /users/profile
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "photo_user": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673545779/shop.id/vgjnzgtodmlbkelv1smb.png"
    },
    "message": "Update Photo Success"
  }
```

### Products

#### All Products

```http
  GET /products
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_product": 1,
            "name_product": "Crewneck",
            "stock_product": 200,
            "price_product": 240000,
            "brand_product": "H&M",
            "description_product": "Crewneck marvel",
            "category": "Hoddie",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876147/shop.id/rxrpiyqxbb6qj17fx1yw.jpg"
        },
        {
            "id_product": 2,
            "name_product": "Kaos Adidas",
            "stock_product": 150,
            "price_product": 200000,
            "brand_product": "Adidas",
            "description_product": "Kaos adidas",
            "category": "T-Shirt",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876186/shop.id/ovh0imufvtcpgfpsrc1h.jpg"
        },
        {
            "id_product": 3,
            "name_product": "Celana Chino",
            "stock_product": 220,
            "price_product": 210000,
            "brand_product": "Erigo",
            "description_product": "Celana chino erigo",
            "category": "Pants",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876098/shop.id/peglello5gzmjl69ycdo.jpg"
        },
        {
            "id_product": 4,
            "name_product": "Celana Jeans",
            "stock_product": 120,
            "price_product": 250000,
            "brand_product": "Levi's",
            "description_product": "Celana jeans levi's",
            "category": "Pants",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876107/shop.id/zw4ucnzzgshqlptpkjao.jpg"
        },
        {
            "id_product": 5,
            "name_product": "Celana Katun",
            "stock_product": 400,
            "price_product": 120000,
            "brand_product": "Erigo",
            "description_product": "Celana katun erigo",
            "category": "Pants",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673535387/shop.id/g1ixyv5pm9iuepp2mcmk.jpg"
        },
        {
            "id_product": 6,
            "name_product": "Coach Jacket",
            "stock_product": 345,
            "price_product": 120000,
            "brand_product": "H&M",
            "description_product": "Coach jacket h&m",
            "category": "Jacket",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673535615/shop.id/qt7tzv8jbtsazav5s8vi.webp"
        },
        {
            "id_product": 7,
            "name_product": "Nike Air Jordan XX",
            "stock_product": 22,
            "price_product": 800000,
            "brand_product": "Nike",
            "description_product": "Sepatu nike",
            "category": "Shoes",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673536438/shop.id/je9g0poxlha7uln653uy.jpg"
        },
        {
            "id_product": 8,
            "name_product": "Sherpa Jacket",
            "stock_product": 250,
            "price_product": 300000,
            "brand_product": "Zalora Cloth",
            "description_product": "Sherpa jacket zalora",
            "category": "Jacket",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673536697/shop.id/rqjniso2jr4ge0ftj5fp.jpg"
        },
        {
            "id_product": 9,
            "name_product": "Hoddie",
            "stock_product": 250,
            "price_product": 210000,
            "brand_product": "Zalora Cloth",
            "description_product": "Hoddie zalora",
            "category": "Hoddie",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673537122/shop.id/do0sonsfeaukdvxpcdpl.jpg"
        },
        {
            "id_product": 10,
            "name_product": "Celana Buggy",
            "stock_product": 250,
            "price_product": 210000,
            "brand_product": "H&M",
            "description_product": "Celana berbahan bagus",
            "category": "Pants",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673537197/shop.id/aqtkdty9ipio4qphvd4k.jpg"
        }
    ],
    "message": "Get product success"
}
```

#### Product Detail

```http
  GET /products/detail/:id_product
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_product": 62,
            "name_product": "Denim Jacket",
            "stock_product": 250,
            "price_product": 350000,
            "brand_product": "Levi's",
            "description_product": "Denim jacket levi's",
            "user_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876159/shop.id/dtiplymv5y7utpqlwc2m.jpg"
        }
    ],
    "message": "get product success"
}
```

#### Product By Category

```http
  GET /products/category/:id_category
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_product": 61,
            "name_product": "Coach Jacket",
            "stock_product": 200,
            "price_product": 220000,
            "brand_product": "H&M",
            "description_product": "Coach jacket h&m",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876125/shop.id/tf2gtayimd3ip12cwmyr.webp"
        },
        {
            "id_product": 62,
            "name_product": "Denim Jacket",
            "stock_product": 250,
            "price_product": 350000,
            "brand_product": "Levi's",
            "description_product": "Denim jacket levi's",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876159/shop.id/dtiplymv5y7utpqlwc2m.jpg"
        },
        {
            "id_product": 63,
            "name_product": "Sherpa Jacket",
            "stock_product": 250,
            "price_product": 300000,
            "brand_product": "Zalora Cloth",
            "description_product": "Sherpa jacket zalora",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876252/shop.id/d3i91uyquzx6mhg4iqgz.jpg"
        }
    ],
    "message": "get product by category success"
}
```

#### Product By User

```http
  GET /products/product-user
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_product": 1,
            "name_product": "Kaos Nike",
            "stock_product": 280,
            "price_product": 120000,
            "brand_product": "Nike",
            "description_product": "Kaos nike",
            "category": "T-Shirt",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876206/shop.id/fclgpgwbnqkaoowuklrk.jpg"
        },
        {
            "id_product": 57,
            "name_product": "Celana Jeans",
            "stock_product": 120,
            "price_product": 250000,
            "brand_product": "Levi's",
            "description_product": "Celana jeans levi's",
            "category": "Pants",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876107/shop.id/zw4ucnzzgshqlptpkjao.jpg"
        },
        {
            "id_product": 59,
            "name_product": "Kaos Adidas",
            "stock_product": 150,
            "price_product": 200000,
            "brand_product": "Adidas",
            "description_product": "Kaos adidas",
            "category": "T-Shirt",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876186/shop.id/ovh0imufvtcpgfpsrc1h.jpg"
        },
        {
            "id_product": 60,
            "name_product": "Crewneck",
            "stock_product": 200,
            "price_product": 240000,
            "brand_product": "H&M",
            "description_product": "Crewneck marvel",
            "category": "Hoddie",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876147/shop.id/rxrpiyqxbb6qj17fx1yw.jpg"
        },
        {
            "id_product": 61,
            "name_product": "Coach Jacket",
            "stock_product": 200,
            "price_product": 220000,
            "brand_product": "H&M",
            "description_product": "Coach jacket h&m",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876125/shop.id/tf2gtayimd3ip12cwmyr.webp"
        },
        {
            "id_product": 62,
            "name_product": "Denim Jacket",
            "stock_product": 250,
            "price_product": 350000,
            "brand_product": "Levi's",
            "description_product": "Denim jacket levi's",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876159/shop.id/dtiplymv5y7utpqlwc2m.jpg"
        },
        {
            "id_product": 63,
            "name_product": "Sherpa Jacket",
            "stock_product": 250,
            "price_product": 300000,
            "brand_product": "Zalora Cloth",
            "description_product": "Sherpa jacket zalora",
            "category": "Jacket",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876252/shop.id/d3i91uyquzx6mhg4iqgz.jpg"
        },
        {
            "id_product": 65,
            "name_product": "Celana Katun",
            "stock_product": 200,
            "price_product": 200000,
            "brand_product": "Erigo",
            "description_product": "Celana katun erigo",
            "category": "Pants",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876116/shop.id/e4bwvn70w4rekjphuoep.jpg"
        },
        {
            "id_product": 111,
            "name_product": "Hoddie",
            "stock_product": 250,
            "price_product": 210000,
            "brand_product": "Zalora Cloth",
            "description_product": "Hoddie zalora",
            "category": "Hoddie",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876172/shop.id/uboxcyz74zq3na77qqnm.jpg"
        },
        {
            "id_product": 113,
            "name_product": "Celana Buggy",
            "stock_product": 250,
            "price_product": 210000,
            "brand_product": "H&M",
            "description_product": "Celana berbahan bagus",
            "category": "Pants",
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876088/shop.id/sgmnvs3zk5agbkymol3g.jpg"
        }
    ],
    "message": "Success Get Product By user"
}
```

#### Product Archived

```http
  GET /products/product-archived
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_product": 159,
            "name_product": "Nike Air Jordan XX",
            "stock_product": 22,
            "price_product": 800000,
            "brand_product": "Nike",
            "description_product": "Sepatu nike",
            "category": "Shoes",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673321787/shop.id/myazmba0ozgbq3kwcreh.jpg"
        },
        {
            "id_product": 161,
            "name_product": "yyy",
            "stock_product": 666,
            "price_product": 60000,
            "brand_product": "yyy",
            "description_product": "yyy",
            "category": "Pants",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673355981/shop.id/hqzwco5dtcaifwtqalof.jpg"
        },
        {
            "id_product": 163,
            "name_product": "ppp",
            "stock_product": 90,
            "price_product": 90000,
            "brand_product": "ppp",
            "description_product": "ppp",
            "category": "Pants",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673357812/shop.id/qc1vl84gonid2717xbkx.jpg"
        },
        {
            "id_product": 165,
            "name_product": "nnnn",
            "stock_product": 2,
            "price_product": 20000,
            "brand_product": "nnn",
            "description_product": "nnn",
            "category": "Pants",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673508088/shop.id/uii3h6xidqtmtgdz3wl9.jpg"
        },
        {
            "id_product": 166,
            "name_product": "iii",
            "stock_product": 44,
            "price_product": 20000,
            "brand_product": "iii",
            "description_product": "iii",
            "category": "Pants",
            "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673524746/shop.id/xjw1ajyyjuhoisqkadpj.jpg"
        }
    ],
    "message": "Success Get Product By user"
}
```

#### Post Product

```http
  POST /products/post-product
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": {
        "name_product": "Nike Air Jordan XXoo",
        "stock_product": 22,
        "price_product": 800000,
        "category_id": 5,
        "brand_product": "Nike",
        "description_product": "Sepatu nike",
        "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673537701/shop.id/gqlj5cypyuufnfjf2gie.jpg"
    },
    "message": "Input Data Success"
}
```

#### PUT Product

```http
  POST /products/:id_product
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": {
        "name_product": "bbbb",
        "stock_product": 222,
        "price_product": 210000,
        "category_id": 3,
        "brand_product": "bbb",
        "description_product": "bbb",
        "photo_product": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673546508/shop.id/pi0arnmxalfyt715xkvp.jpg"
    },
    "message": "Input Data Success"
}
```

#### DELETE Product

```http
  DELETE /products/:id_product
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "message": "Delete product success"
}
```

### Status

#### POST Status

```http
  POST /status/add-status
```

#### Body

```body
{
    "id_status":1,
    "name_status":"Paid"
}
```

### Category

#### GET Category

```http
  GET /category
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_category": 1,
            "name_category": "T-Shirt",
            "photo_category": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672846115/shop.id/ivlxs059eoetyg3ypgxn.png"
        },
        {
            "id_category": 5,
            "name_category": "Shoes",
            "photo_category": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672846183/shop.id/jzwwbv1unllod9vgjzxo.png"
        },
        {
            "id_category": 3,
            "name_category": "Jacket",
            "photo_category": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672846229/shop.id/hd89nwpyd9nwrlxzsgcl.png"
        },
        {
            "id_category": 4,
            "name_category": "Pants",
            "photo_category": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672846958/shop.id/otvcemnoixm63x5uagen.png"
        },
        {
            "id_category": 2,
            "name_category": "Hoddie",
            "photo_category": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673534810/shop.id/vaxbvlr60whfvm6kks7t.png"
        }
    ],
    "message": "Get category success"
}
```

#### POST Category

```http
  POST /category/post-category
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": {
        "name_category": "sxsx",
        "photo_category": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673548971/shop.id/rzvm2ajcecwxvrdjt0ky.jpg"
    },
    "message": "Input Data Success"
}
```

#### PUT Category

```http
  PUT /category/edit/:id_category
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": {
        "name_category": "Hoddie",
        "photo_category": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673534810/shop.id/vaxbvlr60whfvm6kks7t.png"
    },
    "message": "Input Data Success"
}
```

#### DELETE Category

```http
  DELETE /category/delete/:id_category
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "message": "Delete category success"
}
```

### Transaction

#### GET Transaction

```http
  GET /transaction/get-transaction
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "Get transaction success"
}
```

#### POST Transaction

```http
  POST /transaction/post-transaction
```

#### Body

```body
{
    "product_id": 1,
    "qty_transaction":2,
    "total_transaction": 120000,
    "seller_id":"9304ed81-9988-49fd-a715-90ef3c7ec235"
}
```

### Checkout

#### GET Checkout

```http
  GET /checkout/get-checkout
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "Get checkout success"
}
```

#### GET Checkout Seller

```http
  GET /checkout/get-checkout-seller
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "Get checkout success"
}
```

#### GET Checkout Delivered

```http
  GET /checkout/get-checkout-delivered
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_checkout": 2,
            "transaction_id": 17,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 111,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 210000,
            "name_product": "Hoddie",
            "price_product": 210000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 3,
            "transaction_id": 18,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 63,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 600000,
            "name_product": "Sherpa Jacket",
            "price_product": 300000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 4,
            "transaction_id": 23,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 113,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 210000,
            "name_product": "Celana Buggy",
            "price_product": 210000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 5,
            "transaction_id": 25,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 157,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 1600000,
            "name_product": "Nike Air Jordan",
            "price_product": 800000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 6,
            "transaction_id": 26,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 156,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike AirForce",
            "price_product": 800000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 7,
            "transaction_id": 26,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 156,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike AirForce",
            "price_product": 800000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 8,
            "transaction_id": 27,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 156,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike AirForce",
            "price_product": 800000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 9,
            "transaction_id": 28,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 157,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike Air Jordan",
            "price_product": 800000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 10,
            "transaction_id": 29,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 157,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike Air Jordan",
            "price_product": 800000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 11,
            "transaction_id": 30,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 1,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 120000,
            "name_product": "Kaos Nike",
            "price_product": 120000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 12,
            "transaction_id": 31,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 63,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 600000,
            "name_product": "Sherpa Jacket",
            "price_product": 300000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 13,
            "transaction_id": 32,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 3,
            "total_transaction": 720000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 14,
            "transaction_id": 33,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 480000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 15,
            "transaction_id": 34,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 113,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 420000,
            "name_product": "Celana Buggy",
            "price_product": 210000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 16,
            "transaction_id": 35,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 4,
            "total_transaction": 960000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 17,
            "transaction_id": 36,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 480000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 18,
            "transaction_id": 38,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 61,
            "status_id": 1,
            "qty_transaction": 3,
            "total_transaction": 660000,
            "name_product": "Coach Jacket",
            "price_product": 220000,
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        }
    ],
    "message": "Get checkout success"
}
```

#### GET Checkout Done

```http
  GET /checkout/get-checkout-done
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_checkout": 2,
            "transaction_id": 17,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 111,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 210000,
            "name_product": "Hoddie",
            "price_product": 210000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876172/shop.id/uboxcyz74zq3na77qqnm.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 3,
            "transaction_id": 18,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 63,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 600000,
            "name_product": "Sherpa Jacket",
            "price_product": 300000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876252/shop.id/d3i91uyquzx6mhg4iqgz.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 4,
            "transaction_id": 23,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 113,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 210000,
            "name_product": "Celana Buggy",
            "price_product": 210000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876088/shop.id/sgmnvs3zk5agbkymol3g.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 5,
            "transaction_id": 25,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 157,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 1600000,
            "name_product": "Nike Air Jordan",
            "price_product": 800000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672843313/shop.id/ougbl2ejhwu2xp8iomhj.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 6,
            "transaction_id": 26,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 156,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike AirForce",
            "price_product": 800000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672842907/shop.id/co0a2x3pqxokfujpyw27.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 7,
            "transaction_id": 26,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 156,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike AirForce",
            "price_product": 800000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672842907/shop.id/co0a2x3pqxokfujpyw27.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 8,
            "transaction_id": 27,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 156,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike AirForce",
            "price_product": 800000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672842907/shop.id/co0a2x3pqxokfujpyw27.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 9,
            "transaction_id": 28,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 157,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike Air Jordan",
            "price_product": 800000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672843313/shop.id/ougbl2ejhwu2xp8iomhj.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 10,
            "transaction_id": 29,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 157,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 800000,
            "name_product": "Nike Air Jordan",
            "price_product": 800000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1672843313/shop.id/ougbl2ejhwu2xp8iomhj.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 11,
            "transaction_id": 30,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 1,
            "status_id": 1,
            "qty_transaction": 1,
            "total_transaction": 120000,
            "name_product": "Kaos Nike",
            "price_product": 120000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876206/shop.id/fclgpgwbnqkaoowuklrk.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 12,
            "transaction_id": 31,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 63,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 600000,
            "name_product": "Sherpa Jacket",
            "price_product": 300000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876252/shop.id/d3i91uyquzx6mhg4iqgz.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 13,
            "transaction_id": 32,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 3,
            "total_transaction": 720000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876147/shop.id/rxrpiyqxbb6qj17fx1yw.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 14,
            "transaction_id": 33,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 480000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876147/shop.id/rxrpiyqxbb6qj17fx1yw.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 15,
            "transaction_id": 34,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 113,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 420000,
            "name_product": "Celana Buggy",
            "price_product": 210000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876088/shop.id/sgmnvs3zk5agbkymol3g.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 16,
            "transaction_id": 35,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 4,
            "total_transaction": 960000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876147/shop.id/rxrpiyqxbb6qj17fx1yw.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 17,
            "transaction_id": 36,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 60,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 480000,
            "name_product": "Crewneck",
            "price_product": 240000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876147/shop.id/rxrpiyqxbb6qj17fx1yw.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        },
        {
            "id_checkout": 18,
            "transaction_id": 38,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 61,
            "status_id": 1,
            "qty_transaction": 3,
            "total_transaction": 660000,
            "name_product": "Coach Jacket",
            "price_product": 220000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876125/shop.id/tf2gtayimd3ip12cwmyr.webp",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        }
    ],
    "message": "Get checkout success"
}
```

#### GET Checkout Detail

```http
  GET /checkout/get-checkout-detail/:id_checkout
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_checkout": 12,
            "transaction_id": 31,
            "user_id": "55cc8c76-7b2a-447a-9e72-edc1f07de964",
            "seller_id": "9304ed81-9988-49fd-a715-90ef3c7ec235",
            "product_id": 63,
            "status_id": 1,
            "qty_transaction": 2,
            "total_transaction": 600000,
            "name_product": "Sherpa Jacket",
            "price_product": 300000,
            "photo_product": "http://res.cloudinary.com/dtvq0fxfo/image/upload/v1668876252/shop.id/d3i91uyquzx6mhg4iqgz.jpg",
            "name_status": "Shipping",
            "fullname_user": "Ridhwan Muhammad Zaki",
            "address_user": "Kp Cimareme Nomor 57"
        }
    ],
    "message": "get checkout success"
}
```

#### POST Checkout

```http
  POST /post-checkout
```

#### Body

```body
{
    "transaction_id":18,
    "seller_id":"9304ed81-9988-49fd-a715-90ef3c7ec235",
    "product_id":63
}
```

#### PUT Checkout

```http
  PUT /checkout/put-checkout
```

#### Body

```body
{
    "id_checkout":18
}
```

#### PUT Checkout By Params

```http
  PUT /checkout/put-checkout-id/:id_checkout
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "Put status checkout success"
}
```
