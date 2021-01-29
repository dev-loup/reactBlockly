const toolboxCategories = [
    {
      name: 'Headers',
      colour: '#5CA699',
      blocks: [
        {
          type: 'startBlock',
          values: {
            maintainer: {
              type: 'text',
              fields: {
                TEXT: 'abc'
              },
            },
            mail: {
              type: 'text',
              fields: {
                TEXT: 'mail@kiwibot.com'
              },
            },
            area: {
              type: 'text',
              fields: {
                TEXT: 'the Kiwi Campus: AI and Robotics Team'
              },
            },
            xmlVersion: {
              type: 'text',
              fields: {
                TEXT: '1.0'
              },
            },
            encoding: {
              type: 'text',
              fields: {
                TEXT: 'utf-8'
              },
            },
          }
        },
        {
          type: 'rawStartBlock',
          values: {
            xmlVersion: {
              type: 'text',
              fields: {
                TEXT: '1.0'
              },
            },
            encoding: {
              type: 'text',
              fields: {
                TEXT: 'utf-8'
              },
            },
          }
        }
      ]
    },
    {
      name: 'Routines',
      colour: '#5CA699',
      blocks: [
        {
          type: 'routines',
          values: {
            id: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            cycles: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
          }
        },
        {
          type: 'moves',
          values: {
            time1: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            time2: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            linear: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            angular: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
          }
        },
        {
          type: 'features',
          values: {
            time1: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            time2: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            mode: {
              type: 'text',
              fields: {
                TEXT: 1
              }
            },
            value: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
          }
        }
      ]
    }
    ];
export {toolboxCategories};