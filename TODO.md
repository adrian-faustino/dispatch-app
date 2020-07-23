## Requirements

[] Show where, when, what driver is doing
[] Show weekly, Sun-Sat
[] create downloadable .csv file with information regarding:

- driver report within 2, 4, 7, 14, 28 day range
- divisions are over a 52 week period
  i.e. 28 day range will have 13 divisions (52 weeks x 7d / 28d)
  ** refer to PDF diagram for example of .csv file **

## Data

- 3 drivers

- Driver tasks
  [] Pickup
  [] Dropoff
  [] Misc

## Features

- CREATE
  [] new entry with time/description/location/task
- READ
  [] display data (schedule) of selected driver
- UPDATE
  [] on conflicting taks, have option to overwrite
  [] update existing tasks time/description/location
- DELETE
  [] delete existing task
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

## Refactor / Todo

[] validate new data entry
[] modularize functions for creating new entry
[] refactor #3
