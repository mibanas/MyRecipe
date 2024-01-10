# Recipe Application

## Overview

This is a Recipe Application built using React.js and json-server as a fake API. The application allows users to view, add, update, and delete recipes.

## Table of Contents

- [Recipe Application](#recipe-application)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Dependencies](#dependencies)
  - [Author](#author)
  - [Learn More](#learn-more)
    - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- json-server (for simulating an API server with data)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mibanas/MyRecipe.git
```

2. **Navigate to the project directory:**
```bash
cd MyRecipe
```

3. **Install project dependencies.**
```bash
npm install
```

4. **Install JSON Server**
```bash
npm install -g json-server
```

5. **Create a folder & file like this in : src/Data/db.json file**


6. **Add server to scripts in package.json**
```bash
"scripts": {
...
"server": "json-server --watch db.json --port 5000"}
```

7. **Start the server**
```bash
npm run server
```

8. **Launch the React application.**
```bash
npm start
```

**The application will be accessible at http://localhost:3000/. & the server will be running at http://localhost:5000**


### Dependencies
**List of project dependencies:**

- @fortawesome/fontawesome-svg-core
- @fortawesome/free-brands-svg-icons
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome
- axios
- json-server
- react
- react-dom
- react-icons
- react-router-dom
- sweetalert2
- sweetalert2-react-content
- web-vitals

**Dev Dependencies:**
List of development dependencies:

- tailwindcss
- vite
- webpack
- webpack-cli

## Author
[AIT M'BAREK Youness](https://github.com/YNS-JNS).
[Mohamed Sanabi](https://github.com/mibanas).
[Imane Ouarid](https://github.com/imaneouarid).
[Houssain Ijioui](https://github.com/houssain-ijioui).

## Learn More

- React.js Documentation: [https://react.dev/](https://react.dev/)
- json-server Documentation: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

### Contributing
If you would like to contribute to this project, please follow the Contribution Guidelines.

If you find issues or want to contribute, follow these steps:

1. Fork the project.
2. Create a branch for your feature: `git checkout -b feature/NewFeature`.
3. Commit your changes: `git commit -m "Add New Feature"`.
4. Push to the branch: `git push origin feature/NewFeature`.
5. Open a pull request.

## License
This project is licensed under the MIT License.

Feel free to customize this template according to your project's specific details and structure.
