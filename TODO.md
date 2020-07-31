## Requirements

[x] Show where, when, what driver is doing
[x] Show weekly, Sun-Sat
[x] create downloadable .csv file with information regarding:

- driver report within 2, 4, 7, 14, 28 day range
- divisions are over a 52 week period
  i.e. 28 day range will have 13 divisions (52 weeks x 7d / 28d)
  ** refer to PDF diagram for example of .csv file **

## Data

- [x] 3 drivers

- Driver tasks
  [x] Pickup
  [x] Dropoff
  [x] Misc

## Features

- CREATE
  [x] new entry with time/description/location/task [] locations...?
- READ
  [x] display data (schedule) of selected driver
- UPDATE
  [x] on conflicting taks, have option to overwrite
  [x] update existing tasks time/description/location
- DELETE
  [x] delete existing task

## Stretch

- Conflict handling
  [x] recommend free time slots in the event of conflict
  [] deployment
  [] suggestion - suggest days for within that user's availability AND is free time slot
  [] resource tab (hours worked - pie chart/line graph)
  [x] on hover, display edit/delete buttons
  [] debounce buttons
  [x] driver availability
  [x] show slots that are within driver availability
  [x] highlight bookings that are outside of driver availability
  [x] color code by user

## Current task (leave todo # here before stepping away)

[x] display week [0, ..., 51].
[x] display 24 hours and 7 days on each week
[x] display scheduled days
[x] dropdown to select current driver
[x] on click - expand form for data entry
[x] create entries
[x] show entry data on respective slots
[x] filter by driver
[x] filter by all
[x] display conflicting task warning
[x] display suggestions
[x] create navbar
[x] driver availability (hours and days)
[x] edit error prompt

## Refactor / Todo

[x] validate new data entry
[x] modularize functions for creating new entry
[x] clean up Slot component
[x] refactor #3
[x] delete WeekView folder
[x] edit button on existing entries
[x] delete button on existing entries
[x] cancel button during edit mode/ create mode
[x] delete confirmation
[x] after creating new entry, switch current driver to that user
[x] edit entry - set default option val to current driver
[x] differentiate hour vs date vs time on db
[x] replace uuidv4
[x] use constants for basic buttons "delete, edit, submit"
[] feedback - on success/error
[x] navbar toggle button
[x] change entry form to use bootstrap
[x] edit availability
[x] allow edit availability on days not having time (i.e. Sunday for Chris)
[x] edit mode cancel button
[x] driver view filters (highlight days outside availability, highlight bookable slots)

## Bugs

[x] entry validation - when editing an entry from same user, it gives an TIMESLOT_TAKEN error
[x] when making a conflict and changing only the description and not the driver
[x] delete confirm view does not close when changing weeks
[x] css style on bookable days does not go away when switching to "All" drivers
[x] time table does not submit refresh time after submission
[] editing color block
[] bug after deleting a user (cannot read driver of null)
