## Requirements

[] Show where, when, what driver is doing
[] Show weekly, Sun-Sat
[] create downloadable .csv file with information regarding:

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
  [] display data (schedule) of selected driver
- UPDATE
  [] on conflicting taks, have option to overwrite
  [x] update existing tasks time/description/location
- DELETE
  [x] delete existing task
  [] option to delete conflicting tasks? (on update?)

## Stretch

- Conflict handling
  [] recommend free time slots in the event of conflict
  [] deployment

## Current task (leave todo # here before stepping away)

[x] display week [0, ..., 51].
[x] display 24 hours and 7 days on each week
[x] display scheduled days
[x] dropdown to select current driver
[x] on click - expand form for data entry
[x] create entries
[x] show entry data on respective slots
[x] filter by driver
[] filter by all

## Refactor / Todo

[] validate new data entry
[] modularize functions for creating new entry
[x] clean up Slot component
[x] refactor #3
[] delete WeekView folder
[x] edit button on existing entries
[x] delete button on existing entries
[] cancel button during edit mode/ create mode
[] delete confirmation
