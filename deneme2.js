const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database1', 'root', 'Gozde2799', {
    host: 'localhost',
    dialect: 'mysql',
    //  port: 3306,
    //    database: 'stepg'
});

sequelize.authenticate().then(() => {
    console.log('Baglandi');
});

class User extends Model { }


const orders = sequelize.define('Orders', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    company_id: DataTypes.INTEGER,
    musteri_id: DataTypes.INTEGER
});

const orderDetail = sequelize.define('OrderDetail', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    order_id: DataTypes.INTEGER,
    detailDesc: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.DOUBLE
});

orders.sync().then(() => {
    orders.create({
        id: 1,
        name: 'Ahmet',
        orderDate: Date.now(),
        company_id: 1,
        musteri_id: 1
    });
});

orderDetail.sync().then(() => {
    orderDetail.create({
        id: 1,
        order_id: 1,
        detailDesc: 'asd',
        type: 'asdasd',
        price: 300.0
    });
});