#!/bin/bash

curl --include --request PATCH "http://localhost:4741/divelogs/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "divelog": {
      "city": "'"${CITY}"'",
      "country": "'"${COUNTRY}"'"
    }
  }'

echo
