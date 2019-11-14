select * from `order` o 
inner join orderDetails od on o.id=od.order_id 
where o.id in (select od2.order_id from orderDetails od2 where od2.type='sandalye');
show profiles



const q2 = (req, res) => {
    order.findAll({
      include:[{
        model: orderDetail,
        include:[{
          model:orderDetail,
          where: {type:'sandalye'}
        }],
        required: true
      }]
    })
    .then(data => {
      return res.send({
        message: 'Sandalyesi olan  butun orderlar',
        orders: data
      })
    }).catch(error => {
      return res.send('Hata Sandalyesi olan  butun orderlar: ', error)
    })
  }
  orderDetail.hasMany(orderDetail, {
    foreignKey: 'order_id',
    sourceKey: 'order_id'
  });