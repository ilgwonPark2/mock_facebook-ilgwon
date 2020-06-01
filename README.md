# Intro for this Project
This Project is on top of vue-2-boilerplate to make facebook comments demo.
First, You can refer **usage menu** to start.
Then, follow the address and port on terminal.

## Usage
To get up and running run:
``` bash
$ npm install
$ npm run dev
```

### main.js ###
This file will load your single page application and bootstrap all the plugins that are used.
It will also serve as the entry point which will be loaded and compiled using webpack.

### App.vue ###
The main Vue file.
This file will load the page inside the `router-view`-component.
Header is included in this file for display all time.

## Directory Structure ##
Inside the `src`-directory, are a couple directories that needs to be addressed:

### Assets ###
The assets that you want to use are places inside this directory.
There are img and style folders

### Components ###
Components to be frequently used or iterated are here.
CommentParent.vue is iterated in view/Post/index.vue
ComponentChild.vue is iterated in CommentParent.vue.

### Layouts ###
Layouts to be deployed in each page are here.
In this project, Header.vue and LeftNav.vue are used to compose Post/index.vue

### Routes ###
In this directory, this setting specifies the routes that are used by this application.
Vue Router loads the routes located in this directory.

### Store ###
In SPA, data needs to be consistent in each component and page.
Therefore, data from DB or backend(localStorage currently) are stored in front-side.
A kind of gateway to request to backend and receive and store data.






# Boilerplate: vue-2-boilerplate
> A boilerplate for building medium to large Vue 2 single page applications

This boilerplate is based on the Vue webpack template.
Common topics are discussed in the VueJS [docs](http://vuejs-templates.github.io/webpack). Make sure to read it!


## Boilerplate: License ##
The MIT License (MIT)

Copyright (c) 2016 - 2018 Peter van Meijgaard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
