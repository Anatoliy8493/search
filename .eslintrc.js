module.exports = {
    "extends": ["airbnb"],
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-cycle": [2, { "maxDepth": 1 }],
        "import/no-unresolved": "off"
    }
};
