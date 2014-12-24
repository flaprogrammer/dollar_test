$(document).ready(function () {
	$('#start_but').click(startTest);
});


var current = 0;
var scores = 0;

function startTest () {
	$('.container').html("<div class='question'></div><div id='box1' class='box'></div><div id='box2' class='box'></div><div id='box3' class='box'></div><div id='box4' class='box'></div>");
	showQuestion(0);
	listeners();
}

function listeners () {
	$('.box').click(function () {
		var answered_num = parseInt(this.id.substr(-1));
		scores+=parseInt(questions[current].answers[answered_num-1].scores);
		nextQuestion();
	})
}

function nextQuestion () {
	current++;
	if(current<questions.length-1) {
		showQuestion(current);
	}
	else {
		finalScreen();
	}
	
}

function showQuestion (num) {
	
	$('.question').text(questions[num].question);
	$('#box1').text(questions[num].answers[0].val);
	$('#box2').text(questions[num].answers[1].val);
	$('#box3').text(questions[num].answers[2].val);
	$('#box4').text(questions[num].answers[3].val);
}

function finalScreen () {
	$('.container').html('<div class="fin">Поздравляем, вы прошли тест.<br>У вас баллов: '+scores+'</div>');
	if(scores<5) {
		$('.fin').append('<p>Лучше не суйтесь на Форекс, а купите полторашку кваса, гитару и отдыхайте на природе с друзьями.</p>');
	}
	else if(scores<10) {
		$('.fin').append('<p>Поздравляем, у вас есть зачаточные представления о таких понятиях как эмиссия, девальвация, эпляция =))</p>');
	}
	else if(scores<19) {
		$('.fin').append('<p>Вы почти ас! ЦБ или Министерство Экономики будут драться за то, чтобы принять вас на работу.</p>');
	}
	else {
		$('.fin').append('<p>Вы прирождённый маэстро и знаток. Вы случаем не родственник Мавроди?</p>');
	}
}