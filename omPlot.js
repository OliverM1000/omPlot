	
//###################################################################
// Variables
//###################################################################
//var ColorLightGreen = '#99b433'
//var ColorBlue = '#2d89ef'
//var ColorDarkBlue = '#2b5797'
//var ColorYellow = '#ffc40d'
//var ColorDarkOrange = '#da532c'
//###################################################################
	
	

class omPlot {


	


	//###################################################################
	// Constructor
	//###################################################################	
	constructor(plotRef, n){
		var i;
		
		
		//-----------------------------------------------------
		// Variables
		//-----------------------------------------------------
		this.c_canvas = plotRef;		
		this.c_width = this.c_canvas.width;
		this.c_height = this.c_canvas.height;
		this.ctx = this.c_canvas.getContext("2d");
		//-----------------------------------------------------		
		this.x_scale_start;
		this.x_scale_stop;
		this.x_scale_width;
		this.y_scale_start;
		this.y_scale_stop
		this.y_scale_width;
		//-----------------------------------------------------
		this.x_data_start;
		this.x_data_stop;
		this.x_data_width;
		this.y_data_start;
		this.y_data_stop;
		this.y_data_width;
		//-----------------------------------------------------
		this.data_x_min = 0;
		this.data_x_max = 1;
		this.data_y_min = 0;
		this.data_y_max = 1;
		//-----------------------------------------------------
		this.x_major_grid = [];
		this.x_minor_grid = [];
		this.y_major_grid = [];
		this.y_minor_grid = [];
		//-----------------------------------------------------
		
		
		
		//-----------------------------------------------------
		// Properties
		//-----------------------------------------------------		
		this._paneColor = '#e3eaa7';
		this._plotColor = '#d5e1df';
		//-----------------------------------------------------
		this._left_margin = 0.2;
		this._right_margin = 0.1;
		this._top_margin = 0.1;
		this._bot_margin = 0.2;
		//-----------------------------------------------------
		this._minor_tick_length = 10;
		this._major_tick_length = 25;
		//-----------------------------------------------------
		this._x_axis_minor_ticks = 4;
		this._y_axis_minor_ticks = 1;		
		//-----------------------------------------------------
		this._axisColor = '#000000';
		this._axisWidth = 3;
		this._draw_x_axis_bottom = true;
		this._draw_x_axis_top = true;
		this._draw_y_axis_left = true;
		this._draw_y_axis_right = true;
		//-----------------------------------------------------
		this._tickColor = '#000000';
		this._tickWidth = 2;
		this._draw_x_axis_major_ticks = true;
		this._draw_x_axis_minor_ticks = true;
		this._draw_y_axis_major_ticks = true;
		this._draw_y_axis_minor_ticks = true;		
		//-----------------------------------------------------
		this._gridColor = '#3e4444';
		this._draw_x_axis_major_grid = false;
		this._draw_x_axis_minor_grid = false;
		this._draw_y_axis_major_grid = false;
		this._draw_y_axis_minor_grid = false;
		//-----------------------------------------------------
		
		
		//-----------------------------------------------------
		this._x_axis_bottom_title = "Time";
		this._x_axis_top_title = "";
		this._y_axis_left_title = "Voltage / V";
		this._y_axis_right_title = "";
		this._title = "omPlot";
		//-----------------------------------------------------		
		this._dataColor = [];
		this._symbolRadius = 5;
		this._lineWidth = 2;		
		this._drawSymbol = true;
		this._drawLine = true;
		//-----------------------------------------------------
		
		
		//=====================================================
		this.data_num = n;
		this.curve_data_x = [];
		this.curve_data_y = [];
		//=====================================================
		
		for(i = 0; i < this.data_num; i++){
			this.curve_data_x.push([]);
			this.curve_data_y.push([]);
			this._dataColor.push("#000000");
		}		
				
		this.rescalePlot();
	}
	//###################################################################
	

	
	
	
	
