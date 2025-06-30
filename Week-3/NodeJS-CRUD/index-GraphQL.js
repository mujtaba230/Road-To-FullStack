const express = require('express');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const PORT = 3000;

let users = [];
let nextId = 11;


async function fetchInitialUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users = response.data;
    console.log('Fetched users from JSONPlaceholder.');
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
  }
}


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => users
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: (_, args) => users.find(u => u.id === args.id)
    }
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (_, { name, email }) => {
        const newUser = { id: nextId++, name, email };
        users.push(newUser);
        return newUser;
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve: (_, { id, name, email }) => {
        const user = users.find(u => u.id === id);
        if (!user) throw new Error('User not found');
        if (name) user.name = name;
        if (email) user.email = email;
        return user;
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, { id }) => {
        const index = users.findIndex(u => u.id === id);
        if (index === -1) throw new Error('User not found');
        const deleted = users.splice(index, 1);
        return deleted[0];
      }
    }
  }
});


const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send('Welcome! Use /graphql endpoint to interact with GraphQL API.');
});

app.listen(PORT, async () => {
  await fetchInitialUsers();
  console.log(`GraphQL API running at http://localhost:${PORT}/graphql`);
});
