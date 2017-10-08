# Description
## Usage

To start application locally run following commands in CLI:

```
npm i
npm run dev:server
npm run dev:client
```

Then open url: [http://localhost:9000/](http://localhost:9000/)

## Used solutions
* UI - React
* Data flows - Redux, redux-thunk, reselect
* Styles - normalize.css & styled-components (CSS in JS)
* EcmaScript version - ES6 via Babel
* Lint - eslint
* Tests - jest, enzyme
* Static analysis - Flow

## Folder structure

Here I have introduced my own way of organize folder structre.

That way pay attention to splitting code by `features` instead of splitting code on `styles, views, models, tests, mocks` & etc.

## Motivation
I was used latest tech stack instead of `made in Travix` solutions, because open-source growing faster & use more flexible ways to solve problems.

Tech stack described above helps keep project clean & well tested.

Thank you, for attention.
Igor Golopolosov

////////////////////////////////////////////////////////////////////////////////////////////////////////////


# Travix test

Travix Front-End Tech Interview Test

# Introduction

The aim of the test is to develop a mini-application for managing TODO tasks.

Using your application we must be able to create, modify and delete a task.

A really simple server has been implemented with Express. It offers the minimum of expected functionalities (get the list of tasks, update a task, delete a task, save a task).

However this server is not perfect. It could be improved and tested as well.

So your mission is to develop the front-end from scratch using a famous front-end framework.

We are also expecting from you a usable, responsive UI.

# Process

Fork the repository into your account. Once your code is ready open a pull-request on this repository and we will review it.

# Requirements

* React 14+
* Redux or Flux or Frint or whateverelse with a one-way data flow
* SASS or LESS
* Must be responsive
* We have big tasks files for testing the application (very huge)

# Bonus

* unit-tests for the UI
* integration-test (one (or more) just in order to show that you know what is it (: )
* evolution - unit-tests for the server
* dynamic-ui (web-sockets...?)
* using the `made in Travix` technologies
* ... Impress us !
