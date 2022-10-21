import { Router } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { projectConfig } from "../../medusa-config"

export default () => {
  const router = Router()
  const storeCorsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true,
  }
  const adminCorsOptions = {
    origin: projectConfig.admin_cors.split(","),
    credentials: true,
  }
  router.use(bodyParser.json())
  // router.use(cors(storeCorsOptions))
  router.options("/store/products/:id/reviews", cors(storeCorsOptions))
  router.get("/store/products/:id/reviews", cors(storeCorsOptions), (req, res) => {
    const productReviewService = req.scope.resolve("productReviewService")
    productReviewService.getProductReviews(req.params.id).then((product_reviews) => {
      return res.json({
        product_reviews
      })
    })
  })

  router.options("/store/products/:id/reviews", cors(storeCorsOptions))
  router.post("/store/products/:id/reviews", cors(storeCorsOptions), (req, res) => {
    const productReviewService = req.scope.resolve("productReviewService")
    productReviewService.addProductReview(req.params.id, req.body.data).then((product_review) => {
      return res.json({
        product_review
      })
    })
  })
  // const corsOptions = {
  //   origin: projectConfig.admin_cors.split(","),
  //   credentials: true,
  // }
  // router.use(cors(corsOptions))
  router.options("/admin/products/:id/reviews", cors(adminCorsOptions))
  router.get("/admin/products/:id/reviews", cors(adminCorsOptions), async (req, res) => {
    const productReviewService = req.scope.resolve("productReviewService")
    productReviewService.getProductReviews(req.params.id).then((product_reviews) => {
      return res.json({
        product_reviews
      })
    })
  })

  // wishlist
  // router.use(cors(storeCorsOptions))
  router.options("/store/wishlist/:id", cors(storeCorsOptions))
  router.get('/store/wishlist/:id', cors(storeCorsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const wishlist = await wishlistService.retrieve(req.params.id)
    res.json(wishlist)
  })

  router.options("/store/wishlist", cors(storeCorsOptions))
  router.post('/store/wishlist/', cors(storeCorsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const payload = {region_id: req.body.region_id, customer_id: null}

    if (req.user && req.user.customer_id) {
      const customerService = req.scope.resolve("customerService")
      const customer = await customerService.retrieve(req.user.customer_id)
      payload.customer_id = customer.id
    }

    const wishlist = await wishlistService.create(payload)
    res.json(wishlist)
  })

  // Wishlist items
  router.options("/store/wishlist/:id/wish-item", cors(storeCorsOptions))
  router.post('/store/wishlist/:id/wish-item', cors(storeCorsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const wishlist = await wishlistService.addWishItem(req.params.id, req.body.product_id)
    res.json(wishlist)
  })

  router.options("/store/wishlist/:id/wish-item/:item_id", cors(storeCorsOptions))
  router.delete('/store/wishlist/:id/wish-item/:item_id', cors(storeCorsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const wishlist = await wishlistService.removeWishItem(req.params.item_id)
    res.json(wishlist)
  })

  return router;
}