	//###################################################################
	// Properties
	//###################################################################
	get paneColor(){
		return this._paneColor;
	}
	set paneColor(value){
		this._paneColor = value;
	}
	get plotColor(){
		return this._plotColor;
	}
	set plotColor(value){
		this._plotColor = value;
	}
	//-------------------------------------------------------------------
	get left_margin(){
		return this._left_margin;
	}
	set left_margin(value){
		if(value > 0)
			this._left_margin = value;
	}	
	get right_margin(){
		return this._right_margin;
	}
	set right_margin(value){
		if(value > 0)
			this._right_margin = value;
	}
	get top_margin(){		
			return this._top_margin;
	}
	set top_margin(value){
		if(value > 0)
			this._top_margin = value;
	}
	get bottom_margin(){		
			return this._bot_margin
	}
	set bottom_margin(value){
		if(value > 0)
			this._bot_margin = value;
	}
	//-------------------------------------------------------------------
	get major_tick_length(){
		return this._major_tick_length;
	}
	set major_tick_length(value){
		if(value > 0)
			this._major_tick_length = value;
	}	
	get minor_tick_length(){
		return this._minor_tick_length;
	}
	set minor_tick_length(value){
		if(value > 0)
			this._minor_tick_length = value;
	}	
	//-------------------------------------------------------------------	
	get x_axis_minor_ticks(){
		return this._x_axis_minor_ticks;
	}
	set x_axis_minor_ticks(value){
		if(value > 0 && value < 9)
			this._x_axis_minor_ticks = value
	}	
	get y_axis_minor_ticks(){
		return this._x_axis_minor_ticks;
	}
	set y_axis_minor_ticks(value){
		if(value > 0 && value < 9)
			this._x_axis_minor_ticks = value;
	}		
	//-------------------------------------------------------------------
	get axisColor(){
		return this._axisColor;
	}
	set axisColor(value){
		this._axisColor = value;
	}	
	get axisWidth(){
		return this._axisWidth;
	}
	set axisWidth(value){
		if(value > 0)
			this._axisWidth = value;
	}	
	get draw_x_axis_bottom(){
		return this._draw_x_axis_bottom;
	}
	set draw_x_axis_bottom(value){
		this._draw_x_axis_bottom = value;
	}	
	get draw_x_axis_top(){
		return this._draw_x_axis_top;
	}
	set draw_x_axis_top(value){
		this._draw_x_axis_top = value;
	}	
	get draw_y_axis_left(){
		return this._draw_y_axis_left;
	}
	set draw_y_axis_left(value){
		this._draw_y_axis_left = value;
	}	
	get draw_y_axis_right(){
		return this._draw_y_axis_right;
	}
	set draw_y_axis_right(value){
		this._draw_y_axis_right = value;
	}
	//-------------------------------------------------------------------
	get tickColor(){
		return this._tickColor;
	}
	set tickColor(value){
		this._tickColor = value;
	}		
	get tickWidth(){
		return this._tickWidth;
	}
	set tickWidth(value){
		if(value > 0)
			this._tickWidth = value;
	}
	get draw_x_axis_major_ticks(){
		return this._draw_x_axis_major_ticks;
	}
	set draw_x_axis_major_ticks(value){
		this._draw_x_axis_major_ticks = value;
	}	
	get draw_x_axis_minor_ticks(){
		return this._draw_x_axis_minor_ticks;
	}
	set draw_x_axis_minor_ticks(value){
		this._draw_x_axis_minor_ticks = value;
	}		
	get draw_y_axis_major_ticks(){
		return this._draw_y_axis_major_ticks;
	}
	set draw_y_axis_major_ticks(value){
		this._draw_y_axis_major_ticks = value;
	}	
	get draw_y_axis_minor_ticks(){
		return this._draw_y_axis_minor_ticks;
	}
	set draw_y_axis_minor_ticks(value){
		this._draw_y_axis_minor_ticks = value;
	}
	//-------------------------------------------------------------------	
	get gridColor(){
		return this._gridColor;
	}
	set gridColor(value){		
		this._gridColor = value;
	}
	get draw_x_axis_major_grid(){
		return this._draw_x_axis_major_grid;
	}
	set draw_x_axis_major_grid(value){
		this._draw_x_axis_major_grid = value;
	}
	get draw_x_axis_minor_grid(){
		return this._draw_x_axis_minor_grid;
	}
	set draw_x_axis_minor_grid(value){
		this._draw_x_axis_minor_grid = value;
	}
	get draw_y_axis_major_grid(){
		return this._draw_y_axis_major_grid;
	}
	set draw_y_axis_major_grid(value){
		this._draw_y_axis_major_grid = value;
	}
	get draw_y_axis_minor_grid(){
		return this._draw_y_axis_minor_grid;
	}
	set draw_y_axis_minor_grid(value){
		this._draw_y_axis_minor_grid = value;
	}
	//-------------------------------------------------------------------
	get x_axis_bottom_title(){
		return this._x_axis_bottom_title;
	}
	set x_axis_bottom_title(value){
		if(value.length < 30)
			this._x_axis_bottom_title = value;
	}
	get x_axis_top_title(){		
		return this._x_axis_top_title;
	}
	set x_axis_top_title(value){
		if(value.length < 30)
			this._x_axis_top_title = value;
	}
	get y_axis_left_title(){		
		return this._y_axis_left_title;
	}
	set y_axis_left_title(value){
		if(value.length < 30)
			this._y_axis_left_title = value;
	}
	get y_axis_right_title(){
		return this._y_axis_right_title;
	}
	set y_axis_right_title(value){
		if(value.length < 30)
			this._y_axis_right_title = value;
	}
	get title(){
		return this._title;
	}
	set title(value){
		if(value.length < 60)
			this._title = value;
	}
	//-------------------------------------------------------------------
	
	
	//-------------------------------------------------------------------	
	get dataColor(){
		return this._dataColor;
	}
	set dataColor(value){
		if(value.length == this.data_num)
			this._dataColor = value.slice();
	}	
	get symbolRadius(){
		return this._symbolRadius;
	}
	set symbolRadius(value){		
		if(value >= 0)
			this._symbolRadius = value;		
	}	
	get lineWidth(){
		return this._lineWidth;
	}
	set lineWidth(value){
		if(value > 0)
			this._lineWidth = value;
	}	
	get drawSymbol(){
		return this._drawSymbol;
	}
	set drawSymbol(value){
		this._drawSymbol = value;
	}	
	get drawLine(){
		return this._drawLine;
	}
	set drawLine(value){
		this._drawLine = value;
	}
	//-------------------------------------------------------------------
	//###################################################################
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


