


$("#btn1").on("click",function makeGrid()
{
$("#pixelCanvas").find('tbody').remove();

Height=$("#inputHeight").val();
Width=$("#inputWeight").val();

	 $("#pixelCanvas").append("<tbody></tbody>");
	for(var i=0 ;i<Height;i++)
	{
		
		 $("#pixelCanvas").find('tbody').append("<tr></tr>");
	}
	for(var y=0;y<Width;y++)
			{
			 $("#pixelCanvas").find('tr').append("<td></td>");
			}
});
$("#pixelCanvas").on('click','td',function ()
{
	var colors=$("#colorPicker").val();
	$(this).css("background-color",colors);

});
