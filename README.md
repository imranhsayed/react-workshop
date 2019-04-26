# React Workshop

:fire: This is a workshop for learning how to build React Applications.

## :video_camera: App Demo
![](Handling-forms.gif)

## :video_camera: React Developer Tools (Chrome Extension) Demo
![](React-Chrome-Extension.gif)

## Before you Start
I've branched the repo for individual topics.
To checkout all branches run: `git branch --all`.
To checkout individual branch run: `git checkout <branch name>`. From there on you should be good.

## Branch Name: 03-react-app-example2
## Branch Description:
Example for [Active links](https://reach.tech/router/example/active-links) using Reach router.
Check src/NavLink.js

We first create a NavLink custom Component. Reach Routers gives us access to a function called getProps
inside this link and whatever is returned by that function is set as props for NavLink.
We can return the desired styled inside of this function conditionally.
Then instead of using Link tag we can use Navlink wherever we need.

## Installation

1. Clone this repo in `git clone https://github.com/imranhsayed/react-workshop`

2. Run `npm install`

[Blog Link](https://medium.com/@imranhsayed/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d)

## Commands

- `dev` Runs webpack dev server for development ( in watch mode )
- `prod` Runs webpack in production mode

