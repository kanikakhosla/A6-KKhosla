


// <canvas id="mySketcher" width="500px" height="500px">
// var sketcher = atrament('#mySketcher');
// //or use a more object-oriented style
// var sketcher = new Atrament('#mySketcher');
// //you can also pass the canvas Node itself
// var sketcher = new Atrament(document.querySelector('#mySketcher'));
// var sketcher = atrament('#mySketcher', 500, 500, 'orange');


.wPaint-menu{position:absolute !important;display:inline-block;*display:inline;zoom:1;line-height:0;z-index:99}
.wPaint-menu-behind{z-index:98}
.wPaint-menu-holder{position:relative;margin:0 1px 1px 0}
.wPaint-menu-handle{display:inline-block;*display:inline;zoom:1}
.wPaint-menu-icon{position:relative;vertical-align:top}
.wPaint-menu-icon-img{position:relative;display:inline-block;*display:inline;zoom:1;background-repeat:no-repeat;overflow:hidden}
.wPaint-menu-select-holder{position:absolute;left:1px;z-index:10;overflow:hidden}
.wPaint-menu-select{position:relative;text-align:center;overflow-y:scroll;z-index:100}
.wPaint-menu-select-option.first{border-top:0}
.wPaint-menu-alignment-horizontal .wPaint-menu-icon{display:inline-block;*display:inline;zoom:1}
.wPaint-menu-alignment-vertical .wPaint-menu-icon{display:block}
.wPaint-status{position:absolute;display:none;right:0;bottom:0}
.wPaint-modal-bg{position:absolute;left:0;top:0;width:100%;height:100%}
.wPaint-modal{position:absolute;display:inline-block;*display:inline;zoom:1}
.wPaint-modal-holder{display:inline-block;*display:inline;zoom:1;overflow:hidden}
.wPaint-modal-content{overflow-y:scroll;width:100%;height:100%}
.wPaint-modal-close{position:absolute}
.wPaint-text-input{margin:0;padding:0;outline-width:0;word-wrap:break-word;overflow:hidden}
.wPaint-modal-img-holder{line-height:0}
.wPaint-modal-img{display:inline-block;*display:inline;zoom:1}
.wPaint-menu-holder{border-style:solid;border-width:1px;-webkit-box-shadow:3px 3px 5px #555;box-shadow:3px 3px 5px #555}
.wPaint-menu-handle{cursor:pointer}
.wPaint-menu-icon{border-style:solid;border-width:1px;cursor:pointer}
.wPaint-menu-icon.disabled{cursor:default}
.wPaint-menu-icon.disabled .wPaint-menu-icon-img{opacity:.3;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";filter:alpha(opacity=30)}
.wPaint-menu-icon-img{font-family:verdana;font-weight:bold;text-align:center}
.wPaint-menu-select-holder{border-style:solid;border-width:1px;-webkit-box-shadow:1px 1px 2px #666;box-shadow:1px 1px 2px #666}
.wPaint-menu-select{font-family:verdana;text-align:center}
.wPaint-menu-select-option{border-top-style:solid;border-top-width:1px;cursor:pointer}
.wPaint-menu-icon-select-img{background-repeat:no-repeat}
.wPaint-menu-icon-group-arrow{position:absolute;right:1px;bottom:1px}
.wPaint-menu-alignment-horizontal .wPaint-menu-handle{border-right-style:solid;border-right-width:1px}
.wPaint-menu-alignment-vertical .wPaint-menu-handle{border-bottom-style:solid;border-bottom-width:1px}
.wPaint-status{font-size:10px;font-family:verdana;line-height:10px;height:10px;background-color:#3a3a3a;color:#f0f0f0;padding:5px;opacity:.5;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";filter:alpha(opacity=50)}
.wPaint-modal-bg{background-color:#3a3a3a;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}
.wPaint-modal-holder{height:100px;-webkit-box-shadow:3px 3px 5px #555;box-shadow:3px 3px 5px #555;-webkit-border-radius:5px;border-radius:5px;border-style:solid;border-width:2px;cursor:default}
.wPaint-modal-close{right:-7px;top:-7px;-webkit-border-radius:10px;border-radius:10px;font-size:8px;line-height:14px;padding:0 4px;font-weight:bold;border-style:solid;border-width:2px;cursor:pointer}
.wPaint-text-input{border:dotted #00f 1px;background:none}
.wPaint-modal-img-holder{border:solid #333 1px;-webkit-border-radius:5px;border-radius:5px;margin:3px;padding:2px;cursor:pointer}
.wPaint-modal-img{width:100px;-webkit-border-radius:4px;border-radius:4px;margin-bottom:0}
.wPaint-theme-standard .wPaint-menu-holder{-webkit-border-radius:7px;border-radius:7px}
.wPaint-theme-standard .wPaint-menu-select-holder{-webkit-border-radius:5px;border-radius:5px}
.wPaint-theme-standard .wPaint-menu-icon{-webkit-border-radius:7px;border-radius:7px}
.wPaint-theme-standard .wPaint-menu-icon-img{margin:6px 5px 5px 6px;width:18px;height:18px;line-height:18px;font-size:12px}
.wPaint-theme-standard .wPaint-menu-colorpicker .wPaint-menu-icon-img{margin:3px 2px 2px 3px;width:24px;height:24px;-webkit-border-radius:5px;border-radius:5px}
.wPaint-theme-standard .wPaint-menu-icon-group .wPaint-menu-select-option{padding:4px}
.wPaint-theme-standard .wPaint-menu-icon-group-arrow{width:5px;height:3px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMS8xMyj8hykAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAKElEQVQImV3IwQ0AMAyDQKerspZ3pa9IVXmdGMB8nbbzjrYTNWoA1xeQ3RPyxUyE/gAAAABJRU5ErkJggg==")}
.wPaint-theme-standard .wPaint-menu-select{line-height:10px;font-size:10px;max-height:136px}
.wPaint-theme-standard .wPaint-menu-select-option{max-width:50px;padding:4px 7px}
.wPaint-theme-standard .wPaint-menu-icon-select-img{width:18px;height:18px}
.wPaint-theme-standard .wPaint-menu-alignment-horizontal.wPaint-menu-nohandle .wPaint-menu-holder{padding-left:4px}
.wPaint-theme-standard .wPaint-menu-alignment-horizontal .wPaint-menu-icon{margin:4px 5px 4px 0}
.wPaint-theme-standard .wPaint-menu-alignment-horizontal .wPaint-menu-handle{width:30px;height:39px;margin-right:5px;border-top-left-radius:7px;border-bottom-left-radius:7px}
.wPaint-theme-standard .wPaint-menu-alignment-vertical.wPaint-menu-nohandle .wPaint-menu-holder{padding-top:4px}
.wPaint-theme-standard .wPaint-menu-alignment-vertical .wPaint-menu-icon{margin:0 4px 5px 4px}
.wPaint-theme-standard .wPaint-menu-alignment-vertical .wPaint-menu-handle{width:39px;height:30px;margin-bottom:5px;border-top-left-radius:7px;border-top-right-radius:7px}
.wPaint-theme-classic .wPaint-menu-holder{border-color:#dadada;background-color:#f0f0f0}
.wPaint-theme-classic .wPaint-menu-handle{background-color:#dadada;-webkit-box-shadow:inset 1px 1px 3px #fff;box-shadow:inset 1px 1px 3px #fff;border-color:#dadada}
.wPaint-theme-classic .wPaint-menu-icon{border-color:#b9b9b9;background-color:#b9b9b9;-webkit-box-shadow:inset 2px 2px 3px #eee,1px 1px 2px #666;box-shadow:inset 2px 2px 3px #eee,1px 1px 2px #666}
.wPaint-theme-classic .wPaint-menu-icon.hover,.wPaint-theme-classic .wPaint-menu-icon.active{border-color:#9cf;background-color:#acf}
.wPaint-theme-classic .wPaint-menu-icon-img{color:#696969}
.wPaint-theme-classic .wPaint-menu-select-holder{border-color:#cacaca}
.wPaint-theme-classic .wPaint-menu-select{color:#494949}
.wPaint-theme-classic .wPaint-menu-select-option{-webkit-box-shadow:inset 2px 2px 3px #fff;box-shadow:inset 2px 2px 3px #fff;border-top-color:#cacaca;background-color:#f0f0f0}
.wPaint-theme-classic .wPaint-menu-select-option:hover{-webkit-box-shadow:inset 1px 1px 1px #fff;box-shadow:inset 1px 1px 1px #fff;background-color:#9cf;color:#f0f0f0}
.wPaint-theme-classic .wPaint-modal-close,.wPaint-theme-classic .wPaint-modal-holder{border-color:#3a3a3a;background-color:#f0f0f0}
