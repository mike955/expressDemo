/***** import node.js librarie *****/

/***** import third-party libraries *****/
var  expect = require('chai').expect;

/***** import own libraries *****/
import Demo from '../../../controllers/index/demo';

describe('/', function(){
	it('should be return 3', function(){
		var result;
		try{
			result = Demo.add(1,2);
			console.log(result)
		}catch(error){
			expect(error).to.not.exist;
		}
		expect(result).is.equal(3);
	})
})

//sudo mocha --require babel-register demo.js
//mocha --compilers js:babel-core/register demo.js