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