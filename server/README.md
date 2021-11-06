
# Tour Hobe (Backend)

**Tour Hobe** is a full-service Outbound Tour Operator in Bangladesh. Our main motive to make travel easier to adventure lover peoples.
You can find and choose flexible trip packages to make your travel Easy, Enjoyable and Perfect with **Tour Hobe Ltd.**

## Tech Stack

**server:** Nodejs,Expressjs,Mongodb,Cors,Dotenv,


  
## Live

**Frontend**: [Click](https://trip-hobe.web.app) or visit here: https://trip-hobe.web.app

**Backend**: https://trip-hobe.herokuapp.com
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
  git clone https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-icerahi
```

Go to the project directory

```bash
  cd tourism-or-delivery-website-server-side-icerahi 
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

  