#!/bin/bash

curl --include --request POST 'http://localhost:4741/divelogs' \
  --header "Content-Type: application/json" \
  --data '{
    "divelog": {
      "city": "'"${CITY}"'",
      "country": "'"${COUNTRY}"'"
    }
  }'

echo
