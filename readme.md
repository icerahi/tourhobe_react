
# Tour Hobe (frontend)

**Tour Hobe** is a full-service Outbound Tour Operator in Bangladesh. Our main motive to make travel easier to adventure lover peoples.
You can find and choose flexible trip packages to make your travel Easy, Enjoyable and Perfect with **Tour Hobe Ltd.**

## Live

[Click](https://trip-hobe.web.app) or visit here: https://trip-hobe.web.app

  
## Tech Stack

**Client:** Reactjs,React-Router-DOM,Firebase, ContextAPI, Bootstrap,React-Hook-Form,Axios,


  
## Features

- Unique Design
- Home Page 
    - Banner,Hot Deals(trips list),Specialities,Newsletter,partners sections
- Continue with Google
- Trip Booking page with details and autofilled Name & Email
- Protected route for unauthenticate users.
- Dynamic Routing
- Login/Logout Indicator on Navbar with profile Image(if have) and Username
- My Bookings,Manage All Bookings,Add a new Trip Option (Only Authenticated User can access)
- User can `cancel` his/her own booking from `my booking` option
- Admin(currently logged user) can make `approve` & `delete` any booking from `manage bookings` option
- Confirmation message before canceling/deleting any booking.
- Data preload spinner
- Realistic Header,Footer
## Run Locally

Clone the project

```bash
  git clone https://github.com/icerahi/tourhobe_react.git 
```

Go to the project directory

```bash
  cd tourhobe_react 
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

# Backend

**Tour Hobe** is a full-service Outbound Tour Operator in Bangladesh. Our main motive to make travel easier to adventure lover peoples.
You can find and choose flexible trip packages to make your travel Easy, Enjoyable and Perfect with **Tour Hobe Ltd.**

## Tech Stack

**server:** Nodejs,Expressjs,Mongodb,Cors,Dotenv,


  
## Live

**Frontend**: [Click](https://trip-hobe.web.app) or visit here: https://trip-hobe.web.app

**Backend**: https://tour-hobe.onrender.com
## Backend API Endpoints

- `/trips` [GET] - Get all trips data
- `/trips` [POST] - create a new trip
- `/trips/id` [GET] - get single trip data
- `/booking` [POST] - create a booking
- `/booking/id` [DELETE] - delete a booking 
- `/booking/id` [PUT] - change a booking status `pending` to `approved`
- `/mybooking?email=example@gmail.com` [GET] - to get all booking information of specific user
- `/allbookings` [GET] - get all booking data
 
## Run Locally

Clone the project

```bash
  git clone https://github.com/icerahi/tourhobe_react.git
```

Go to the project directory

```bash
  cd tourhobe_react 
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Or (if Nodemon Globally installed in System)
```bash
  npm run start-dev
```

  
## Authors

- [Imran Hasan Rahi](https://fb.com/icerahi)

  

  