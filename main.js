const {Item} = require("./Domain/Item");
const {Product} = require("./Domain/Product");
const Cart = require("./Domain/Cart").Cart;

let cart = new Cart();

cart.add(new Item(new Product("Ipad Pro")))
cart.add(new Product("Hero Ink Pen"))

