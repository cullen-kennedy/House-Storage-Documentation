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
            "type": "Category[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of categories, &quot;-&quot; is only a placeholder.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>Unique id of desired category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>Name of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n         \"id\": 1,\n         \"name\": \"Movies\"\n    },...\n]",
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
    "title": "Request specific container",
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
            "description": "<p>Unique ID of container</p>"
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
            "description": "<p>Unique id of selected container</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the container</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Self referential link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_entered",
            "description": "<p>Date of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rel",
            "description": "<p>Simple nested relation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rel.category_name",
            "description": "<p>Name of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rel.location_name",
            "description": "<p>Name of related location</p>"
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
            "description": "<p>Parameters are not valid or included</p>"
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
    "url": "containers",
    "title": "Request all containers",
    "name": "GetContainers",
    "group": "Container",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload",
            "description": "<p>List of requested containers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.id",
            "description": "<p>Unique id of selected container</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Name of the container</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.link",
            "description": "<p>Self referential link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.date_entered",
            "description": "<p>Date of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.rel",
            "description": "<p>Simple nested relation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.rel.category_name",
            "description": "<p>Name of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.rel.location_name",
            "description": "<p>Name of related location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n\"payload\": [\n    {\n      \"id\": 11,\n      \"name\": \"Item name\",\n      \"link\": \"api/containers/2\",\n      \"date_entered\": \"2019-08-26T04:00:00.000Z\",\n      \"rel\": {\n          \"category_name\": \"Movies\",\n          \"location_name\": \"Attic\"\n      }\n    },...\n]",
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
            "description": "<p>Parameters are not valid or included</p>"
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
    "url": "containers/:Cid/items/:Iid",
    "title": "Request specific item from container",
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
            "description": "<p>Unique ID of container</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Iid",
            "description": "<p>Unique ID of item</p>"
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
            "description": "<p>Unique id for selected item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_entered",
            "description": "<p>Date of entry</p>"
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
            "description": "<p>parameters are not valid or not included</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Container not found or Item with Iid not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  Message: \"Container Not Found\"\n}",
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
    "title": "Request container items",
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
            "description": "<p>Unique ID of container</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ContainerItem[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of container items, &quot;-&quot; is only a placeholder</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>Unique id for selected item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>Name of the item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.date_entered",
            "description": "<p>Date of entry</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 11,\n         \"name\": \"Item Name\",\n         \"date_entered\": \"2019-08-26T04:00:00.000Z\"\n     },...\n]",
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
            "description": "<p>Parameters are not valid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Container not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  Message: \"Container not found\"\n}",
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
    "title": "Add new item to container",
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
            "description": "<p>Unique ID of container</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new item</p>"
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
            "description": "<p>A simple confirmation message</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Container Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  Message: \"Request body is invalid. Please provide item name\"\n}",
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
    "url": "containers",
    "title": "Add new item to container",
    "name": "PostContainer",
    "group": "Container",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Cid",
            "description": "<p>Unique ID of container</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of new item</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>Unique id of related category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location_id",
            "description": "<p>Unique id of related location</p>"
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
            "description": "<p>A simple confirmation message</p>"
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
          "content": "HTTP/1.1 400 Bad Request\n{\n  Message: \"Request body is invalid\"\n}",
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
    "url": "items",
    "title": "Request items",
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
            "type": "Object[]",
            "optional": false,
            "field": "payload",
            "description": "<p>List of desired items</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.id",
            "description": "<p>Unique id of selected item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Item name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.date_entered",
            "description": "<p>Date of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.rel",
            "description": "<p>Simple nested container relationship</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.rel.name",
            "description": "<p>Name of related container</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.rel.link",
            "description": "<p>Link to related container</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"payload\": [\n       {\n           \"id\": 1,\n           \"name\": \"V\",\n           \"link\": \"api/items/1\",\n           \"date_entered\": \"2019-08-22T04:00:00.000Z\",\n           \"rel\": {\n               \"name\": \"Box3\",\n               \"link\": \"api/containers/3\"\n            }\n      },...\n   ]\n}",
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
            "description": "<p>Search parameters are invalid</p>"
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
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of locations, &quot;-&quot; is only a placeholder.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "-.id",
            "description": "<p>Unique id of selected location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>Name of the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 1,\n         \"name\": \"Garage\"\n     },...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/locations.controller.js",
    "groupTitle": "Location"
  }
] });
