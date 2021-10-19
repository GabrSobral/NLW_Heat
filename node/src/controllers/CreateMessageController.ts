import { Request, Response } from 'express'
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const user_id = request.user_id

    const messageData = await new CreateMessageService().execute(message, user_id)
    
    return response.json(messageData)
  }
}
export { CreateMessageController }