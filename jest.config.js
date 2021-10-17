module.exports = {
    "collectCoverage": true,
    "collectCoverageFrom": [
      "index.js"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 80,
        "lines": 100,
        "statements": 95
      }
    },
    "reporters": [
      "default"
    ],
	"testMatch": ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
  }
