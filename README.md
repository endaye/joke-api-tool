# news-api-tool
a Centaurstech news api query tool

## How to Run

1. download the code or `git clone` then extract
2. run `npm install` from command line window
3. run `node app.js`
4. finnaly, use [Postman](https://www.getpostman.com/) to send some requests to `http://localhost:3403/joke/get/....`

## Data Format Example

### Info

+ **Port:** 3043

+ **Method:** GET, POST

+ **API URL:** 
  1. 取得笑话: `/api/joke/get/`
  2. 添加笑话: `/api/joke/add/`

### Request

### Respond
```json
{
    "joke": "包大人如厕忘记带纸，忐忑中惊喜地听见外面传来：“圣纸到……开封府尹包拯接纸……”"
}
```