	//###################################################################
	// User Functions
	//###################################################################	
	rescalePlot(){
		// rescalePlot determins new values for data_x/y_min/max
		// the draws the new plot
		var i, j;		
		var tmp_min, tmp_max;
		
		
		// find the first cruve_data which is not NULL
		// and initialize the global min/max based this curve data
		for(i = 0; i < this.data_num; i++){
			if(this.curve_data_x[i].length > 1 && this.curve_data_y[i].length > 1){
			
				//---------------------------------------------
				// x-Axis
				//---------------------------------------------
				this.data_x_max = this.maxArray(this.curve_data_x[i]);
				this.data_x_min = this.minArray(this.curve_data_x[i]);
				//---------------------------------------------
			
			
				//---------------------------------------------
				// x-Axis
				//---------------------------------------------
				this.data_y_max = this.maxArray(this.curve_data_y[i]);
				this.data_y_min = this.minArray(this.curve_data_y[i]);
				//---------------------------------------------
				
				break;
			}
		}
		
		// check if one of the other this.curve_data is actually smaller or larger
		for(j = i + 1; j < this.data_num; j++){
			if(this.curve_data_x[j].length < 2 || this.curve_data_y[j].length < 2)
				continue;
				
			//---------------------------------------------
			// x-Axis
			//---------------------------------------------			
			tmp_max = this.maxArray(this.curve_data_x[j]);
			if(tmp_max > this.data_x_max)
				this.data_x_max = tmp_max;
						
			tmp_min = this.minArray(this.curve_data_x[j]);
			if(tmp_min < this.data_x_min)
				this.data_x_min = tmp_min;
			//---------------------------------------------
			
			
			
			//---------------------------------------------
			// y-Axis
			//---------------------------------------------
			tmp_max = this.maxArray(this.curve_data_y[j]);
			if(tmp_max > this.data_y_max)
				this.data_y_max = tmp_max;
			
			tmp_min = this.minArray(this.curve_data_y[j]);
			if(tmp_min < this.data_y_min)
				this.data_y_min = tmp_min;
			//---------------------------------------------			
		}
	
		
		this.updateVariables();
		this.refreshPlot();
	}
	
	refreshPlot(){	
		// refreshPlot draws a new plot based on (old) data_x/y_min/max values			
		var i;
	
	
		//--------------------------------------------------------------------
		// Background Colors
		//--------------------------------------------------------------------
		this.ctx.fillStyle = this._paneColor;
		this.ctx.fillRect(0, 0, this.c_width, this.c_height);
		//--------------------------------------------------------------------
		this.ctx.fillStyle = this._plotColor;
		this.ctx.fillRect(this.x_scale_start, this.y_scale_stop, this.x_scale_width, this.y_scale_width);
		//--------------------------------------------------------------------
		
		
		//--------------------------------------------------------------------
		// Draw The Plot
		//--------------------------------------------------------------------
		this.drawAxis();
		this.drawGridLines();
		this.drawTicks();	
		this.drawTickLables();
		this.drawTitles();
		//--------------------------------------------------------------------		
		
		
		//--------------------------------------------------------------------		
		// Draw Data
		//--------------------------------------------------------------------
		for(i = 0; i < this.data_num; i++){
			this.drawData(this.curve_data_x[i], this.curve_data_y[i], i);	
		}		
		//--------------------------------------------------------------------		
	}
	
