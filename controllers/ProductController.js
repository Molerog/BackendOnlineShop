const {Product, Order, Category, Section} = require('../models/index');

const ProductController = {
    async create(req,res) {
    try {
        if (req.body.product === !null || req.body.price === !null ||req.body.SectionId === !null ||req.body.CategoryId){
        const product = await Product.create({...req.body})
        res.status(201).send({message: "Product added...", product})
      } else {
        res.status(401).send({message: "Please fill all the fields..."})
      }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
            "We had an issue creating the product..."
        })
    }
    },
    async getAllProduct(req,res){
        try {
          const allproducts = await Product.findAll()
           res.status(201).send({message: 'Search completed...', allproducts})
        } catch (error) {
            console.log(error)
            res.status(500).send({message: "We had an issue searching the products..."})
        }
    },
    async getProductOrder(req, res) {
        try {
          const productsOrders = await Product.findAll({
            include: [Order]
          });
          res.status(201).send({ message: 'Show relations', productsOrders });
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .send({ message: ' We had a problem looking for relations' });
        }
      },
      async updateProduct(req, res) {
        try {
          await Product.update({...req.body},
            {
              where: {
                id: req.params.id,
              }
            }
          );
          res.status(201).send({message: 'Product updated...'})
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .send({ message: ' We had a problem updating the product...' });
        }
      },
      async deleteProduct(req,res) {
        try {
            await Product.destroy({
            where:{
              id:req.params.id
            }
          },
          );
          res.status(201).send({message: 'Product has been deleted...'})
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .send({ message: ' We had a problem deleting the product...' });
        }
      },
      async getProductCategorySection(req,res) {
        try {
           const productSectionCategory = await Product.findAll({
              attributes: {exclude: ['createdAt','updatedAt','SectionId','CategoryId']},
              include: [{
                model:Section,
                attributes: ['section']
              },
              {
                model:Category,
                attributes: ['category']
              }
            ]
            })
            res.status(201).send({message: 'Search completed...', productSectionCategory})
        } catch (error) {
          res.status(500).send({ message: ' We had a problem searching the products...' });
        }
      },
      async getProductById (req, res){
        try {
          const productById = await Product.findAll({
            where:{
              id: req.params.id
            }
          },
          );
          res.status(201).send({message: 'Product found...',productById})
        } catch (error) {
          res.status(500).send({ message: ' We had a problem searching the product...' });
        }
      },
      async getProductByName (req,res){
        try {
          const ProductByName = await Product.findAll({
            where:{
              product: req.params.product
            }
          },
          );
          res.status(201).send({message: 'Product found...', ProductByName})              
        } catch (error) {
          res.status(500).send({message: ' We had a problem searching the product...' });
        }
      },
      async getProductByPrice (req,res){
        try {
          const ProductByPrice = await Product.findAll({
            where:{
              price: req.params.price
            }
          },
          );
          res.status(201).send({message: 'Product found...', ProductByPrice})              
        } catch (error) {
          res.status(500).send({message: ' We had a problem searching the product...' });
        }
      },
      async productOrderedByPrice (req, res){
        try {
          const orderdedByPrice = await Product.findAll({
              order:[
                ['price', 'DESC']
              ]
          },
          );
          res.status(201).send({message: 'Product ordered by price...', orderdedByPrice})  
        } catch (error) {
          res.status(500).send({message: ' We had a problem ordering the product by price...' });
        }
      }
}

module.exports = ProductController