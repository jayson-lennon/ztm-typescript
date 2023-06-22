function apiResponse() {
  return {
    "status": "success",
    "data": {
      "items": [
        {
          "id": 1,
          "name": "Widget 1",
          "price": 10.99,
          "quantity": 50,
          "department": "Electronics"
        },
        {
          "id": 2,
          "name": "Widget 2",
          "price": 19.99,
          "quantity": 25,
          "department": "Home & Kitchen"
        },
        {
          "id": 3,
          "name": "Widget 3",
          "price": 5.99,
          "quantity": 100,
          "department": "Toys & Games"
        }
      ]
    }
  }
}

module.exports = {
  apiResponse
}
