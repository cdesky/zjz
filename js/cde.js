$(function ()
{
	$('.nav li').each(function ()
	{
		var left = $(this).position().left;
		$(this).find('.subItmes').css('left',left);
	});

	$('.nav li:last .subItmes').css('left', 422);
	$('.left2 .subItmes').css('left',516);


	$('.nav li').bind('mouseenter',function ()
	{
		$(this).find('.subH').addClass('current');
		$(this).find('.eng').addClass('curSp');
		$(this).find('.subItmes').stop(false,true).slideDown(120);
	}).bind('mouseleave',function ()
	{
		$(this).find('.subH').removeClass('current');
		$(this).find('.eng').removeClass('curSp');
		$(this).find('.subItmes').stop(false,true).slideUp(120);
	})

	$('.newBar .newBtn').bind('click',function  (){
		var th=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.newBox dl').hide().siblings().eq(th).show();
	});

	$('.wordsBtn a').bind('click',function ()
	{
		var th = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.words p').hide().siblings().eq(th).show();
	})
});
