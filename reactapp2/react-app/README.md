# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Create using Vite -> alternative for create-react-app

npm run dev -> to execute the vite app , npm start -> create-react-app

class instead of className can be used from Recat 16 but className is preferred

CSS Modules - localized scoping for css, Item.module.css for Item.jsx
import styless from './Item.module.css'

<li className={`${styless["head-col"]} elm-col`}>

npm install react-icons --save // import {IconName} from "react-icons/fc"
