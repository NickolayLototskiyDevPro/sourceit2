'use strict'

$(document).ready(function($) {
	$('.tabs_menu a').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$('.tabs_menu .active').removeClass('active');
		$(this).addClass('active');
		$('.task').hide();
		$('#'+$(this).attr('href')).fadeIn(400);
	});
});

window.onload = init;

function init() {
	var messageString = document.getElementById("countAmmo");
	messageString.innerHTML = Leopard_2A7.ammunition;
	positionTank();
}
//*******************************start task1(Leopard_2А7)******************************

var ActionTank = {
	charged: false,
	started: false,
	riding: false,
	position: 4,

	charge: function() {
		if (this.ammunition) {
			if (!this.charged) {
				this.charged = true;
				view.displayFire('<span class="blue">The gun charged!</span>');
			} else {
				view.displayFire('<span class="yellow">The gun already charged!</span>');
			}
		} else {
			view.displayFire('<span class="red">Ammunition ended!</span>');
		}
	},
	fire: function() {
		if (this.ammunition) {
			if (this.charged) {
				this.charged = false;
				this.ammunition--;
				view.displayAmmunition(this.ammunition);
				view.displayFire('<span class="green">Bang!</span>');
			} else {
				view.displayFire('<span class="yellow">First you charge the gun!</span>');
			}
		} else {
			view.displayFire('<span class="red">Ammunition ended!</span>');
		}
	},
	start: function() {
		if (this.reservoir) {
			if (!this.started) {
				this.started = true;
				view.displayDrive('<span class="blue">Started the engine of Leopard_2А7!</span>');
			} else {
				view.displayDrive('<span class="yellow">The engine already started!</span>');	
			}
		} else {
			view.displayDrive('<span class="red">Reservoir empty</span>');
		}
	},
	stop: function() {
		if (this.started) {
			this.started = false;
			this.riding = false;
			view.displayDrive('<span class="red">The Leopard_2А7 stopped</span>');
		} else {
			view.displayDrive('<span class="yellow">The Leopard_2А7 and so stopped</span>');
		}
	},
	drive: function() {
		if (this.reservoir) {
			if (this.started && !this._riding) { 
				this.riding = true;
				this.reservoir -= 20;
				this.movement();
				view.displayDrive('<span class="green">Leopard_2А7 rides!</span>');
				view.displayReservoir(this.reservoir);
			} else if (this._started && this._riding) {
				this.reservoir -= 20;
				this.movement();
				view.displayReservoir(this.reservoir);
				view.displayDrive('<span class="yellow">Leopard 2A7 is still going!</span>');
			} else {
				view.displayDrive('<span class="red">First you start the Leopard_2А7!</span>');
			}
		} else {
			view.displayDrive('<span class="red">Reservoir empty</span>');
		}
	},
	movement: function() {
		this.position++;
		console.log(this.position);
	}
};

function Tank(params) {
	this.name = params.name;
	this.country = params.country;
	this.crew = params.crew;
	this['dimensions weight'] = params['dimensions weight'];
	this.armament = params.armament;
	this.ammunition = params.ammunition;
	this.mobility = params.mobility;
	this.reservoir = params.reservoir
}

var Leopard_2A7_Params = {
	name: 'Leopard_2А7',
	country: 'Germany',
	crew: ['driver mechanic', 'commander', 'aimer', 'charger'],
	'dimensions weight': {
		weight: '67.5 t',
		'length gun forward': '10.97 m',
		'hull length': '7.7 m',
		width: '4 m',
		height:	'~ 3 m'
	},
	armament: {
		'main gun': '120-mm smoothbore',
		'machine guns': '1 x 12.7-mm, 1 x 7.62-mm',
		'elevation range': '- 9 to + 20 degrees',
		'traverse range': '360 degrees',
	},
	ammunition: 10,
	mobility: {
		engine:	'MTU MB-837 Ka501 diesel',
		'engine power':	'1 500 hp',
		'maximum road speed':	'72 km/h',
		range:	'450 km'
	},
	reservoir: 100
};

Tank.prototype.constructor = Tank;
Tank.prototype = ActionTank;

var Leopard_2A7 = new Tank(Leopard_2A7_Params);

var positionTank = function() {
	console.log(Leopard_2A7.position);
}

function tankFire(target) {
	var act = target.id;
	act == 'charge' ? Leopard_2A7.charge(): Leopard_2A7.fire();
}

function tankReadiness(target) {
	var act = target.id;
	act == 'start' ? Leopard_2A7.start(): Leopard_2A7.stop();
}

function tankMove(target) {
	var act = target.id;
	Leopard_2A7.drive();
}

var view = {
	displayDrive: function(msg) {
		var messageString = document.getElementById("tankAction");
		messageString.innerHTML = msg;
	},
	displayFire: function(msg) {
		var messageString = document.getElementById("tankFire");
		messageString.innerHTML = msg;
	},
	displayAmmunition: function(msg) {
		var messageString = document.getElementById("countAmmo");
		messageString.innerHTML = msg;
	},
	displayReservoir: function(msg) {
		var messageString = document.getElementById("countResW");
		var styleWidth = msg;
		if (styleWidth <= 33) {
			messageString.style.cssText='background-color: #ed3f10; width: ' + styleWidth + '%';
		} else if (styleWidth <= 66) {
			messageString.style.cssText='background-color: #f0f010; width: ' + styleWidth + '%';
		} else {
			messageString.style.width = styleWidth + '%';
		}
	}
};

//*******************************start task2***************************

var res = document.getElementById('resultTaskTwo');

function startTimer() {
	var i = 10;
	var timerId = setTimeout( function start() {
		res.innerHTML = i;
		if ( i > 0) setTimeout(start, 1000);
		i--;
	},1000);

};

var p = "var res = document.getElementById('resultTaskTwo');";

function printFuncton() {
	var res = document.getElementById('resultTaskTwoFunction');

	return res.innerHTML = '<pre><p>' + p + '</p>' + startTimer + '</pre>';
}

//*******************************start task3***************************