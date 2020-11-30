# Utils

## Ping
_Make HTTP request to [ping.json](https://raw.githubusercontent.com/AntonioStipic/utils/master/ping/ping.json) to verify internet availability_

Methods to avoid caching:
1. Append query with unique value to url (e.g. `?date=current_timestamp`)
2. Add headers:
    - `Cache-Control: 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0'`
    - `Pragma: 'no-cache'`
    - `Expires: '0'`

## Angular

### Event
_Alternative util for deprecated Ionic 3 Event_
