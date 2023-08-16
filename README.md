#  🚀 Capstone Boilerplate

A template for building web applications using the PERN (PostgreSQL, Express.js, React, Node.js) stack. 

##  🏁 Getting Started

1. **Don't fork or clone this repo!** Instead, create a new, empty directory on your machine and `git init` (or create an _empty_ repo on GitHub and clone it to your local machine)

2. Add this template as a remote and merge it into your own repository

```bash
git remote add boilermaker git@github.com:FullstackAcademy/capstone-app-template.git
git fetch boilermaker
git merge boilermaker/main
```

3. Install packages

```bash
npm i
```

4. Add a `.env` file with your secret value for auth
```
JWT_SECRET='somesecretvalue'
```

5. Create the database

```bash
createdb your-database-name
```

6. Update `src/server/db/client.js` to reflect the name of your database

```js
const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/your-database-name';
```

7. Seed the database
```bash
npm run seed
```

8. Start the server
```bash
npm run dev
```

9. Open your browser at `http://localhost:3000`

10. Build something cool! 😎

## Material UI

Material UI is an open-source React component library that implements Google's Material Design.

It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

1. Perform the default installation

```bash
npm install @mui/material @emotion/react @emotion/styled
```

2. Material UI uses the Roboto font by default. Add it to your project via Fontsource, or with the Google Fonts CDN.

```bash
npm install @fontsource/roboto
```

3. Then import the font in your `client/main.jsx`
```jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

4. To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm, or with the Google Web Fonts CDN.

```bash
npm install @mui/icons-material
```