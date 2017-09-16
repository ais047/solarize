var bcrypt = require('bcrypt'),
    Model = require('../model/models.js')

module.exports.show = function(req, res) {
  res.render('signup')
}

module.exports.signup = function(req, res) {
  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  var company_name = req.body.companyname
  var email = req.body.email
  var phone = req.body.phone
  var state = req.body.state


  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }
  
  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  
  var newUser = {
    user_name: username,
    salt: salt,
    user_password: hashedPassword,
    company_name: company_name,
    email: email,
    phone: phone,
    state: state
  }
  
  Model.User.create(newUser).then(function() {
    res.redirect('/')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
}

//Add to routers = > 

// router.get('/signup',  codeabove^.show);
// router.post('/signup', codeabove^.signup);

// //Cooresponding sign up HTML FORM = 
// {
//   <form method="POST" action="/signup" class="form-signin">
//     <h2 class="form-signin-heading">Create an account</h2>
    
    
//     <label for="inputUsername" class="sr-only">Username</label>
//     <input type="text" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus>
//     <label for="inputPassword" class="sr-only">Password</label>
//     <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
//     <label for="inputPassword" class="sr-only">Repeat Password</label>
//     <input type="password" id="inputPassword2" name="password2" class="form-control" placeholder="Repeat Password" required>
//     <label for="inputEmail" class="sr-only">Email</label>
//     <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Email" required>
//     <label for="inputPhone" class="sr-only">Phone Number</label>
//     <input type="text" id="inputPhone" name="phone" class="form-control" placeholder="Phone Number" required>
//         <label for="inputState" class="sr-only">State</label>
//     <input type="text" id="inputState" name="state" class="form-control" placeholder="State" required>
//         <label for="inputCompany" class="sr-only">Company Name</label>
//     <input type="text" id="inputComapny" name="company_name" class="form-control" placeholder="Company Name" required>






//     <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
//   </form>
// }