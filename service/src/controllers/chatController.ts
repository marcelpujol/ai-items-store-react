import { Request, Response } from "express";
import { askToAI } from "../utils/aiUtils";

const handleChat = async (req: Request, res: Response) => {
  try {
    const messages = await req.body.messages;

    const result = await askToAI(messages);

    result.pipeDataStreamToResponse(res, {
      getErrorMessage(err) {
        return `${err}`;
      },
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export default { handleChat };
