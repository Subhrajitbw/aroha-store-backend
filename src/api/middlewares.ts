import { 
  defineMiddlewares, 
  validateAndTransformBody,
} from "@medusajs/framework/http"
import { 
  CreateCategoryImagesSchema,
} from "./admin/categories/[category_id]/images/route"
import { 
  UpdateCategoryImagesSchema,
} from "./admin/categories/[category_id]/images/batch/route"
import { 
  DeleteCategoryImagesSchema,
} from "./admin/categories/[category_id]/images/batch/route"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/categories/:category_id/images",
      method: ["POST"],
      middlewares: [
        validateAndTransformBody(CreateCategoryImagesSchema),
      ],
    },
    {
      matcher: "/admin/categories/:category_id/images/batch",
      method: ["POST"],
      middlewares: [
        validateAndTransformBody(UpdateCategoryImagesSchema),
      ],
    },
    {
      matcher: "/admin/categories/:category_id/images/batch",
      method: ["DELETE"],
      middlewares: [
        validateAndTransformBody(DeleteCategoryImagesSchema),
      ],
    },
  ],
})