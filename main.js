 
canvas = document.getElementById("myCanvas");
color = "blue";
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 4;
canvas.getContext("2d").arc(300,200,40,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas = document.getElementById("myCanvas");
color = "black";
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 4;
canvas.getContext("2d").arc(400,200,40,0,4*Math.PI);
canvas.getContext("2d").stroke();

canvas = document.getElementById("myCanvas");
color = "red";
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 4;
canvas.getContext("2d").arc(500,200,40,0,4*Math.PI);
canvas.getContext("2d").stroke();

canvas = document.getElementById("myCanvas");
color = "yellow";
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 4;
canvas.getContext("2d").arc(350,240,40,0,4*Math.PI);
canvas.getContext("2d").stroke();

canvas = document.getElementById("myCanvas");
color = "green";
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 4;
canvas.getContext("2d").arc(450,240,40,0,4*Math.PI);
canvas.getContext("2d").stroke();