const rgbToHexColor = require('./06RGBtoHex');
const assert = require('chai').assert;
describe('rbxToHexColor',function () {
    it('should return hex color code with valid input',function () {
        let red=139;
        let green=10;
        let blue=200;
        let expected = '#8B0AC8';
        let result = rgbToHexColor(red,green,blue);
        assert.equal(expected,result);
    });
    it('should return hex color for white',function () {
        let red=255;
        let green=255;
        let blue=255;
        let expected = '#FFFFFF';
        let result = rgbToHexColor(red,green,blue);
        assert.equal(expected,result);
    });
    it('should return hex color for black',function () {
        let red=0;
        let green=0;
        let blue=0;
        let expected = '#000000';
        let result = rgbToHexColor(red,green,blue);
        assert.equal(expected,result);
    });
    it('should return undefined when color is less than  min',function () {
        let red=100;
        let green=50;
        let blue=-1;
        
        let result = rgbToHexColor(red,green,blue);
        assert.isUndefined(result);
    });
    it('should return undefined when color is more than max',function () {
        let red=256;
        let green=50;
        let blue=125;
        
        let result = rgbToHexColor(red,green,blue);
        assert.isUndefined(result);
    });
    it('should return undefined when  all colors are negative',function () {
        let red=-256;
        let green=-50;
        let blue=-125;
        
        let result = rgbToHexColor(red,green,blue);
        assert.isUndefined(result);
    });
    it('should return undefined when  all colors are more than max',function () {
        let red=256;
        let green=350;
        let blue=325;
        
        let result = rgbToHexColor(red,green,blue);
        assert.isUndefined(result);
    });
    it('should return undefined if the input is empty',function () {
    
        let result = rgbToHexColor();
        assert.isUndefined(result);
    });
    it('should return undefined when one color is provided',function () {
    
        let result = rgbToHexColor(128);
        assert.isUndefined(result);
    });
    it('should return undefined when only two colors are provided',function () {
    
        let result = rgbToHexColor(128,255);
        assert.isUndefined(result);
    });
});