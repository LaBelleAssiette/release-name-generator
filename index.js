#!/usr/bin/env node
const argv = require('yargs').argv
const voca = require('voca')

const adjectives = require('./adjectives')
const animals = require('./animals')

const adjective = adjectives.get();
const animal = animals.get();

console.log(`${voca.titleCase(adjective)} ${voca.titleCase(animal)}`)
console.log(voca.slugify(`${adjective} ${animal}`))
