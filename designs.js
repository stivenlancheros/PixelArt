function makeGrid() {

// save the inputs
const rows= $("input_height").val();
const cols= $("input_weight").val();
const tables= $("canvas");

//loop to create the table

for (i=0; i < rows; i++){
tables.append("<tr></tr>");
 for (n=0; n< cols; n++){
   tables.children().last().append("<td></td>");
  };
}
}
$("input[type='submit']").click(function(e) {
e.preventDefault(); //Required to avoid submit and page reload
makeGrid();
});
