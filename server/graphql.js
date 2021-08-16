const {gql} = require('apollo-server-express');
const db = require('./database');

const typeDefs = gql`
  type Query {
    employees(
      text: String
      field: String
    ): [Employee]
  }
  type Employee {
    id: String
    first_name: String
    last_name: String
    gender: String
    age: Int
    email: String
    job: String
    position: String
    salary_year: Int
    avatar: String
  }
`;

const resolvers = {
  Query : {
    employees: (parent, args)=> {
      const {field, text} = args;
      console.log(`${field} / ${text}`);
      if(!field) return db.employee; 
      else return db.employee.filter(e => {
        return e[field].toLowerCase().indexOf(text.toLowerCase()) !== -1
      });
    } 
  }
};

module.exports = {typeDefs, resolvers};