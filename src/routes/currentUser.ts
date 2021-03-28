import { Request, Response, Router } from 'express';
const router = Router();
import auth from '../middlewares/auth';

router.get('/api/users/currentuser', auth, (req: Request, res: Response) => {
  res.send({
    currentUser: req.body.cust_username,
    auth: req.body.auth,
  });
});

export { router as currentUserRouter };
