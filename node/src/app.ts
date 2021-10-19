import 'dotenv/config'
import express from 'express'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(router)

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (request, response) => {
  const { code } = request.query
  return response.json(code)
})

const PORT  = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))