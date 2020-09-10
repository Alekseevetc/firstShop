const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const sequalize = require("./helper/database");

const app = express()
const PORT = 8000


app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "static")))

const index = require('./routes/index')
const contact = require('./routes/contact')
const login = require('./routes/login')
const register = require('./routes/register')
const faq = require('./routes/faq')
const tac = require('./routes/tac')
const products = require('./routes/products')
const product_details = require('./routes/product_details')
const product_summary = require('./routes/product_summary')
const special_offer = require('./routes/special_offer')
const compair = require('./routes/compair')
const forgetpass = require('./routes/forgetpass')
const legal_notice = require('./routes/legal_notice')
const delivery = require('./routes/delivery')

app.use(index)
app.use(contact)
app.use(login)
app.use(register)
app.use(faq)
app.use(tac)
app.use(products)
app.use(product_details)
app.use(product_summary)
app.use(special_offer)
app.use(compair)
app.use(forgetpass)
app.use(legal_notice)
app.use(delivery)

sequalize
  .sync()
  .then((connectionRezult) => {
    //console.log("connectionRezult = ", connectionRezult);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));