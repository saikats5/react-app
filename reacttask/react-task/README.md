# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

//npx create-react-app react-task --template typescript
//let age: number | string;
//let hobbies: string[];
//let role: [number, string];
//let printname: Function // another better way
//let printname: (name: string) => void / number/ string // use never instead of void as void returns undefined and never doesn't return anything
//let name: any //not recommended
//type Person = {name: string; age?: number;} // let person: Person = {name: 'Test'}
//let name: unknown; //unknow is a best practice instead of any

//alias -> 2 types -> type and interface
//interface User{readonly dbId: number, email?: string, func(): string, anotherFunc(name: string): number}

//type X = {a: string; b: number;} type Y = X & {c: string; d: number;} let y: Y = {c: 'abc', d: 'def'} // error
//interface Person {name: string; age?: number;} interface Boy extends Person {profession: string}

//interface can be reopened, mean two interfaces will merge but it may not be the case with type
//BEM css style
