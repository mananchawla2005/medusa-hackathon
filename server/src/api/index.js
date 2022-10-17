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

  router.get("/store/products/:id/reviews", cors(storeCorsOptions), (req, res) => {
    const productReviewService = req.scope.resolve("productReviewService")
    productReviewService.getProductReviews(req.params.id).then((product_reviews) => {
      return res.json({
        product_reviews
      })
    })
  })

  router.use(bodyParser.json())
  router.options("/store/products/:id/reviews", cors(storeCorsOptions))
  router.post("/store/products/:id/reviews", cors(storeCorsOptions), (req, res) => {
    const productReviewService = req.scope.resolve("productReviewService")
    productReviewService.addProductReview(req.params.id, req.body.data).then((product_review) => {
      return res.json({
        product_review
      })
    })
  })

  const corsOptions = {
    origin: projectConfig.admin_cors.split(","),
    credentials: true,
  }
  router.options("/admin/products/:id/reviews", cors(corsOptions))
  router.get("/admin/products/:id/reviews", cors(corsOptions), async (req, res) => {
    const productReviewService = req.scope.resolve("productReviewService")
    productReviewService.getProductReviews(req.params.id).then((product_reviews) => {
      return res.json({
        product_reviews
      })
    })
  })

  // wishlist
  router.get('/store/wishlist/:id', cors(corsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const wishlist = await wishlistService.retrieve(req.params.id)
    res.json(wishlist)
  })

  router.post('/store/wishlist/', cors(corsOptions), async (req, res) => {
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
  router.post('/store/wishlist/:id/wish-item', cors(corsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const wishlist = await wishlistService.addWishItem(req.params.id, req.body.product_id)
    res.json(wishlist)
  })

  router.delete('/store/wishlist/:id/wish-item/:item_id', cors(corsOptions), async (req, res) => {
    const wishlistService = req.scope.resolve('wishlistService')
    const wishlist = await wishlistService.removeWishItem(req.params.item_id)
    res.json(wishlist)
  })

  return router;
}