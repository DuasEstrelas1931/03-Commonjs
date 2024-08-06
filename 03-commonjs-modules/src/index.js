// const product = require("./services/products")
const { getFullname, getProductLabel} = require("./services/products")
const config = require("./services/config");
const dataBase = require("./services/dataBase");

async function main(params) {
    console.log("carrinho de compras:");

    getFullname("35", "tela",);
    getProductLabel("Teclado");
    // product.getFullname("408", "mousepad",);
    // product.getFullname("508", "mouse",);
    // p.getFullname("508", "mouse");
    // p.getProductLabel("keyboard");
    console.log(config.version);
    // console.log(product.productType.version);
    dataBase.connectToDataBase("MongoDB");
    dataBase.disconnectToDataBase(" do MongoDB");
}

main()