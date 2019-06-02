# Bot Whatsapp

Features in bot:
  - **/wiki** using [duckduckgo](https://api.duckduckgo.com)
  - **/unsplash** using [unsplash](https://source.unsplash.com/)
  - **/loremflickr** using [loremflickr](https://loremflickr.com/)
  - **/chart** using [quickchart](https://quickchart.io)

# Screenshots

![](https://raw.githubusercontent.com/chuongtrh/BotTwilioWhatsapp/master/screenshoot/command.png)
![](https://raw.githubusercontent.com/chuongtrh/BotTwilioWhatsapp/master/screenshoot/demo.png)


# How to use

  - Install the dependencies
```sh
$ npm install
```
  - Create file .env
  ```sh
SID=Your_Account_SID
KEY=Your_Auth_Token
PORT=5000
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
S3_BUCKET=dev-red-media
S3_REGION=ap-southeast-1
S3_FOLDER=dev
CHART_DOMAIN=https://quickchart.io/chart
```
  - Start app
```sh
$ npm run start:local
```

License
----
MIT

**Free Software, ^^**
