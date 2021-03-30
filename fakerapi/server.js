const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });
const incrementId = (id=>()=>id++)(0) // as long as server is running, it starts from 0 > 1 > 2

class User {
    constructor() {
        
        this._id = incrementId();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.phone = faker.phone.phoneNumber();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {

        this._id = incrementId();
        this.name = faker.company.companyName();
        this.address = faker.address.address();
        this.street = faker.address.street();
        this.city = faker.address.city();
        this.state = faker.state.state();
        this.zipCode = faker.address.zipCode();
        this.country =faker.address.country();

    }
}

// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();
// let email = faker.internet.email();
// let phoneNumber = faker.phone.phoneNumber();
// let password = faker.internet.password();

// let name = faker.name.name();
// let address = faker.address.address();
// let city = faker.address.city();

    
app.get("/api/users/new", (req, res) => {
   res.json({
       users: [
        { 
          _id: incrementId(),   
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phoneNumber: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          password: faker.internet.password(),
       },
       ],
   })
});

// app.get("/api/users/new", (req, res) => {
//     const User = new User();
//     res.json({
//         "First Name": user.firstName,
//         "Last Name": user.lastName,
//         "Phone Number": user.phoneNumber,
//         "Email": user.email,
//         "Password": user.password,

//     })
//  });

app.get("/api/companies/new", (req, res) => {
    res.json({
        companies: [
            {
                _id: incrementId(), 
                name: faker.company.companyName(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country(),    
            },
        ],
    })
});



app.get("/api/user/company", (req, res) => {
    res.json({
        users: [
            {   
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              phoneNumber: faker.phone.phoneNumber(),
              email: faker.internet.email(),
              password: faker.internet.password(),
           },
           ],
        companies: [
            {
                name: faker.company.companyName(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country(),    
            },
        ],
    })
});






app.listen( port, () => console.log(`Listening on port: ${port}`) );
// console.log(`User: ${firstName} ${lastName} ${email} ${phoneNumber} ${password}`);
// console.log();



// app.put("/api/user/company", (req, res) => {
//     // we can get this `id` variable from req.params
//     const id = req.params.id;
//     // assuming this id is the index of the users array we can replace the user like so
//     users[id] = req.body;
//     // we always need to respond with something
//     res.json( { status: "ok" } );
// });



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );