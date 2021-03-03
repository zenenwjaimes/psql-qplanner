# Running Project HERE!
https://pgplanner.netlify.app/

# Example Query


[
  {
    "Plan": {
      "Node Type": "Limit",
      "Parallel Aware": false,
      "Startup Cost": 6908860.26,
      "Total Cost": 6908861.45,
      "Plan Rows": 10,
      "Plan Width": 39,
      "Actual Startup Time": 77780.605,
      "Actual Total Time": 81280.610,
      "Actual Rows": 10,
      "Actual Loops": 1,
      "Plans": [
        {
          "Node Type": "Unique",
          "Parent Relationship": "Outer",
          "Parallel Aware": false,
          "Startup Cost": 6908860.26,
          "Total Cost": 12258939.06,
          "Plan Rows": 44969760,
          "Plan Width": 39,
          "Actual Startup Time": 77780.604,
          "Actual Total Time": 81280.607,
          "Actual Rows": 10,
          "Actual Loops": 1,
          "Plans": [
            {
              "Node Type": "Gather Merge",
              "Parent Relationship": "Outer",
              "Parallel Aware": false,
              "Startup Cost": 6908860.26,
              "Total Cost": 12034090.26,
              "Plan Rows": 44969760,
              "Plan Width": 39,
              "Actual Startup Time": 77780.603,
              "Actual Total Time": 81280.601,
              "Actual Rows": 10,
              "Actual Loops": 1,
              "Workers Planned": 1,
              "Workers Launched": 1,
              "Plans": [
                {
                  "Node Type": "Sort",
                  "Parent Relationship": "Outer",
                  "Parallel Aware": false,
                  "Startup Cost": 6907860.25,
                  "Total Cost": 6973992.25,
                  "Plan Rows": 26452800,
                  "Plan Width": 39,
                  "Actual Startup Time": 77726.555,
                  "Actual Total Time": 77726.810,
                  "Actual Rows": 479,
                  "Actual Loops": 2,
                  "Sort Key": ["movies.title", "casts.id"],
                  "Sort Method": "external merge",
                  "Sort Space Used": 1170680,
                  "Sort Space Type": "Disk",
                  "Workers": [
                    {
                      "Worker Number": 0,
                      "Sort Method": "external merge",
                      "Sort Space Used": 1159272,
                      "Sort Space Type": "Disk"
                    }
                  ],
                  "Plans": [
                    {
                      "Node Type": "Hash Join",
                      "Parent Relationship": "Outer",
                      "Parallel Aware": true,
                      "Join Type": "Left",
                      "Startup Cost": 927626.50,
                      "Total Cost": 1476676.27,
                      "Plan Rows": 26452800,
                      "Plan Width": 39,
                      "Actual Startup Time": 31929.739,
                      "Actual Total Time": 40366.455,
                      "Actual Rows": 22484836,
                      "Actual Loops": 2,
                      "Inner Unique": true,
                      "Hash Cond": "(movie_casts.movie_id = movies.id)",
                      "Workers": [
                      ],
                      "Plans": [
                        {
                          "Node Type": "Hash Join",
                          "Parent Relationship": "Outer",
                          "Parallel Aware": true,
                          "Join Type": "Left",
                          "Startup Cost": 887831.50,
                          "Total Cost": 1105856.38,
                          "Plan Rows": 26452800,
                          "Plan Width": 16,
                          "Actual Startup Time": 18389.172,
                          "Actual Total Time": 25627.738,
                          "Actual Rows": 22484836,
                          "Actual Loops": 2,
                          "Inner Unique": false,
                          "Hash Cond": "(casts.id = movie_casts.cast_id)",
                          "Workers": [
                          ],
                          "Plans": [
                            {
                              "Node Type": "Seq Scan",
                              "Parent Relationship": "Outer",
                              "Parallel Aware": true,
                              "Relation Name": "casts",
                              "Alias": "casts",
                              "Startup Cost": 0.00,
                              "Total Cost": 1734.24,
                              "Plan Rows": 58824,
                              "Plan Width": 8,
                              "Actual Startup Time": 0.007,
                              "Actual Total Time": 11.524,
                              "Actual Rows": 50000,
                              "Actual Loops": 2,
                              "Workers": [
                              ]
                            },
                            {
                              "Node Type": "Hash",
                              "Parent Relationship": "Inner",
                              "Parallel Aware": true,
                              "Startup Cost": 562122.00,
                              "Total Cost": 562122.00,
                              "Plan Rows": 18737400,
                              "Plan Width": 16,
                              "Actual Startup Time": 17946.250,
                              "Actual Total Time": 17946.251,
                              "Actual Rows": 22484836,
                              "Actual Loops": 2,
                              "Hash Buckets": 131072,
                              "Original Hash Buckets": 131072,
                              "Hash Batches": 1024,
                              "Original Hash Batches": 1024,
                              "Peak Memory Usage": 3840,
                              "Workers": [
                              ],
                              "Plans": [
                                {
                                  "Node Type": "Seq Scan",
                                  "Parent Relationship": "Outer",
                                  "Parallel Aware": true,
                                  "Relation Name": "movie_casts",
                                  "Alias": "movie_casts",
                                  "Startup Cost": 0.00,
                                  "Total Cost": 562122.00,
                                  "Plan Rows": 18737400,
                                  "Plan Width": 16,
                                  "Actual Startup Time": 0.041,
                                  "Actual Total Time": 4371.371,
                                  "Actual Rows": 22484836,
                                  "Actual Loops": 2,
                                  "Workers": [
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "Node Type": "Hash",
                          "Parent Relationship": "Inner",
                          "Parallel Aware": true,
                          "Startup Cost": 31330.67,
                          "Total Cost": 31330.67,
                          "Plan Rows": 416667,
                          "Plan Width": 39,
                          "Actual Startup Time": 367.641,
                          "Actual Total Time": 367.642,
                          "Actual Rows": 500000,
                          "Actual Loops": 2,
                          "Hash Buckets": 65536,
                          "Original Hash Buckets": 65536,
                          "Hash Batches": 32,
                          "Original Hash Batches": 32,
                          "Peak Memory Usage": 2848,
                          "Workers": [
                          ],
                          "Plans": [
                            {
                              "Node Type": "Seq Scan",
                              "Parent Relationship": "Outer",
                              "Parallel Aware": true,
                              "Relation Name": "movies",
                              "Alias": "movies",
                              "Startup Cost": 0.00,
                              "Total Cost": 31330.67,
                              "Plan Rows": 416667,
                              "Plan Width": 39,
                              "Actual Startup Time": 0.031,
                              "Actual Total Time": 150.009,
                              "Actual Rows": 500000,
                              "Actual Loops": 2,
                              "Workers": [
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "Planning Time": 0.255,
    "Triggers": [
    ],
    "Execution Time": 81286.886
  }
]

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
