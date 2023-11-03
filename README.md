# Blackstone Meeting Room Booking Web App
The Meeting Room is platform for simplifying the way you schedule and manage meeting rooms.
Whether you're a small startup, a large corporation, or anything in
between is designed to streamline the entire process, making it easier than ever to reserve book, and coordinate your meetings.

## Tech Stack

## Front-end
- HTML/CSS
- Javascript
- React
- Node.js
- Material UI
- Appwrite
- Snyk

## Back-end
- Express
- Postgresql

### Repository
- Project Mono Repo https://github.com/AdnanAbubakarAdams/the_meeting_room
- Github https://github.com/AdnanAbubakarAdams
- Agile-Board https://trello.com/b/9FnOnFy6/blackstone-takehome-agile-board
- Miro https://miro.com/app/board/uXjVNVKxk-g=/

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `nodemon server.js`
Open http://localhost:1991/ to view back-end in your browser.

## Highlights
## User Authentication
- Utilize Appwrite for user athentication and log in.
- User has to sign up to access application full feature.
## Create A Meeting Room
- User can create a meeting room according to users requirements and needs.
- User can view all available rooms that are available for bookings.
## Booking Room
- User can view all booked rooms.
- User can reserve/book a room/rooms.
## Cancel Room / Reservations
- User can cancel a room/reservations

## App Run / Installation
1. Clone repository with link below:
https://github.com/AdnanAbubakarAdams/the_meeting_room.git


2. Front-End: Run npm install to install all packages.
** npm start **

3. Back-End: npm install to install all packages.
** nodemon server.js / node server.js / npm start


### API
Create a RESTFul API service with the below endpoints that read and write to the database. It should accept and return JSON payloads.

| Method   | Endpoint                          | Description                                                                                                                                   | Example JSON Body Payload                                                                                                                                                                                                                                                                                                          |
| -------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/api/meeting-rooms`              | List all meeting rooms                                                                                                                        | n/a                                                                                                                                                                                                                                                                                                                                |
| `POST`   | `/api/meeting-rooms`              | Create a meeting room<br><em>All fields are required</em>                                                                                     | { <br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "Meeting Room 1",<br>&nbsp;&nbsp;&nbsp;&nbsp;"capacity": 3,<br>&nbsp;&nbsp;&nbsp;&nbsp;"floor": 22<br>}                                                                                                                                                                                      |
| `GET`    | `/api/meeting-rooms/:id`          | Retrieve a meeting room by id                                                                                                                 | n/a                                                                                                                                                                                                                                                                                                                                |
| `GET`    | `/api/meeting-rooms/:id/bookings` | Retrieve all **future** bookings of a meeting room                                                                                            | n/a                                                                                                                                                                                                                                                                                                                                |
| `GET`    | `/api/bookings`                   | List all **future** bookings                                                                                                                  | n/a                                                                                                                                                                                                                                                                                                                                |
| `GET`    | `/api/bookings/:id`               | Retrieve a booking by id                                                                                                                      | n/a                                                                                                                                                                                                                                                                                                                                |
| `POST`   | `/api/bookings`                   | Create a booking for a meeting room<br><em>All fields are required except attendees</em><br><em>Validates that room is available to book</em> | { <br>&nbsp;&nbsp;&nbsp;&nbsp;"meetingName": "Scrum Standup",<br>&nbsp;&nbsp;&nbsp;&nbsp;"meetinRoomId": 2,<br>&nbsp;&nbsp;&nbsp;&nbsp;"startDate": "2022-03-23T17:00:00.000Z",<br>&nbsp;&nbsp;&nbsp;&nbsp;"endDate": "2022-03-23T17:30:00.000Z",<br>&nbsp;&nbsp;&nbsp;&nbsp;"attendees": "jdoe@email.com, bdylan@email.com"<br> } |
| `DELETE` | `/api/bookings/:id`               | Cancel a booking by id                                                                                                                        | n/a                                                                                                                                                                                                                                                                                                                                |
| `POST`   | `/api/meeting-rooms/available`    | **Extra challenge:** <br>Retrieve available rooms by search criteria<br><em>startDate and endDate are required</em>                           | { <br>&nbsp;&nbsp;&nbsp;&nbsp;"startDate": "2022-03-23T17:00:00.000Z",<br>&nbsp;&nbsp;&nbsp;&nbsp;"endDate": "2022-03-23T17:30:00.000Z",<br>&nbsp;&nbsp;&nbsp;&nbsp;"floor": 22,<br>&nbsp;&nbsp;&nbsp;&nbsp;"capacity": 3<br> }                                                                                                    |

## PAGES
**Login**
(front-end/public/images/LoginPage.png)
**Rooms**
(front-end/public/images/MeetingRooms.png)
**Booked**
(front-end/public/images/BookedRooms.png)
**Create**
(front-end/public/images/CreateARoom.png)
**Synk Test**
(front-end/public/images/SnykApplicationtest.png)
