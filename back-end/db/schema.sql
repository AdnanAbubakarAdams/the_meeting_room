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

CREATE TABLE booking (
    id SERIAL PRIMARY KEY,
    meeting_name TEXT NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    attendees TEXT,
    room_id INT REFERENCES meeting_room(id) ON UPDATE CASCADE ON DELETE CASCADE
);