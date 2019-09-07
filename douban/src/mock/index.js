var Mock = require('mockjs');


// 配置数据请求
// Mock.mock("/books","get",require("./json/book"))
Mock.mock("/shouyes","get",require("./json/shouye"))
Mock.mock("/movies","get",require("./json/movie"))
Mock.mock("/goodmovies","get",require("./json/goodmovie"))
Mock.mock("/lists","get",require("./json/list"))
Mock.mock("/searches","get",require("./json/search"))
Mock.mock("/books","get",require("./json/book"))
Mock.mock("/groupa","get",require("./json/groupa"))