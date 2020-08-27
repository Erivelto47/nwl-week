import expres, {Request, Response} from 'express'

import ClassesController from "./Classes/ClassesController";
import ConnectionsController from "./Connections/ConnectionsController";
import LoginController from "./login/LoginController";
import LoginServiceImpl from "./login/LoginServiceImpl";
import UserServiceImpl from "./user/UserServiceImpl";

const routes = expres.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const loginController = new LoginController(new LoginServiceImpl(new UserServiceImpl()));

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/login', (request: Request, response: Response) => loginController.index(request, response));

export default routes;
