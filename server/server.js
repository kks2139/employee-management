const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const cors = require('cors'); // 다른 도메인에서 들어오는 요청에 대해 cors제한을 걸지 않게한다.
const {typeDefs, resolvers} = require('./graphql');
const db = require('./database');
const PORT = process.env.PORT || 3001;  // 포트설정

const app = express();
app.use(express.json(), cors());

const apolloServer = new ApolloServer({typeDefs, resolvers});
const startApollo = async ()=> {
    await apolloServer.start(); // 먼저 아폴로서버 동기로 start 해주고 applyMiddleware 해줘야함, 안그러면 에러..
    apolloServer.applyMiddleware({app}); // express와 연동
}
startApollo();

app.listen(PORT, ()=>{
    console.log(`Apollo-Express port : ${PORT}`);
    console.log(`GraphQL path : ${apolloServer.graphqlPath}`);
});




app.get('/', (req, res)=> res.send(db.employee));
// app.get('/', (req, res)=> res.send('Root !!'));
app.get('/api', (req, res)=> res.send('api test !!'));