	addData(data_x, data_y, n){
		if(data_x == null ||
		   data_y == null ||
		   data_x.length < 2 ||
		   data_x.length != data_y.length)
				return;
				
		if(n < 0 || n > this.data_num - 1)
				return;
				
		this.curve_data_x[n] = data_x.slice();
		this.curve_data_y[n] = data_y.slice();		
	}	
	//###################################################################

	
	
	
	
	//###################################################################
	// Draw Functions
	//###################################################################
	drawAxis(){
		
		this.ctx.setLineDash([]);
		this.ctx.lineWidth = this._axisWidth;
		this.ctx.strokeStyle = this._axisColor;

		// y-left
		this.ctx.beginPath();	
		this.ctx.moveTo(this.x_scale_start, this.y_scale_stop);
		this.ctx.lineTo(this.x_scale_start, this.y_scale_start);
		this.ctx.stroke();

		// y-right
		this.ctx.beginPath();
		this.ctx.moveTo(this.x_scale_stop, this.y_scale_start);
		this.ctx.lineTo(this.x_scale_stop, this.y_scale_stop);
		this.ctx.stroke();
		
		// x-bottom
		this.ctx.beginPath();
		this.ctx.moveTo(this.x_scale_start, this.y_scale_start);
		this.ctx.lineTo(this.x_scale_stop, this.y_scale_start);
		this.ctx.stroke();
		
		// x-top
		this.ctx.beginPath();
		this.ctx.moveTo(this.x_scale_start, this.y_scale_stop);
		this.ctx.lineTo(this.x_scale_stop, this.y_scale_stop);
		this.ctx.stroke();	
	}

