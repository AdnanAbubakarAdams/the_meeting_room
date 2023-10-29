\c meeting_room_dev;

INSERT INTO meeting_room (name, capacity, floor) VALUES 
('Meeting Room 1', '6', '22'),
('Boardroom 2', '12', '21'),
('Hub', '30', '22');

INSERT INTO booking (meeting_name, start_date, end_date, attendees, room_id) VALUES 
('Team Alpha - Scrum Standup', '2023-10-29 10:30:00', '2023-10-29 12:50:00', 'addy12@gmail.com', '1'),
('Star Team - Backlog Refinement', '2023-10-30 10:30:00', '2023-10-30 12:50:00', 'addy12@gmail.com', '2'),
('Blackstone - General Meeting', '2023-10-31 10:30:00', '2023-10-31 12:50:00', 'addy12@gmail.com', '3');