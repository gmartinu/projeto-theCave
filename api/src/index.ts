import express from 'express';
import MainRouter from './controllers/main';

const app = express()

app.use(express.json())

app.use('/agendamento', MainRouter)
app.use('/pagamentos', MainRouter)
app.use('/pessoa', MainRouter)
app.use('/servicos', MainRouter)

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)