	drawTicks(){	
		var i, len;		
		
		this.ctx.setLineDash([]);
		this.ctx.lineWidth = this._tickWidth;
		this.ctx.strokeStyle = this._tickColor;
		
		
		//------------------------------------------------------------------------------------------------------------
		// Ticks x-Axis
		//------------------------------------------------------------------------------------------------------------	
		// bottom x-axis, major ticks
		if(this._draw_x_axis_major_ticks){
			len = this.x_major_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.transformX(this.x_major_grid[i]), this.y_scale_start);
				this.ctx.lineTo(this.transformX(this.x_major_grid[i]), this.y_scale_start - this._major_tick_length);
				this.ctx.stroke();
			}
		}
		//bottom x-axis, minor ticks
		if(this._draw_x_axis_minor_ticks){
			len = this.x_minor_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.transformX(this.x_minor_grid[i]), this.y_scale_start);
				this.ctx.lineTo(this.transformX(this.x_minor_grid[i]), this.y_scale_start - this._minor_tick_length);
				this.ctx.stroke();
			}
		}
		//------------------------------------------------------------------------------------------------------------
		// top x-axis, major ticks
		if(this._draw_x_axis_major_ticks){
			len = this.x_major_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.transformX(this.x_major_grid[i]), this.y_scale_stop);
				this.ctx.lineTo(this.transformX(this.x_major_grid[i]), this.y_scale_stop + this._major_tick_length);
				this.ctx.stroke();
			}
		}
		// top x-axis, minor ticks
		if(this._draw_x_axis_minor_ticks){
			len = this.x_minor_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.transformX(this.x_minor_grid[i]), this.y_scale_stop);
				this.ctx.lineTo(this.transformX(this.x_minor_grid[i]), this.y_scale_stop + this._minor_tick_length);
				this.ctx.stroke();
			}
		}
		//------------------------------------------------------------------------------------------------------------


		
		
		
		

		//------------------------------------------------------------------------------------------------------------
		// Tick y-Axis
		//------------------------------------------------------------------------------------------------------------			
		//------------------------------------------------------------------------------------------------------------	
		// left y-axis, major ticks
		if(this._draw_y_axis_major_ticks){
			len = this.y_major_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.x_scale_start, this.transformY(this.y_major_grid[i]));
				this.ctx.lineTo(this.x_scale_start + this._major_tick_length, this.transformY(this.y_major_grid[i]));
				this.ctx.stroke();
			}
		}
		//left y-axis, minor ticks
		if(this._draw_y_axis_minor_ticks){
			len = this.y_minor_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.x_scale_start,                     this.transformY(this.y_minor_grid[i]));
				this.ctx.lineTo(this.x_scale_start + this._minor_tick_length, this.transformY(this.y_minor_grid[i]));
				this.ctx.stroke();
			}
		}
		//------------------------------------------------------------------------------------------------------------
		// right y-axis, major ticks
		if(this._draw_y_axis_major_ticks){
			len = this.y_major_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.x_scale_stop, this.transformY(this.y_major_grid[i]));
				this.ctx.lineTo(this.x_scale_stop - this._major_tick_length, this.transformY(this.y_major_grid[i]));
				this.ctx.stroke();
			}
		}
		// right y-axis, minor ticks		
		if(this._draw_y_axis_minor_ticks){
			len = this.y_minor_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.x_scale_stop,                     this.transformY(this.y_minor_grid[i]));
				this.ctx.lineTo(this.x_scale_stop - this._minor_tick_length, this.transformY(this.y_minor_grid[i]));
				this.ctx.stroke();
			}
		}				
		//------------------------------------------------------------------------------------------------------------
	}

	drawTickLables(){
		var i, len;
		var numDigits;

		
		//------------------------------------------------------------------------------------------------------------
		// Major Tick Lables, x-Axis
		//------------------------------------------------------------------------------------------------------------
		this.ctx.font = "28px Arial";
		this.ctx.fillStyle="#000000";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline="middle"
		//------------------------------------------------------------------------------------------------------------
		numDigits = this.getScaleNumDigits(this.x_major_grid);
		//--- Bottom x-Axis ------------------------------------------------------------------------------------------
		len = this.x_major_grid.length;
		for(i = 0; i < len; i++){		
			this.ctx.fillText(this.x_major_grid[i].toFixed(numDigits), this.transformX(this.x_major_grid[i]), this.y_scale_start + 30);			
		}
		//------------------------------------------------------------------------------------------------------------

		

		//------------------------------------------------------------------------------------------------------------
		// Major Tick Lables, y-Axis
		//------------------------------------------------------------------------------------------------------------
		this.ctx.font = "28px Arial";
		this.ctx.fillStyle="#000000";
		this.ctx.textAlign = "right";
		this.ctx.textBaseline="middle"
		//------------------------------------------------------------------------------------------------------------
		numDigits = this.getScaleNumDigits(this.y_major_grid);
		//--- Bottom y-Axis ------------------------------------------------------------------------------------------
		len = this.y_major_grid.length;
		for(i = 0; i < this.y_major_grid.length; i++){
			this.ctx.fillText(this.y_major_grid[i].toFixed(numDigits), this.x_scale_start - 15, this.transformY(this.y_major_grid[i]));			
		}
		//------------------------------------------------------------------------------------------------------------	
	}

	drawTitles(){
		
		//------------------------------------------------------------------------------------------------------------
		// Title
		//------------------------------------------------------------------------------------------------------------	
		this.ctx.font = "bold 48px Arial";
		this.ctx.fillStyle="#000000";
		this.ctx.textAlign = "center";
		//------------------------------------------------------------------------------------------------------------	
		if(this._title != ""){
			this.ctx.fillText(this._title, this.x_scale_start + this.x_scale_width/2, this.y_scale_stop - 50);
		}
		//------------------------------------------------------------------------------------------------------------	
		
		
		
		//------------------------------------------------------------------------------------------------------------
		// Title x-Axis
		//------------------------------------------------------------------------------------------------------------	
		this.ctx.font = "bold 32px Arial";
		this.ctx.fillStyle="#000000";
		this.ctx.textAlign = "center";		
		//------------------------------------------------------------------------------------------------------------	
		if(this._x_axis_bottom_title != ""){
			this.ctx.fillText(this._x_axis_bottom_title, this.x_scale_start + this.x_scale_width/2, this.y_scale_start + 70);			
		}
		if(this._x_axis_top_title != ""){
			this.ctx.fillText(this._x_axis_top_title, this.x_scale_start + this.x_scale_width/2, this.y_scale_stop - 70);			
		}
		//------------------------------------------------------------------------------------------------------------	

		

		//------------------------------------------------------------------------------------------------------------	
		// Title y-Axis
		//------------------------------------------------------------------------------------------------------------	
		this.ctx.font = "bold 32px Arial";
		this.ctx.fillStyle="#000000";
		this.ctx.textAlign = "center";	
		//--- translate & rotate -------------------------------------------------------------------------------------	
		this.ctx.translate(this.x_scale_start, this.y_scale_start - this.y_scale_width/2);
		this.ctx.rotate(Math.PI * 3 / 2);
		//------------------------------------------------------------------------------------------------------------
		if(this._y_axis_left_title != ""){
			this.ctx.fillText(this._y_axis_left_title, 0, -120);
		}
		if(this._y_axis_right_title != ""){
			this.ctx.fillText(this._y_axis_right_title, 0, this.x_scale_width + 120);
		}
		//--- translate & rotate -------------------------------------------------------------------------------------	
		this.ctx.rotate(-1* Math.PI  * 3 / 2);
		this.ctx.translate(-this.x_scale_start, -this.y_scale_start + this.y_scale_width/2.0);
		//------------------------------------------------------------------------------------------------------------
	}

	drawGridLines(){
		var i, len;
		var minor_delta;
		
		this.ctx.lineWidth = 1;
		this.ctx.strokeStyle = this._gridColor;
		
		//------------------------------------------------------------------------------------------------------------
		// Grid Lines x-Axis
		//------------------------------------------------------------------------------------------------------------	
		// bottom x-axis, major grid lines
		if(this._draw_x_axis_major_grid){
			this.ctx.setLineDash([16, 4]);
			len = this.x_major_grid.length;
			for(i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.transformX(this.x_major_grid[i]), this.y_scale_start);
				this.ctx.lineTo(this.transformX(this.x_major_grid[i]), this.y_scale_stop);
				this.ctx.stroke();
			}		
		}
		//bottom x-axis, minor grid lines
		if(this._draw_x_axis_minor_grid){
			this.ctx.setLineDash([4,10]);
			len = this.x_minor_grid.length;
			for(i = 0; i < len; i++){			
				this.ctx.beginPath();
				this.ctx.moveTo(this.transformX(this.x_minor_grid[i]), this.y_scale_start);
				this.ctx.lineTo(this.transformX(this.x_minor_grid[i]), this.y_scale_stop);
				this.ctx.stroke();			
			}
		}
		//------------------------------------------------------------------------------------------------------------
		
		
		
		//------------------------------------------------------------------------------------------------------------
		// Grid Lines y-Axis
		//------------------------------------------------------------------------------------------------------------	
		// left y-axis, major grid lines
		if(this._draw_y_axis_major_grid){
			this.ctx.setLineDash([10,4]);
			len = this.y_major_grid.length;
			for(var i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.x_scale_start, this.transformY(this.y_major_grid[i]));
				this.ctx.lineTo(this.x_scale_stop, this.transformY(this.y_major_grid[i]));
				this.ctx.stroke();		
			}		
		}
		//left y-axis, minor grid lines
		if(this._draw_y_axis_minor_grid){
			this.ctx.setLineDash([4,10]);
			len = this.y_minor_grid.length;
			for(var i = 0; i < len; i++){
				this.ctx.beginPath();
				this.ctx.moveTo(this.x_scale_start, this.transformY(this.y_minor_grid[i]));
				this.ctx.lineTo(this.x_scale_stop, this.transformY(this.y_minor_grid[i]));
				this.ctx.stroke();
			}		
		}
		//------------------------------------------------------------------------------------------------------------

	}	
	
	drawData(data_x, data_y, n){
		var len;
	
		if(data_x == null || data_y == null)
			return;
		
		if(n < 0 || n > this.data_num - 1)
			return;
	
	
	//----------------------------------------------------------------------------
	// Draw Line
	//----------------------------------------------------------------------------
	if(this._drawLine){		
		//--------------------------------
		this.ctx.setLineDash([]);
		this.ctx.lineWidth = this._lineWidth;
		this.ctx.strokeStyle = this._dataColor[n];
		//--------------------------------
		this.ctx.beginPath();
		this.ctx.moveTo(this.transformX(data_x[0]), this.transformY(data_y[0]));
		
		len = data_x.length;
		for(var i = 1; i < len; i++){
			this.ctx.lineTo(this.transformX(data_x[i]), this.transformY(data_y[i]));
		}
		this.ctx.stroke();	
	}	
	//----------------------------------------------------------------------------
	
	
	
	//----------------------------------------------------------------------------
	// Draw Symbol
	//----------------------------------------------------------------------------
	if(this._drawSymbol){
		//--------------------------------
		this.ctx.setLineDash([0]);
		this.ctx.lineWidth = 0;
		this.ctx.fillStyle = this._dataColor[n];
		this.ctx.strokeStyle = this._dataColor[n];
		//--------------------------------
		for(var i = 0; i < len; i++){
			this.ctx.beginPath();
			this.ctx.arc(this.transformX(data_x[i]), this.transformY(data_y[i]), this._symbolRadius, 2*Math.PI, false);		
			this.ctx.fill();
			this.ctx.stroke();
		}	
	}
	//----------------------------------------------------------------------------
	
}	
	//###################################################################
	
	
	
	
	
	//###################################################################
	// Auxillary Functions
	//###################################################################	
	updateVariables(){
		var i, j, l;
		var len;
		var minor_delta;
		var msd;			// most significant digit

		
		//--------------------------------------------------------------------
		this.y_scale_start = this.c_height * (1 - this._bot_margin);
		this.y_scale_stop = this.c_height * this._top_margin;
		this.y_scale_width = this.y_scale_start - this.y_scale_stop;
		//--------------------------------------------------------------------
		this.x_scale_start = this.c_width * this._left_margin;
		this.x_scale_stop = this.c_width * (1 - this._right_margin);
		this.x_scale_width = this.x_scale_stop - this.x_scale_start;
		//--------------------------------------------------------------------
				
		
		//-------------------------------------------------------------------------------------------------
		// x-Axis
		//	1) this.x_data_start, this.x_data_stop
		//	2) this.x_major_grid
		//	3) this.x_minor_grid
		//-------------------------------------------------------------------------------------------------
		//	1) this.x_data_start, this.x_data_stop			
		msd = Math.pow(10, Math.floor(Math.log(this.data_x_max - this.data_x_min)/Math.log(10)));
		this.x_data_start = Math.floor(this.data_x_min/msd) * msd;
		this.x_data_stop = Math.ceil(this.data_x_max/msd) * msd;
		//-------------------------------------------------------------------------------------------------
		//	2) this.x_major_grid:	
		i = 0;
		this.x_major_grid = [];
		this.x_data_width = this.x_data_stop - this.x_data_start;

		//	2.1) this.x_major_grid: populate positions	
		while(this.x_data_start + i * msd < this.x_data_stop + msd){
			this.x_major_grid.push(this.x_data_start + i * msd);		
			i++;
		}
		this.x_major_grid.sort(this.sortAscending);
		
		//	2.2) this.x_major_grid: reduce length by removing positions
		if(this.x_major_grid.length > 9) {
			if(this.x_major_grid.length % 2) {											// check length
				this.x_major_grid.push(this.x_major_grid[this.x_major_grid.length - 1] + msd);		// make it even if necessary	
			}		
			while(this.x_major_grid.length > 9){											// remove elements till length is short enough
				l = this.x_major_grid.length;
				for(i = l - 1; i > 0; i -= 2){
					this.x_major_grid.splice(i, 1);
				}			
			}		
		}	
		//-------------------------------------------------------------------------------------------------
		//	3)  this.x_minor_grid
		this.x_minor_grid = [];
		minor_delta  = (this.x_major_grid[1] - this.x_major_grid[0]) / (this._x_axis_minor_ticks + 1);
			
		//	3.1) this.x_minor_grid: minor grid between all major ticks
		len = this.x_major_grid.length - 1;
		for(i = 0; i < len; i++){
			for(j = 0; j < this._x_axis_minor_ticks; j++){
				this.x_minor_grid.push(this.x_major_grid[i] + (j+1) * minor_delta);
			}
		}
		
		//	3.2) this.x_minor_grid: minor gird left of the first major tick		
		i = 1;
		while(this.x_major_grid[0] - i * minor_delta > this.x_data_start){
			this.x_minor_grid.push(this.x_major_grid[0] - i * minor_delta);			
			i++;
		}
		
		//	3.3) this.x_minor_grid: minor ticks right of the last major tick
		i = 1;
		while(this.x_major_grid[this.x_major_grid.length - 1] + i * minor_delta < this.x_data_stop){
			this.x_minor_grid.push(this.x_major_grid[this.x_major_grid.length - 1] + i * minor_delta);	
			i++;
		}	
		//-------------------------------------------------------------------------------------------------
	
	
	
		//-------------------------------------------------------------------------------------------------
		// y-Axis
		//	1) this.y_data_start, this.y_data_stop
		//	2) this.y_major_grid
		//	3) this.y_minor_grid
		//-------------------------------------------------------------------------------------------------
		//	1) this.y_data_start, this.y_data_stop	
		msd = Math.pow(10, Math.floor(Math.log(this.data_y_max - this.data_y_min)/Math.log(10)));			
		this.y_data_start = Math.floor(this.data_y_min/msd) * msd;
		this.y_data_stop = Math.ceil(this.data_y_max/msd) * msd;	
		//-------------------------------------------------------------------------------------------------
		//	2) this.y_major_grid:	
		i = 0;	
		this.y_major_grid = [];
		this.y_data_width = this.y_data_stop - this.y_data_start;
		
		//	2.1) this.y_major_grid: populate positions
		while(this.y_data_start + i * msd < this.y_data_stop + msd){
			this.y_major_grid.push(this.y_data_start + i * msd);
			i++;
		}
		this.y_major_grid.sort(this.sortAscending);
		
		//	2.2) this.y_major_grid: reduce length by removing positions
		if(this.y_major_grid.length > 9) {
			if(this.y_major_grid.length % 2) {											// check length
				this.y_major_grid.push(this.y_major_grid[this.y_major_grid.length - 1] + msd);		// make it even if necessary
			}		
			while(this.y_major_grid.length > 9){											// remove elements till length is short enough
				l = this.y_major_grid.length;
				for(i = l - 1; i > 0; i -= 2){
					this.y_major_grid.splice(i, 1);
				}			
			}
		}
		//-------------------------------------------------------------------------------------------------
		//	3)  this.y_minor_grid
		this.y_minor_grid = [];
		minor_delta  = (this.y_major_grid[1] - this.y_major_grid[0]) / (this._y_axis_minor_ticks + 1);
			
		//	3.1) this.y_minor_grid: minor grid between all major ticks
		len = this.y_major_grid.length - 1;
		for(i = 0; i < len; i++){
			for(j = 0; j < this._y_axis_minor_ticks; j++){
				this.y_minor_grid.push(this.y_major_grid[i] + (j+1) * minor_delta);
			}
		}
		
		//	3.2) this.y_minor_grid: minor gird below the first major tick		
		i = 1;
		while(this.y_major_grid[0] - i * minor_delta > this.y_data_start){
			this.y_minor_grid.push(this.y_major_grid[0] - i * minor_delta);			
			i++;
		}
		
		//	3.3) this.y_minor_grid: minor ticks above of the last major tick
		i = 1;
		while(this.y_major_grid[this.y_major_grid.length - 1] + i * minor_delta < this.y_data_stop){
			this.y_minor_grid.push(this.y_major_grid[this.y_major_grid.length - 1] + i * minor_delta);	
			i++;
		}	
		//-------------------------------------------------------------------------------------------------

	}
	
	transformX(x){
		return (this.x_scale_stop - this.x_scale_start) * (x - this.x_data_start)/(this.x_data_stop - this.x_data_start) + this.x_scale_start;
	}
	
	transformY(y){
		return (this.y_scale_stop - this.y_scale_start) * (y - this.y_data_start)/(this.y_data_stop - this.y_data_start) + this.y_scale_start;
	}
	
	maxArray(arr){
		var i;
		var max = arr[0];
		var len = arr.length;
		
		for(i = 1; i < len; i++){
				if(max < arr[i])
					max = arr[i];		
		}
		
		return max;
	}
	
	minArray(arr){
		var i;
		var min = arr[0];
		var len = arr.length;
		
		for(i = 1; i < len; i++){
				if(min > arr[i])
					min = arr[i];		
		}
		
		return min;	
	}
	
	sortAscending(x, y){
		return x -y;
	}
	
	getScaleNumDigits(scale){
		var numDigits = 1;		
		var maxNumDigits = 6;
		var i, d;
		var len = scale.length;
		
		
		for(i = 0; i < len; i++){
			if(scale[i].toString().indexOf(".") >= 0 ){
				d = parseFloat(scale[i].toFixed(maxNumDigits)).toString().length - scale[i].toFixed(maxNumDigits).indexOf(".");	
				if(d > numDigits)
					numDigits = d;
			}		   
		}
		
		if(numDigits > maxNumDigits){		
			numDigits = maxNumDigits;
		}

		return numDigits;
	}
	//###################################################################


	
}





