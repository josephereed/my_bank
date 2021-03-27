import { Request, Response, Router } from 'express';
const router = Router();
import auth from '../middlewares/auth';

router.get('/api/users/currentuser', auth, (req: Request, res: Response) => {
  res.send({msg: 'Made it to route', currentUser: req.body.cust_username })
});

export { router as currentUserRouter };
