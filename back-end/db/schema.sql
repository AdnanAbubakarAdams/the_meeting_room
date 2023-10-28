DROP DATABASE IF EXISTS meeting_room_dev;
CREATE DATABASE meeting_room_dev;

\c meeting_room_dev;

-- CREATE TABLE users ();

CREATE TABLE meeting_room (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capacity VARCHAR(10) NOT NULL,
    floor VARCHAR(10) NOT NULL
);

-- CREATE TABLE booking (
--     id SERIAL PRIMARY KEY,
--     room_id TEXT REFERENCES meeting_room(id),
--     meeting_name TEXT NOT NULL,
--     startDate TIMESTAMP NOT NULL,
--     endDate TIMESTAMP NOT NULL,
--     attendees TEXT
-- );