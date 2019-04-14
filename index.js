#! /usr/bin/env node
const [, , ...args] = process.argv
const greeting = (args) => console.log(`Hello, ${args}`)

greeting(args)