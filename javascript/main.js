/* CURRENTLY IN: javascript/main.js */


var g = new Graph();
 
/* add a simple node */
g.addNode("strawberry");
g.addNode("cherry");
 
/* add a node with a customized label */
g.addNode("id34", { label : "Tomato" });
 
/* Advanced node example: Add a node with a customized shape
   (the Raphael graph drawing implementation can draw this shape, please
   consult the RaphaelJS reference for details http://raphaeljs.com/)
   Note: Here's the place for even more tweaking! */
 
/* First: Write a custom node render function. */
var render = function(r, n) {
        /* the Raphael set is obligatory, containing all you want to display */
        var set = r.set().push(
            /* custom objects go here */
            r.rect(n.point[0]-30, n.point[1]-13, 62, 86)
                .attr({"fill": "#fa8", "stroke-width": 2, r : "9px"}))
                .push(r.text(n.point[0], n.point[1] + 30, n.label)
                    .attr({"font-size":"20px"}));
        /* custom tooltip attached to the set */
        set.items.forEach(
            function(el) {
                el.tooltip(r.set().push(r.rect(0, 0, 30, 30)
                    .attr({"fill": "#fec", "stroke-width": 1, r : "9px"})))});
        return set;
    };
 
g.addNode("id35", {
    label : "meat\nand\ngreed" ,
    /* filling the shape with a color makes it easier to be dragged */
    render : render
});
 
/* connect nodes with edges */
g.addEdge("strawberry", "cherry");
g.addEdge("cherry", "apple");
 
/* a directed connection, using an arrow */
g.addEdge("id34", "cherry", { directed : true } );
 
/* customize the colors of that edge */
g.addEdge("id35", "apple", { stroke : "#bfa" , fill : "#56f", label : "Label" });
 
/* add an unknown node implicitly by adding an edge */
g.addEdge("strawberry", "apple");
 
/* layout the graph using the Spring layout implementation */
var layouter = new Graph.Layout.Spring(g);
layouter.layout();


/* draw the graph using the RaphaelJS draw implementation */
var renderer = new Graph.Renderer.Raphael('canvas', g, 500, 500);

renderer.draw();











































































/*
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://fewd65finalproject.firebaseio.com/");

// Users -
var Users = {};

// sign up

Users.signUp = function signUp( ref, emailAddress, password, fullName, onUserRegistered ) {

	ref.createUser({
		email: emailAddress,
		password: password
	}, function(error, userData) {
		if (error) {
			console.log( error );
		}
		else {
			ref
				.child('users')
				.child( userData.uid )
				.set({
					fullName: fullName
				});
		}
		onUserRegistered( error, userData );
	});

	console.log('here');
}

function whenSignedUp( error, userData ) {
	// alert('done')
	console.log( error, userData )
}

Users.signUp(
	myFirebaseRef,
	'aaron.samuel.marcus@gmail.com',
	'abc123',
	'Aaron Marcus',
	whenSignedUp
);

      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myFirebaseRef.set('User ' + name + ' says ' + );
          $('#messageInput').val('');
        }
      });

myFirebaseRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });

function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
*/