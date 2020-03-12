// const express = require('express');
// const express = express.Router();


// router.get('/*',function (req, res) {
//     res.send('Not Found');
// })

// module.exports = router;


const express = require('express');
const router = express.Router();
let usersList = [
  {
    id: 1,
    name: 'sonter',
    age: 18
  },
  {
    id: 2,
    name: 'nat',
    age: 25
  },
  {
    id: 3,
    name: 'Tle',
    age: 26
  },
]

router.get('/all', function (req, res) {
  res.send(usersList);
})

router.post('/addUser', function (req, res) {
  const newUser = {
    name: req.body.name,
    age: req.body.age
  }
  usersList.push(newUser);
  res.send(newUser);
})

router.delete('/deleteuser', function (req, res) {
  usersList = usersList.filter(user => user.id !== req.query.id)
  res.send(String(usersList.length))
})

router.put('/updateuser/:id', function (req, res) {
  usersList = usersList.map(user => {
    if (user.id === req.params.id) {
      return {
        id: user.id,
        name: req.body.name,
        age: req.body.age,
      }
    } else {
      return user
    }
  })
})

module.exports = router;