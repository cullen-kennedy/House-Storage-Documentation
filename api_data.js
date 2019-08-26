define({ "api": [
  {
    "type": "get",
    "url": "categories",
    "title": "Request categories",
    "name": "GetCategories",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of desired category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"Movies\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/categories.controller.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "containers/:id",
    "title": "Find a container by its id",
    "name": "GetContainer",
    "group": "Container",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>containers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of container.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the container.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link to itself.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_entered",
            "description": "<p>date that the container was entered into the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rel",
            "description": "<p>Names of category and location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 11,\n  \"name\": \"Item name\",\n  \"link\": \"api/containers/2\",\n  \"date_entered\": \"2019-08-26T04:00:00.000Z\",\n  \"rel\": {\n     \"category_name\": \"Movies\",\n     \"location_name\": \"Attic\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Container Id is not valid or is not included</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No container found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  Message: \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/containers.controller.js",
    "groupTitle": "Container"
  },
  {
    "type": "get",
    "url": "/containers/:Cid/items/:Iid",
    "title": "Request specific item from a container",
    "name": "GetContainerItem",
    "group": "ContainerItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Cid",
            "description": "<p>Containers unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Iid",
            "description": "<p>Items unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_entered",
            "description": "<p>Date that the item was entered into the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 11,\n  \"name\": \"Item name\",\n  \"date_entered\": \"2019-08-26T04:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>parameters are not valid or not included.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No item found in this container.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  Message: \"No Items Found for this container\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/containerItems.controller.js",
    "groupTitle": "ContainerItem"
  },
  {
    "type": "get",
    "url": "containers/:Cid/items",
    "title": "Request items from a container",
    "name": "GetContainerItems",
    "group": "ContainerItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Cid",
            "description": "<p>Unique id of the container.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_entered",
            "description": "<p>Date that the item was entered into the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 11,\n  \"name\": \"Item name\",\n  \"date_entered\": \"2019-08-26T04:00:00.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Container Id parameter is not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No items found for this container.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  Message: \"No Items Found for this container\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/containerItems.controller.js",
    "groupTitle": "ContainerItem"
  },
  {
    "type": "post",
    "url": "containers/:Cid/items",
    "title": "Add an item into a container",
    "name": "PostContainerItem",
    "group": "ContainerItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Cid",
            "description": "<p>Containers unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new item.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>A confirmation message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"Message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Body Invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  Message: \"request body is invalid. Please provide item name\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/containerItems.controller.js",
    "groupTitle": "ContainerItem"
  },
  {
    "type": "get",
    "url": "items",
    "title": "Find items",
    "name": "GetItems",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search string for a substring contained in item name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Payload",
            "description": "<p>List of desired items.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"payload\": [{\n       \"id\": 1,\n        \"name\": \"V\",\n        \"link\": \"api/items/1\",\n        \"date_entered\": \"2019-08-22T04:00:00.000Z\",\n        \"rel\": {\n            \"name\": \"Box3\",\n            \"link\": \"api/containers/3\"\n         }\n      }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Search parameters are invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No items found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  Message: \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/items.controller.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "locations",
    "title": "Request Locations",
    "name": "GetLocations",
    "group": "Location",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"Garage\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/locations.controller.js",
    "groupTitle": "Location"
  }
] });
