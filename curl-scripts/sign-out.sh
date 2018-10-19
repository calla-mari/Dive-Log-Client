# ID=2 sh curl-scripts/sign-out.sh

curl "http://dive-log-server.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"\

echo
