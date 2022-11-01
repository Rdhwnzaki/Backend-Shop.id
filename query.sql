CREATE TABLE category(
    id_category SERIAL PRIMARY KEY,
    name_category VARCHAR NOT NULL
);

CREATE TABLE products(
    id_product SERIAL PRIMARY KEY,
    name_product VARCHAR NOT NULL,
    stock_product INT NOT NULL,
    price_product INT NOT NULL,
    category_id INT REFERENCES category(id_category)
);

CREATE TABLE transaction(
    id_transaction SERIAL PRIMARY KEY,
    email_transaction VARCHAR NOT NULL,
    product_id INT REFERENCES products(id_product),
    amount_transaction INT NOT NULL,
    total_transaction INT NOT NULL,
);

INSERT INTO category(id_category,name_category) VALUES(1, 'T-Shirt'),(2, 'Shorts'),(3, 'Jacket'),(4, 'Pants');

INSERT INTO products(id_product, name_product, stock_product, price_product, category_id) VALUES(1,'Kaos Erigo',50,120000,1);

SELECT products.name_product,products.stock_product,products.price_product,category.name_category as category
FROM products
INNER JOIN category
ON products.category_id = category.id_category;

INSERT INTO transaction(id_transaction,email_transaction,product_id,amount_transaction,total_transaction,status) VALUES(1, 'zaki85.rmz@gmail.com', 1, 1, 120000, 1);

CREATE TABLE users(
    id_user VARCHAR PRIMARY KEY,
    email_user VARCHAR NOT NULL,
    password_user VARCHAR NOT NULL,
    fullname_user VARCHAR,
    role_user VARCHAR
);

ALTER TABLE products ADD photo_product VARCHAR(255);
INSERT INTO users(id_user,email_user,password_user,fullname_user,role_user)VALUES('1','zaki@pijar.id','zaki123','ridhwan zaki','admin');