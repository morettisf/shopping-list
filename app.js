// 1) create an object to hold items in an array
var itemsObject = {
	items : []
};

// 2) create event listener for submitting form and grabbing value
$("#js-shopping-list-form").submit(function(event) {
	event.preventDefault();
	addItem(itemsObject, $("#shopping-list-entry").val());
	renderItem(itemsObject, $(".shopping-list"));
}) 

// 3) FUNCTION WITHIN VAR - push items into object array
var addItem = function(itemsObject, item) {
	itemsObject.items.push(item);
}

// 4) FUNCTION  WITHIN VAR - add markup into HTML for item
var renderItem = function(itemsObject, element) {
	var itemHTML = itemsObject.items.map(function(item) {
	return "<li class='newItem'><span class='shopping-item'>" + item + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button data-id='" + item + "' class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>";
	});  
	element.html(itemHTML);
}   

// create event listener for checking off item
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
	$(this).closest("li").toggleClass("shopping-item__checked");
})

// remove item from list and array
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
	var name = $(this).attr('data-id');
	var index = itemsObject.items.indexOf(name);
	itemsObject.items.splice(index, 1);

//	delete itemsObject.items[index];  // problem with this method, it does not reassign the index values
	$(this).closest("li").remove();

	console.log(itemsObject.items);

}) 

