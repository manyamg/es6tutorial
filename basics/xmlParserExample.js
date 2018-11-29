var xml2js = require('xml2js');
var xml = "<config><test>Hello</test><data>SomeData</data></config>";

var extractedData = "";
var parser = new xml2js.Parser();
parser.parseString(xml, function(err,result){
  //Extract the value from the data element
  extractedData = result['config']['data'];
  console.log(extractedData);
}); //SomeData


var xpath = require('xpath')
  , dom = require('xmldom').DOMParser
 
var xml = "<book><title>Harry Potter</title></book>"
var doc = new dom().parseFromString(xml)
var nodes = xpath.select("//title", doc)
 
console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
console.log("Node: " + nodes[0].toString())

//Evaluate string values directly:
var xml = "<book><title>Harry Potter</title></book>";
var doc = new dom().parseFromString(xml);
var title = xpath.select("string(//title)", doc);
var title1 = xpath.select('//title/text()') //Harry Potter
 
console.log(title); //Harry Potter

//Attributes
var xml = "<book author='J. K. Rowling'><title>Harry Potter</title></book>"
var doc = new dom().parseFromString(xml)
var author = xpath.select1("/book/@author", doc).value
 
console.log(author) //J. K. Rowling

var xml = '<book><title>Harry</title><title>Potter</title></book>';
var doc = new dom().parseFromString(xml);
console.log(xpath.select('count(//title)')) // 2

var xml = '<characters><character name="Snape" sex="M" age="50" /><character name="McGonnagal" sex="F" age="65" /><character name="Harry" sex="M" age="14" /></characters>';
var doc = new dom().parseFromString(xml);
var characters = xpath.select('/*/character[@sex = "M"][@age > 40]/@name', doc); // multiple attributes
