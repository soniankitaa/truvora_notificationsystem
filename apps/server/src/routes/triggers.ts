import { Router } from "express";
import { tenantMiddleware } from "../middleware/tenant.middleware.js";

import {
  inviteTeamMember,
  creatorReply,
} from "../controllers/trigger.controller.js";

const router = Router();

router.use(tenantMiddleware);

router.post(
  "/member-invited",
  inviteTeamMember
);

router.post(
  "/creator-replied",
  creatorReply
);

export default router;