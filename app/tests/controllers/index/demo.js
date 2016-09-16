/***** import node.js librarie *****/

/***** import third-party libraries *****/
var  expect = require('chai').expect;

/***** import own libraries *****/
//import demo from '../../controllers/index/demo';
//console.log(demo.add(1,2));

var demo = require('../../../controllers/index/demo');
describe('/', function(){
	console.log(demo.demo);
	it('should be return 3', function(){
		var result;
		try{
			result = demo.demo.add(1,2);
			console.log(result)
		}catch(error){
			expect(error).to.not.exist;
		}
		expect(result).is.equal(3);
	})
})

//sudo mocha --require babel-register demo.js