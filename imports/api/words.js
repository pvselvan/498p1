import { Mongo } from 'meteor/mongo';
//creating and exporting a collection, Words, to be used by the server and client
export const Words = new Mongo.Collection('words');