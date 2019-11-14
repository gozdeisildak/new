const express = require('express');
const Sequelize = require('sequelize');
const moment=require('moment');
const Op = Sequelize.Op;





const Model = Sequelize.Model;
/*
Order.hasMany(orderDetail, {foreignKey : 'order_id',sourceKey:'id'});
//Order.hasMany(orderDetail, {foreignKey : 'order_id'});
orderDetail.belongsTo(orderDetail, {foreignKey : 'order_id',targetKey:'id'});
*/
class Order extends Model { }
Order.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  orderDate: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  company_id: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  customer_id: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'Order'
  // options
});


class orderDetail extends Model { }
orderDetail.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  },
  detailDesc: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  type: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  price: {
    type: Sequelize.DOUBLE
    // allowNull defaults to true
  }
}, {

  sequelize,
  modelName: 'orderDetail'
  // options
}
);



class Company_Parameters extends Model { }
Company_Parameters.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  value: {
    type: Sequelize.STRING,
    allowNull: true
    // allowNull defaults to true
  },
  company_id: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'Company_Parameters'
  // options
});




/////////////////////////////////////

Order.sync()
.then(()=>{
    Order.bulkCreate([
        {
            name:"deneme",
            orderDate:"2017-11-29 15:17:10",
            company_id:"corebit",
            customer_id:"x"
          },
          {
            name:"deneme",
            orderDate:"2017-11-29 15:17:10",
            company_id:"turkcell",
            customer_id:"y"
          },
          {
            name:"deneme",
            orderDate:"2017-11-29 15:17:10",
            company_id:"turktelekom",
            customer_id:"z"
          },
          {
            name:"deneme",
            orderDate:"2017-11-29 15:17:10",
            company_id:"vodafone",
            customer_id:"t"
          }
    ])
});


orderDetail.sync()
.then(()=>{
  orderDetail.bulkCreate([
  {
    order_id:1,
    detailDesc:"abc",
    type:"sandalye",
    price:300
  },
 {
    order_id:2,
    detailDesc:"abc",
    type:"sandalye",
    price:300
  },
  {
    order_id:2,
    detailDesc:"abc",
    type:"masa",
    price:100
  },
  {
    order_id:2,
    detailDesc:"abc",
    type:"sandalye",
    price:300
  },
  {
    order_id:3,
    detailDesc:"abc",
    type:"masa",
    price:300
  },
  {
    order_id:4,
    detailDesc:"abc",
    type:"sandalye",
    price:500
  },
  {
    order_id:4,
    detailDesc:"abc",
    type:"sandalye",
    price:200
  }
  ])
});


Company_Parameters.sync({force: false})
.then(()=>{
  Company_Parameters.bulkCreate([
    {
    type:"username",
    value:"turkcell123",
    company_id:"turkcell"
  
  },
 {
    type:"vergi_no",
    value:"253",
    company_id:"turkcell"
  
  },
  {
    type:"fiyat_limiti",
    value:"200",
    company_id:"turkcell"
  },
  {
    type:"username",
    value:"turktelekom123",
    company_id:"turktelekom"
  
  },
 {
    type:"vergi_no",
    value:"12345",
    company_id:"turktelekom"
  
  },
  {
    type:"fiyat_limiti",
    value:"300",
    company_id:"turktelekom"
  },
  {
    type:"username",
    value:"corebit123",
    company_id:"corebit"
  
  },
 {
    type:"vergi_no",
    value:"852",
    company_id:"corebit"
  
  },
  {
    type:"fiyat_limiti",
    value:"700",
    company_id:"corebit"
  },
  {
    type:"username",
    value:"vodafone123",
    company_id:"vodafone"
  
  },
 {
    type:"vergi_no",
    value:"253",
    company_id:"vodafone"
  
  },
  {
    type:"fiyat_limiti",
    value:"1000",
    company_id:"vodafone"
  }
  
  ])
});

