{
    "type": "object",
    "properties": {
      "image_key": {
        "type": "string"
      },
      "bucket": {
        "type": "string"
      },
      "labels": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "Name": {
              "type": "string"
            },
            "Confidence": {
              "type": "number"
            },
            "Instances": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "BoundingBox": {
                    "type": "object",
                    "properties": {
                      "Width": { "type": "number" },
                      "Height": { "type": "number" },
                      "Left": { "type": "number" },
                      "Top": { "type": "number" }
                    },
                    "required": ["Width", "Height", "Left", "Top"]
                  },
                  "Confidence": {
                    "type": "number"
                  }
                },
                "required": ["BoundingBox", "Confidence"]
              }
            },
            "Parents": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "Name": { "type": "string" }
                },
                "required": ["Name"]
              }
            },
            "Aliases": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "Name": { "type": "string" }
                },
                "required": ["Name"]
              }
            },
            "Categories": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "Name": { "type": "string" }
                },
                "required": ["Name"]
              }
            }
          },
          "required": ["Name", "Confidence", "Instances", "Parents", "Aliases", "Categories"]
        }
      }
    },
    "required": ["image_key", "bucket", "labels"]
  }
  