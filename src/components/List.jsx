var React = require('react');
var ListItem  = require('./ListItem.jsx');

var ingredients = [
  {"id":1,"text":"Item 1"},
  {"id":2,"text":"Item 2"},
  {"id":3,"text":"Item 3"}
];

var List = React.createClass({
  render:function(){
    var listItems  = ingredients.map(function(item){
      return <ListItem ingredient={item.text} key={item.id}/>;
    });

    return (<ul>{listItems}</ul>)
  }
});

module.exports = List;
