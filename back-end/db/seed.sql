\c meeting_room_dev;

INSERT INTO meeting_room (name, capacity, floor) VALUES 
('Blackstone Boardroom', '40', '3'),
('Blackstone Steakhouse', '125', '11'),
('Pursuit Office', '100', '2'),
('Meeting Room 1', '6', '22'),
('Great Hall', '30', '6'),
('Boardroom 2', '12', '21'),
('Hub', '30', '22');

INSERT INTO booking (meeting_name, start_date, end_date, attendees, room_id) VALUES 
('Blackstone - General Meeting', '2023-11-03 17:30:00', '2023-11-03 18:00:00', 'abubakaradnanadams@pursuit.org', '1'),
('Blackstone - General Meeting', '2023-11-04 17:30:00', '2023-11-04 18:00:00', 'abubakaradnanadams@pursuit.org', '1'),
('Blackstone - Pursuit Interview', '2023-11-06 09:00:00', '2023-11-06 14:00:00', 'abubakaradnanadams@pursuit.org', '2'),
('Team Alpha - Scrum Standup', '2023-11-07 10:30:00', '2023-11-07 12:50:00', 'abubakaradnanadams@pursuit.org', '3'),
('Star Team - Backlog Refinement', '2023-11-08 10:30:00', '2023-11-08 12:50:00', 'abubakaradnanadams@pursuit.org', '4');