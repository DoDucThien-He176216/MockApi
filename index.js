const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const Customers = require('./models/CustomersSchema');
const Receipts = require('./models/ReceiptsSchema');
const Sales = require('./models/SalesSchema');
const Banks = require('./models/BanksSchema');
const InventoryOuts = require('./models/InventoryOutsSchema');
const SaleItems = require('./models/SaleItemsSchema');
const Goods = require('./models/GoodsSchema');


const cors = require("cors");
app.use(cors());

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

var bodyParser = require("body-parser");
const BaseResponse = require("./base.response");

app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require("mongoose");
const { console } = require("inspector");

const MONGO_URI = "mongodb+srv://thienduc2552003:Ag1RjZY8IHBomCD3@mockdata.hacn2.mongodb.net/MockData?retryWrites=true&w=majority";

// Kết nối MongoDB
mongoose.connect(MONGO_URI).then(() => {
    console.log("✅ Kết nối MongoDB thành công!");
}).catch(err => {
    console.error("❌ Lỗi kết nối MongoDB: ", err);
});
// API CRUD chung
const createCrudRoutes = (model, route) => {
    app.get(`/${route}`, async (req, res) => {
      try {
        const items = await model.find();
        res.json(items);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.get(`/${route}/:id`, async (req, res) => {
      try {
        const item = await model.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Not found' });
        res.json(item);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.post(`/${route}`, async (req, res) => {
      try {
        console.log(newItem);
        const newItem = new model(req.body);
        await newItem.save();
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.put(`/${route}/:id`, async (req, res) => {
      try {
        const updatedItem = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ error: 'Not found' });
        res.json(updatedItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.delete(`/${route}/:id`, async (req, res) => {
      try {
        const deletedItem = await model.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  };
  
  // Tạo API cho từng schema
  createCrudRoutes(Customers, 'customers');
  createCrudRoutes(Receipts, 'receipts');
  createCrudRoutes(Sales, 'sales');
  createCrudRoutes(Banks, 'banks');
  createCrudRoutes(InventoryOuts, 'inventory-outs');
  createCrudRoutes(SaleItems, 'sale-items');
  createCrudRoutes(Goods, 'goods');
server.listen(PORT, () => {
    console.log("listening on *: " + PORT);
});
