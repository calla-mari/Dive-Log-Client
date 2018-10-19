# ID=2 sh curl-scripts/json/change-password.sh

curl "http://dive-log-server.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorizatoin: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'${OLD}'",
      "new": "'${NEW}'"
    }
  }'

echo
