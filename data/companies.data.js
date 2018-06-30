
const faker = require ("faker");

module.exports = new Array(10).fill(null).map((ele)=>{
    return {
        name: faker.company.companyName(),
        code: faker.company.suffixes(),
        image: faker.image.business(),
        money: faker.finance.amount(),
        description: faker.lorem.sentence(),
    }
}) ;