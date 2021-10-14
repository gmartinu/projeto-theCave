import { Request } from "express";
import { models } from "./models";

export const getModel = (req: Request) => {
    const fullModel : any  = models.find((x: any) => x.url === req.baseUrl);
    return fullModel
}