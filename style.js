function getExperience(){
	var a = document.getElementById("title-top");
	a.style.display = 'none';
	var b = document.getElementById("title-main");
	b.innerHTML ='Kinh nghiệm làm việc của tôi :';
	var c = document.getElementById("title-bottom") ;
	c.style.display = 'none' ;
	var d = document.getElementById("title-end") ;
	d.innerHTML = "- Có kinh nghiệm tham gia một số dự án nhỏ trên Freelance .";
	var f = document.getElementById("a1");
	f.innerHTML = "- Chưa có kinh nghiệm thực tập ." ;
	f.style.display = 'block';
	var g = document.getElementById("a2") ;
	g.innerHTML = "- Có mối quan hệ tốt với nhiều bạn trong ngành nghề .";
	g.style.display = 'block';
	var e = document.getElementById("social") ;

}
document.getElementById("Experience").addEventListener('click',getExperience);


function getAbout(){
	var h =  document.getElementById('title-top');
	h.style.display = 'block';
	h.innerHTML = 'Hi there ! I m';
	document.getElementById('title-main').innerHTML = 'Lê Văn Hoàng';
	var h1 =document.getElementById("title-bottom");
	h1.innerHTML = " Contact me !";
	h1.style.display = 'block';
	var h2 =document.getElementById("title-end");
	h2.innerHTML = 'SĐT:0354613983 - Email:hoang682681@gmail.com';
	document.getElementById('a1').style.display = 'none';
	document.getElementById('a2').style.display = 'none';
}
document.getElementById('About').addEventListener('click',getAbout);

function getEducation(){
	var a = document.getElementById("title-top");
	a.style.display = 'none';
	var b = document.getElementById("title-main");
	b.innerHTML ='Trình độ :';
	var c = document.getElementById("title-bottom") ;
	c.style.display = 'none' ;
	var d = document.getElementById("title-end") ;
	d.innerHTML = "2017 - nay : Theo học công nghệ thông tin chuyên ngành phần mềm";
	var f = document.getElementById("a1");
	f.innerHTML = "Basic      : Có kiến thức cơ bản về HTML ,css ,javascript ,Boostrap,..." ;
	f.style.display = 'block';
	var g = document.getElementById("a2") ;
	g.style.display = 'none';
	var e = document.getElementById("social") ;

}
document.getElementById('Education').addEventListener('click',getEducation);


function getSkills(){
	var a = document.getElementById("title-top");
	a.style.display = 'none';
	var b = document.getElementById("title-main");
	b.innerHTML ='Kỹ năng :';
	var c = document.getElementById("title-bottom") ;
	c.style.display = 'none' ;
	var d = document.getElementById("title-end") ;
	d.innerHTML = "Hiểu biết về thiết kế web responsive";
	var f = document.getElementById("a1");
	f.innerHTML = "Chuyển file PSD sang HTML,CSS" ;
	f.style.display = 'block';
	var g = document.getElementById("a2") ;
	g.innerHTML = 'Kỹ năng mềm :Sử dụng thành thạo một số pm liên quan Git ,Photosjop,...';
	g.style.display = 'block';
	var e = document.getElementById("social") ;

}
document.getElementById('Skills').addEventListener('click',getSkills);


function getInterests(){
	var a = document.getElementById("title-top");
	a.style.display = 'none';
	var b = document.getElementById("title-main");
	b.innerHTML ='Sở thích :';
	var c = document.getElementById("title-bottom") ;
	c.style.display = 'none' ;
	var d = document.getElementById("title-end") ;
	d.innerHTML = "- Đá bóng";
	var f = document.getElementById("a1");
	f.innerHTML = "- Nghe nhạc" ;
	f.style.display = 'block';
	var g = document.getElementById("a2") ;
	g.innerHTML = '- Đi du lịch';
	g.style.display = 'block';
	var e = document.getElementById("social") ;

}
document.getElementById('Interests').addEventListener('click',getInterests);


function getPub(){
	var a = document.getElementById("title-top");
	a.style.display = 'none';
	var b = document.getElementById("title-main");
	b.innerHTML ='Dự án :';
	var c = document.getElementById("title-bottom") ;
	c.style.display = 'none' ;
	var d = document.getElementById("title-end") ;
	d.outerHTML = "<a>hoangoliverblog.github.io</a>";
	d.setAttribute("href","hoangoliverblog.github.io");
	var f = document.getElementById("a1");
	f.innerHTML = "- Nghe nhạc" ;
	f.style.display = 'none';
	var g = document.getElementById("a2") ;
	g.innerHTML = '- Đi du lịch';
	g.style.display = 'none';
	var e = document.getElementById("social") ;

}
document.getElementById('Publications').addEventListener('click',getPub);



function getContact(){
	var a = document.getElementById("title-top");
	a.style.display = 'none';
	var b = document.getElementById("title-main");
	b.innerHTML ='Thông tin liên hệ :';
	var c = document.getElementById("title-bottom") ;
	c.innerHTML = "https://www.facebook.com/ehp.chuk.9";
	c.style.display = 'block' ;
	var d = document.getElementById("title-end") ;
	d.innerHTML = "SĐT:0354613983";
	var f = document.getElementById("a1");
	f.innerHTML = "Địa chỉ : số 19 ,ngõ 446 ,Cổ Nhuế 2 ,bắc Lừ Liêm ,Hà Nội" ;
	f.style.display = 'block';
	var g = document.getElementById("a2") ;
	g.innerHTML = 'Gmail : hoang682681@gmail.com';
	g.style.display = 'block';
	var e = document.getElementById("social") ;

}
document.getElementById('Contact').addEventListener('click',getContact);