const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
 const cors=require('cors')
 const cookieParser=require('cookie-parser')


 require('dotenv').config();
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin:[ 'http://localhost:8080' ]
}))



const mongoString = process.env.MONGODB;
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
});

database.once('connected', async () => {
  try {
    console.log('Database Connected');
  } catch (error) {
    console.error('Error during database connection:', error);
  }
});

const routes= require('./routes/routes')
app.use('/api',routes)

const port = process.env.PORT || 5000;
app.listen(port,() =>{
    console.log(`server at http://localhost:${port}`);
})
