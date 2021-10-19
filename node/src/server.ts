import { serverHttp } from "./app"

const PORT  = process.env.PORT || 3000
serverHttp.listen(PORT, () => console.log(`Server is running at port ${PORT}`))