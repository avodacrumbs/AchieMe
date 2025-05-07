const users = [];

exports.signup = (req, res) => {
   const {name, email, password} = req.body;

   if (!name || !email || !password) {
      return res.status(400).json({message: 'All fields are required'});
   }
   const userExists = users.find(user => user.email === email);
   if (userExists) {
      return res.status(400).json({message: 'User already exists'});
   }
   users.push({id: users.length, name, email, password});
   return res.status(201).json({message: 'User created successfully'});
};

exports.login = (req, res) => {
   const {email, password} = req.body;
   const user = users.find(user => user.email === email && user.password === password);
   if (!user) {
      return res.status(401).json({message: 'Invalid credentials'});
   }
   return res.status(200).json({message: 'Login successful', user});
};