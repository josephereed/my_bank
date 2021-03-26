import { Request, Response, Router } from 'express';
const router = Router();
import auth from '../middlewares/auth';

router.post('/api/users/currentuser', auth, (req: Request, res: Response) => {
  res.send({msg: 'Made it to route', currentUser: req.body.cust_username })
});

export { router as currentUserRouter };
