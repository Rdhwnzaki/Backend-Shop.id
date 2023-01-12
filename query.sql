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
    total_transaction INT NOT NULL
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
ALTER TABLE users ADD verif INT;
ALTER TABLE users ADD otp VARCHAR(32);
CREATE TABLE status(
    id_status SERIAL PRIMARY KEY,
    name_status VARCHAR NOT NULL
);
ALTER TABLE category ADD photo_category VARCHAR(255) DEFAULT NULL;
ALTER TABLE users ADD photo_user VARCHAR(255) DEFAULT NULL;
ALTER TABLE users ADD phone_user INT DEFAULT NULL;
ALTER TABLE users ADD gender_user VARCHAR(255) DEFAULT NULL;
ALTER TABLE users ADD date_user DATE DEFAULT NULL;
ALTER TABLE users ADD store_name VARCHAR(255) DEFAULT NULL;
ALTER TABLE users ADD store_description VARCHAR(255) DEFAULT NULL;
ALTER TABLE users ADD address_user VARCHAR(255) DEFAULT NULL;
ALTER TABLE products ADD user_id VARCHAR REFERENCES users(id_user);
ALTER TABLE transaction ADD user_id VARCHAR REFERENCES users(id_user);
ALTER TABLE transaction ADD seller_id VARCHAR REFERENCES users(id_user);
ALTER TABLE checkout ADD user_id VARCHAR REFERENCES users(id_user);
ALTER TABLE checkout ADD seller_id VARCHAR REFERENCES users(id_user);
ALTER TABLE checkout ADD product_id INT REFERENCES products(id_product);
ALTER TABLE checkout ADD status_id INT REFERENCES status(id_status);
CREATE TABLE checkout(
    id_checkout SERIAL PRIMARY KEY,
    transaction_id INT REFERENCES transaction(id_transaction));
    SELECT checkout.id_checkout,checkout.transaction_id,checkout.user_id,checkout.seller_id,checkout.product_id,checkout.status_id,transaction.qty_transaction,transaction.total_transaction,user.fullname_user,user.address_user,products.name_product FROM checkout INNER JOIN transaction ON checkout.transaction_id=transaction.id_transaction INNER JOIN user ON checkout.user_id=user.id_user INNER JOIN products ON checkout.product_id=products.id_product

    SELECT transaction.*,products.name_product,products.brand_product,products.price_product,products.photo_product FROM transaction INNER JOIN products ON transaction.product_id=products.id_product
    SELECT transaction.id_transaction,transaction.product_id,transaction.qty_transaction,transaction.total_transaction,transaction.user_id,transaction.seller_id,products.name_product,products.photo_product,products.brand_product,products.price_product FROM transaction INNER JOIN products ON transaction.product_id=products.id_product WHERE user_id = '${user_id}'