#### Get a new latest set of tweets

Install the twurl gem:
```
gem install twurl
```

Set the auth of the twurl gem:
```
twurl authorize --consumer-key key       \
                --consumer-secret secret
```

Make the api call for the tweets:
```
twurl GET -H api.twitter.com 21 '/1.1/statuses/user_timeline.json?screen_name=kanyewest&exclude_replies=true&include_rts=false' > tweets.json
```

Change the file around to fit the format of the old one.
