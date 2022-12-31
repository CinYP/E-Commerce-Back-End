const router = require('express').Router();
const apiRoutes = require('./api');
//const categoryRoutes = require('./category-routes');
//const productRoutes = require('./product-routes');
//const tagRoutes = require('./tag-routes');

router.use('/api', apiRoutes);
//do I need to define routes here?
//router.use("/categories", require('./categories'));
//router.use("/products", require('./products'));
//router.use("/tags", tagsRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;