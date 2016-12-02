'use strict'
window.onload = init;

function init() {
	var messageString = document.getElementById("countAmmo");
	/*messageString.innerHTML = Leopard_2А7.ammunition;*/	

	var com1 = document.getElementById('com1');
	/*com1.onclick = getObjectTank;*/
}

//*******************************start task1(Leopard_2А7)******************************

function Shooting() {
	this._charged = false;

	var self = this;

	this._charge = function() {
		if (this.ammunition) {
			if (!self.charged) {
				self.charged = true;
				view.displayFire('<span class="blue">The gun charged!</span>');
			} else {
				view.displayFire('<span class="yellow">The gun already charged!</span>');
			}
		} else {
			view.displayFire('<span class="red">Ammunition ended!</span>');
		}
	};
	this._fire = function() {
		if (this.ammunition) {
			if (self.charged) {
				self.charged = false;
				this.ammunition--;
				view.displayAmmunition(this.ammunition);
				view.displayFire('<span class="green">Bang!</span>');
			} else {
				view.displayFire('<span class="yellow">First you charge the gun!</span>');
			}
		} else {
			view.displayFire('<span class="red">Ammunition ended!</span>');
		}
	}
}

function Driving() {
	this._started = false;
	this._riding = false;

	var self = this;

	this._start = function() {
		if (this.reservoir) {
			if (!self._started) {
				self._started = true;
				view.displayDrive('<span class="blue">Started the engine of Leopard_2А7!</span>');
			} else {
				view.displayDrive('<span class="yellow">The engine already started!</span>');	
			}
		} else {
			view.displayDrive('<span class="red">Reservoir empty</span>');
		}
	};

	this._stop = function() {
		if (self._started) {
			self._started = false;
			self._riding = false;
			view.displayDrive('<span class="red">The Leopard_2А7 stopped</span>');
		} else {
			view.displayDrive('<span class="yellow">The Leopard_2А7 and so stopped</span>');
		}
	};

	this._drive = function() {
		if (this.reservoir) {
			if (self._started && !self._riding) { 
				self._riding = true;
				this.reservoir -= 50;
				view.displayDrive('<span class="green">Leopard_2А7 rides!</span>');
				view.displayReservoir(this.reservoir);
			} else if (self._started && self._riding) {
				this.reservoir -= 50;
				view.displayReservoir(this.reservoir);
				view.displayDrive('<span class="yellow">Leopard 2A7 is still going!</span>');
			} else {
				view.displayDrive('<span class="red">First you start the Leopard_2А7!</span>');
			}
		} else {
			view.displayDrive('<span class="red">Reservoir empty</span>');
		}
	}
}

function Tank(params) {
	Shooting.apply(this, arguments);
	Driving.apply(this, arguments);

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
	reservoir: 1000
};

var Leopard_2A7 = new Tank(Leopard_2A7_Params);

function tankFire(target) {
	var act = target.id;
	if (act == 'charge') {
		Leopard_2A7._charge();
	} else {
		Leopard_2A7._fire();
	}
};

function tankAction(target) {
	var act = target.id;
	if (act == 'start') {
		Leopard_2А7._start();
	} else if (act == 'stop') {
		Leopard_2А7._stop();
	} else {
		Leopard_2А7._drive();
	}	
};

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
		var styleWidth = msg/10;
		if (styleWidth <= 33) {
			messageString.style.cssText='background-color: #ed3f10; width: ' + styleWidth + '%';
		} else if (styleWidth <= 66) {
			messageString.style.cssText='background-color: #f0f010; width: ' + styleWidth + '%';
		} else {
			messageString.style.width = styleWidth + '%';
		}
	}
};



/*var Leopard_2А7 = {
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
	charged: false,
	mobility: {
		engine:	'MTU MB-837 Ka501 diesel',
		'engine power':	'1 500 hp',
		'maximum road speed':	'72 km/h',
		range:	'450 km'
	},
	started: false,
	riding: false,
	reservoir: 1000,

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
			if (this.started && !this.riding) { 
				this.riding = true;
				this.reservoir -= 50;
				view.displayDrive('<span class="green">Leopard_2А7 rides!</span>');
				view.displayReservoir(this.reservoir);
			} else if (this.started && this.riding) {
				this.reservoir -= 50;
				view.displayReservoir(this.reservoir);
				view.displayDrive('<span class="yellow">Leopard 2A7 is still going!</span>');
			} else {
				view.displayDrive('<span class="red">First you start the Leopard_2А7!</span>');
			}
		} else {
			view.displayDrive('<span class="red">Reservoir empty</span>');
		}
		
	}
};

function tankAction(target) {
	var act = target.id;
	if (act == 'start') {
		Leopard_2А7.start();
	} else if (act == 'stop') {
		Leopard_2А7.stop();
	} else {
		Leopard_2А7.drive();
	}	
};

function tankFire(target) {
	var act = target.id;
	if (act == 'charge') {
		Leopard_2А7.charge();
	} else {
		Leopard_2А7.fire();
	}
};

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
		var styleWidth = msg/10;
		if (styleWidth <= 33) {
			messageString.style.cssText='background-color: #ed3f10; width: ' + styleWidth + '%';
		} else if (styleWidth <= 66) {
			messageString.style.cssText='background-color: #f0f010; width: ' + styleWidth + '%';
		} else {
			messageString.style.width = styleWidth + '%';
		}
	}
};

var depth = 0;
var delta = '';
var deltastep = '             '; // indented to show the nesting
var showobj_p='';

function showObj(obj,oname){
	if(typeof(obj) == 'object'){
		showobj_p += '\n' + delta + oname + ' {';
		depth++;
		delta = '';
		for(var g = 0; g < depth; g++){
			delta += deltastep;
		}
		for(var i in obj){
			if( obj[i] == '[object Object]' || Array.isArray(obj[i])){
				showObj(obj[i], oname + '.' + i);   // the call itself, if the embedded object
			} else {
				showobj_p += '\n' + delta + oname + '.' +i;
				showobj_p += ' = ' + obj[i];
			}
		}
		depth--;
		delta= '';
		for(var g = 0; g < depth; g++){
			delta += deltastep;
		}
		showobj_p += '\n' + delta + '}';
	}else{
		console.log('It is not an object!');
	}
};

function getObjectTank() {
	var res = document.getElementById('resultTaskOne');
	showObj(Leopard_2А7, 'Leopard_2А7');

	return res.innerHTML = '<pre> ' + showobj_p + '</pre>';
};*/