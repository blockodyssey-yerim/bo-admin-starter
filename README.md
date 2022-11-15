# bo-admin-starter

:smiley: 블록오디세이를 위한 React 관리자 TypeScript Boilerplate v1입니다. :smiley:  
:bangbang: [프로젝트 설치 방법](https://github.com/BlockOdyssey/bo-admin-starter#project-installation "project-installation") & [사용 설명서](https://github.com/BlockOdyssey/bo-admin-starter#사용방법 "usage") :bangbang:

## Project Main Features

-   **UI COMPONENT** : [MUI](https://mui.com/ "MUI")
-   **HTTP CLIENT** : [axios](https://github.com/axios/axios "axios")
-   **SERVER STATE DATA MANAGEMENT** : [react-query](https://react-query.tanstack.com/ "react-query")
-   **ROUTING AND NAVIGATION** : [react-router-dom](https://reactrouter.com/web/guides/quick-start "react-router-dom")
-   **STATE MANAGEMENT** : [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
-   **FORM** : [react-hook-form](https://react-hook-form.com/get-started "react-hook-form")
-   **FORM VALIDATION** : [yup](https://github.com/jquense/yup#usage "yup")
-   **DEVELOPMENT** : [@redux-devtools/extension](https://github.com/reduxjs/redux-devtools/tree/main/extension#13-use-redux-devtoolsextension-package-from-npm "@redux-devtools/extension")

## Project Extra Features
-   **Cookie** : [react-cookie](https://github.com/reactivestack/cookies "react-cookie")
-   **Chart** : [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2 "react-chartjs-2")
-   **Editor** : [@toast-ui/react-editor](https://github.com/nhn/tui.editor/tree/master/apps/react-editor "@toast-ui/react-editor")
-   **CSV** : [react-csv](https://github.com/react-csv/react-csv "react-csv")
-   **Select** : [react-select](https://react-select.com/home "react-select")
-   **Fake JSON Data** : [jsonplaceholder](https://jsonplaceholder.typicode.com/ "jsonplaceholder")
## Menu / Page

-   404
-   Login
-   Change Password
-   Change Info
-   Dashboard
    -   Dashboard Detail
    -   Dashboard Upload
    -   Dashboard Edit
-   CSV
    - React CSV 데모 + Fake Json Data from https://jsonplaceholder.typicode.com
-   Editor
    -   Toast UI Editor 데모
-   Chart
    -   LineChart
    -   PieChart
    -   BubbleChart
    -   Doughnut Chart
    -   Stacked Bar Chart
    -   Vertical Bar Chart

[데모 확인하기](https://blockodyssey.github.io/bo-admin-starter "프로젝트 데모 웹페이지")

---

## Project Installation

<pre><code> $ npx bo-admin-starter projectname </code></pre>

:fire: `npm i bo-admin-starter` 명령어를 사용하면 프로젝트가 정상적으로 설치되지 않습니다. :fire:

## Getting Started

### Install Dependencies

 <pre><code> $ cd projectname

 $ npm install
</code></pre>

### Project Run

 <pre><code>$ npm start </code></pre>

---

## 사용방법

notion 페이지를 참고해 주세요.

---

## Project Structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── api
│   │   ├── axios.ts
│   │   ├── index.ts
│   │   └── types.ts
│   ├── app
│   │   ├── App.tsx
│   │   ├── rootReducer.ts
│   │   └── store.ts
│   ├── components
│   │   ├── Buttons
│   │   │   ├── DefaultButton
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── LinkButton
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── SubmitButton
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── CaptionSearch
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── Carousels
│   │   │   ├── Image
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── UploadImage
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── Charts
│   │   │   ├── BarChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── BubbleChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── DoughnutChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── LineChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── PieChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── StackedBarChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── CustomDatePicker
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── FormInputs
│   │   │   ├── CheckBox
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── DatePicker
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── ErrorMessage
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── Input
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── RadioButton
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── Select
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── Modals
│   │   │   ├── ConfirmModal
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── DetailModal
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ImageModal
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── MessageModal
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ProgressModal
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   └── index.ts
│   │   ├── Pagination
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── ScrollToTop
│   │   │   └── index.ts
│   │   ├── Search
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── SearchInputs
│   │   │   ├── DatePicker
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── DateTermButton
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── SearchCheckbox
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── SearchField
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── SearchRadio
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── SearchSelect
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── Skeletons
│   │   │   ├── TableSkeleton
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── Table
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── TableLoader
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── ToastUIEditor
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── UploadImage
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── configs
│   │   ├── button
│   │   │   └── index.ts
│   │   ├── form
│   │   │   ├── changeInfo.ts
│   │   │   ├── common.ts
│   │   │   ├── dashboard.ts
│   │   │   └── login.ts
│   │   ├── menu
│   │   │   └── index.tsx
│   │   ├── search
│   │   │   └── index.ts
│   │   └── table
│   │       └── index.ts
│   ├── constants
│   │   └── messages.ts
│   ├── contexts
│   │   └── dialog
│   │       ├── DialogContext.tsx
│   │       ├── DialogProvider.tsx
│   │       ├── styles.ts
│   │       └── types.ts
│   ├── dummy
│   │   └── index.ts
│   ├── hooks
│   │   ├── common
│   │   │   ├── index.ts
│   │   │   ├── useGetList.ts
│   │   │   ├── useMenu.ts
│   │   │   ├── usePageExit.ts
│   │   │   └── useTimeout.ts
│   │   ├── modal
│   │   │   ├── index.ts
│   │   │   ├── useDialog.ts
│   │   │   └── useMessage.ts
│   │   ├── redux
│   │   │   └── index.ts
│   │   └── search
│   │       ├── index.ts
│   │       ├── types.ts
│   │       ├── useSearch.ts
│   │       └── useSearchParams.ts
│   ├── index.tsx
│   ├── layout
│   │   ├── BaseLayout
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── PageButton
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── PageHeader
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── PageHeading
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── ScrollTop
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── SideBar
│   │   │   ├── components
│   │   │   │   ├── Copyright
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── MenuItem
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── styles.ts
│   │   │   │   │   └── types.ts
│   │   │   │   ├── MenuList
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── styles.ts
│   │   │   │   │   └── types.ts
│   │   │   │   └── index.tsx
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── 404
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Admin
│   │   │   ├── ChangeInfo
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── ChangePassword
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── index.ts
│   │   │   └── styles.ts
│   │   ├── CSV
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── Chart
│   │   │   ├── components
│   │   │   │   ├── Charts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── styles.ts
│   │   │   │   │   └── types.ts
│   │   │   │   └── Search
│   │   │   │       ├── index.tsx
│   │   │   │       ├── styles.ts
│   │   │   │       └── types.ts
│   │   │   ├── hooks
│   │   │   │   └── useGetChart.ts
│   │   │   └── index.tsx
│   │   ├── Dashboard
│   │   │   ├── Detail
│   │   │   │   ├── components
│   │   │   │   │   ├── QuantityTable
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── styles.ts
│   │   │   │   │   └── Table
│   │   │   │   │       ├── index.tsx
│   │   │   │   │       ├── styles.ts
│   │   │   │   │       └── types.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── Edit
│   │   │   │   ├── components
│   │   │   │   │   └── Form
│   │   │   │   │       ├── index.tsx
│   │   │   │   │       └── styles.ts
│   │   │   │   ├── hooks
│   │   │   │   │   └── useDashboardEdit.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── List
│   │   │   │   ├── components
│   │   │   │   │   └── TableCells
│   │   │   │   │       ├── index.tsx
│   │   │   │   │       └── types.ts
│   │   │   │   ├── hooks
│   │   │   │   │   └── useGetDashboardList.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── Upload
│   │   │   │   ├── components
│   │   │   │   │   └── Form
│   │   │   │   │       ├── index.tsx
│   │   │   │   │       └── styles.ts
│   │   │   │   ├── hooks
│   │   │   │   │   └── useDashboardUpload.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   ├── hooks
│   │   │   │   └── useGetDashboardData.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── Editor
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Login
│   │   │   ├── components
│   │   │   │   ├── Checkbox
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── CompanyLogo
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── Form
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── styles.ts
│   │   │   │   │   └── types.ts
│   │   │   │   └── Input
│   │   │   │       ├── index.tsx
│   │   │   │       ├── styles.ts
│   │   │   │       └── types.ts
│   │   │   ├── hooks
│   │   │   │   └── useLogin.ts
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   └── Search
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   ├── routes
│   │   ├── PublicRouter.tsx
│   │   ├── RouteWrapper.tsx
│   │   └── Router.tsx
│   ├── slices
│   │   ├── index.ts
│   │   ├── loginSlice.ts
│   │   ├── menuSlice.ts
│   │   ├── modalSlice.ts
│   │   └── searchSlice.ts
│   ├── styles
│   │   └── theme
│   │       ├── customTheme.ts
│   │       ├── form.ts
│   │       ├── palette.ts
│   │       ├── search.ts
│   │       ├── textfield.ts
│   │       ├── theme.ts
│   │       └── typography.ts
│   └── utils
│       ├── common.ts
│       └── types.ts
└── tsconfig.json
```

## NPM Packages

-   React
    -   [React v17](https://reactjs.org/docs/getting-started.html "react")
        -   [create-react-app](https://create-react-app.dev/docs/getting-started "create-react-app")
-   HTTP CLIENT
    -   [axios](https://github.com/axios/axios "axios")
-   Server State Data Management
    -   [react-query v4](https://react-query.tanstack.com/ "react-query")
-   Routing and Navigation
    -   [react-router-dom v5](https://github.com/ReactTraining/react-router#readme "react-router-dom")
-   State Management
    -   [react-redux](https://github.com/reduxjs/react-redux "react-redux")
    -   [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
    -   [@redux-devtools/extension](https://github.com/reduxjs/redux-devtools/tree/main/extension#13-use-redux-devtoolsextension-package-from-npm "@redux-devtools/extension")
-   UI Component
    -   [Material-UI v5](https://mui.com/ "material-ui")
        -   [@mui/material](https://www.npmjs.com/package/@mui/material "@mui/material")
        -   [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material "@mui/icons-material")
        -   [@emotion/react](https://www.npmjs.com/package/@emotion/react "@emotion/react")
        -   [@emotion/styled](https://www.npmjs.com/package/@emotion/styled "@emotion/styled")
-   Form and Form Validation
    -   [react-hook-form v7](https://www.react-hook-form.com/ "react-hook-form")
        -   [@hookform/resolvers](https://github.com/react-hook-form/resolvers "@hookform/resolvers")
        -   [yup](https://github.com/jquense/yup "yup")
---
-   Font    
    -   [@fontsource/noto-sans-kr](https://www.npmjs.com/package/@fontsource/noto-sans-kr "@fontsource/noto-sans-kr")
-   Date
    -   [date-fns](https://www.npmjs.com/package/date-fns "date-fns")
    -   [dayjs](https://www.npmjs.com/package/dayjs "dayjs")
    -   [react-datepicker](https://github.com/Hacker0x01/react-datepicker "react-datepicker")
-   Chart
    -   [chart.js](https://github.com/chartjs/Chart.js "chart.js")
    -   [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2 "react-chartjs-2")
-   Extra Features
    -   [react-cookie](https://github.com/reactivestack/cookies "react-cookie")
    -   [react-csv](https://github.com/react-csv/react-csv "react-csv")
    -   [@toast-ui/react-editor](https://github.com/nhn/tui.editor/tree/master/apps/react-editor "@toast-ui/react-editor")
    -   [react-select](https://react-select.com/home "react-select")
    -   [react-perfect-scrollbar](https://github.com/goldenyz/react-perfect-scrollbar "react-perfect-scrollbar")
---
-   Dev Dependencies
    -   [dotenv](https://github.com/motdotla/dotenv "dotenv")
    -   [prettier](https://github.com/prettier/prettier "prettier")
    -   ESLint
        -   [eslint](https://github.com/eslint/eslint "eslint")
    -   ESLint Airbnb (+ Peer Dependencies)
        -   [eslint-config-airbnb v19.0.4](https://www.npmjs.com/package/eslint-config-airbnb "eslint-config-airbnb")
            -   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import "eslint-plugin-import")
            -   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y "eslint-plugin-jsx-a11y")
            -   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react "eslint-plugin-react")
            -   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks "eslint-plugin-react-hooks")
    -   ESLint + Prettier
        -   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier "eslint-config-prettier")
        -   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier "eslint-plugin-prettier")
-   Extra Dependencies
    -   [edit-json-file](https://github.com/IonicaBizau/edit-json-file#readme "edit-json-file")
    -   [ncp](https://github.com/AvianFlu/ncp "ncp")
