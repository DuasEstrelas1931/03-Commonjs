// todas as funções que lidam com produtos

const productType = {
    version: "digital",
    tax: "x1",
};

async function getFullname(codeId, productName) {
    
    console.log("product: " + codeId + "--" + productName);
    await doBreakLine();
};

// hidden  Members function
async function doBreakLine(params) {
    console.log("\n");
    
};

async function getProductLabel(productName) {
    console.log("Product: " + productName);
    
}

module.exports = {
    getFullname,
    getProductLabel,
    productType,
};