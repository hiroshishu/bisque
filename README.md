#bisque 0.2.0

Bisque is a small JavaScript-based CSS extension. It provides some new CSS properties and features that helps you to craft graphical interface by using CSS3 instead of images. 

Stand-alone, cross-browser and handy. On the JavaScript part there's nothing to do. 

#####The advantages of CSS3 graphics:

*  Minimum file size;
*  Easy to modify;
*  Responsive;

#####Browser Compatibility: IE9+ and modern browsers

Here are some [demos with source code](http://uhear.me/bisque/). This might give you a feeling of how stuff works.

#Usage

First of all, link your stylesheets that bisque will process and set 'rel' attribute to 'stylesheet/bisque'.

```html
  <link rel='stylesheet/bisque' type='text/css' href='graphics.css'/>
```

Then include bisque.js in the \<head> element of your page.

```html
  <script type='text/javascript' src='bisque.min.js'></script>
```

Mmmmm...That's it!

#Documentation

###'-bis-shape' property

This property is actually a shorthand for drawing a shape.  

#####Draws a rectangle

-bis-shape: rect(x, y, width, height, color);
*  x: x coordinate of the top left corner
*  y: y coordinate of the top left corner
*  width: width of the rectangle
*  height: height of the rectangle
*  color: color of the rectangle

For example:

```css
  -bis-shape: rect(10, 10, 20, 20, white);
```

compiles to:

```css
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  background-color: white;
```

Notes:
*  If you define position/left/top/width/height/background-color after this property, it will make the shape change correspondingly.

#####Draws a circle

-bis-shape: circle(type, x, y, r, color);
*  type: type of the circle. If this argument is omitted, the circle defaults to be a full circle. The following keywords is accepted: lh(left half), rh(right half), th(top half), bh(bottom half), tlq(top left quarter), trq(top right quarter), blq(bottom left quarter), brq(bottom right quarter)
*  x: x coordinate of the center
*  y: y coordinate of the center
*  r: radius of the circle
*  color: color of the circle

Notes:
*  Any unit isn't required. If a unit exists, it will be treated as 'px'. Just use number for clarity.
*  If you define position/left/top/width/height/border-radius/background-color after this property, it will make the shape change correspondingly.

#####Draws a ellipse

-bis-shape: ellipse(type, x, y, rx, ry, color);
*  type: type of the circle. If omitted, the circle defaults to be a full circle. The following keywords is accepted: lh(left half), rh(right half), th(top half), bh(bottom half), tlq(top left quarter), trq(top right quarter), blq(bottom left quarter), brq(bottom right quarter).
*  x: x coordinate of the center
*  y: y coordinate of the center
*  rx: horizontal radius of the ellipse
*  ry: vertical radius of the ellipse
*  color: color of the ellipse

Notes:
*  Any unit isn't required. If a unit exists, it will be treated as 'px'. Just use number for clarity.
*  If you define position/left/top/width/height/border-radius/background-color after this property, it will make the shape change correspondingly.

#####Draws a triangle

-bis-shape: triangle(type, x, y, width, height, color);
*  type: type of the triangle. This argument is required. The following keywords is accepted: up, down, left, right.
*  x: x coordinate of the top left point
*  y: y coordinate of the top left point
*  width: width of the triangle
*  height: height of the triangle
*  color: color of the triangle

Notes:
*  Any unit isn't required. If a unit exists, it will be treated as 'px'. Just use number for clarity.
*  Because the shape is made with the 'border' property, you can't add a border to the shape;
*  If you define position/left/top/width/height/border/border-width/border-style/border-color after this property, it will make the shape change correspondingly.

#####Draws a sector of a circle, it should be in the range 0-90 degree

-bis-shape: sector(x, y, r, angle, start-angle, color);
*  x: x coordinate of the center of the circle
*  y: y coordinate of the center of the circle
*  r: radius of the circle
*  angle: angle of the sector
*  start-angle: start angle of the sector, optional
*  color: color of the sector

Notes:
*  Any unit isn't required. If a unit exists, it will be treated as 'px'. Just use number for clarity.
*  Because the shape is made with the 'border' property, you can't add a border to the shape;
*  If you define position/left/top/width/height/border/border-width/border-style/border-color after this property, it will make the shape change correspondingly.

#####Draws a line

-bis-shape: line(x1, y1, x2, y2, width, color, style);
*  x1: x coordinate of the start point
*  y1: y coordinate of the start point
*  x2: x coordinate of the end point
*  y2: y coordinate of the end point
*  width: width of the line
*  color: color of the line
*  style: style of the line, optional. This argument is equivalent to the 'border-style' property.

Notes:
*  Any unit isn't required. If a unit exists, it will be treated as 'px'. Just use number for clarity.
*  Because the shape is made with the 'border' property, you can't add a border to the shape;
*  If you define position/left/top/width/height/border/border-width/border-style/border-color after this property, it will make the shape change correspondingly.


###'-bis-shadow-copy' property

This property is similar with the 'box-shadow' property, but attaches one or more shadow copies to the elements. The copies are exact same shape with the elements. 

Note: This property only applies to elements that is absolute position. Pseudo elements will not effective.

-bis-shadow-copy: offset-x offset-y color transform / transform-origin
*  offset-x: horizontal offset of the copy
*  offset-y: vertical offset of the copy
*  color: color of the copy
*  transform: applies a transformation to the copy, equivalent to the 'transform' property
*  transform-origin: changes the position on the transformed copy, equivalent to the 'transform-origin' property, optional

For example:

```css
  -bis-shadow-copy: 10px 20px white rotate(30deg) / top left, 0 40px #e4a skew(10deg);
```


###'-bis-kit' property

This property specifies the type of form control to display. You can customize the display by styling pseudo-elements without considering the different vendor prefixes. The onchange event occurs when the value of an element has been changed.

#####Defines a slider control

-bis-kit: slider;

This type only apply to \<input> element. The default rendering is a horizontal slider. You can get a vertical one by setting 'orient' attribute to 'vertical'. It provides a number of pseudo-elements to customize the slider control.
*  ::fill-lower: the track portion underneath / before the handle
*  ::fill-upper: the track portion above / after the handle
*  ::thumb: the handle
*  ::track: the range track itself
*  ::tooltip: the tooltip that appears when the user is selecting a value with the slider control.

For example:

```html
  <input orient=vertical min=20 max=200 step=10>
```

```css
  input { -bis-kit: slider; }
  input::fill-lower { background: orange; }
  input::fill-upper { background: green; }
  input::thumb { background: red; }
  input::track { padding: 20px 0; }
  input::tooltip { display: none; }
```

#####Defines a number picker

-bis-kit: number;

This type only apply to \<input> element. It provides a spinner control for number picker inputs.
*  ::spin-up: the upper spinner button
*  ::spin-down: the lower spinner button

For example:

```html
  <input orient=vertical min=20 max=200 step=10>
```

```css
  input { -bis-kit: number; }
  input::spin-up { border-bottom: 1px solid #eee; }
  input::spin-down { border-top: 1px solid #ddd; }
```

#####Defines a knob control

-bis-kit: knob;

This type only apply to \<input> element. It is square by default. You can make it round by styling the element. You can also set the range of rotation angle by setting 'rotate-start' and 'rotate-end' attributes. The default range is 45-135 degrees. 

For example:

```html
  <input min=20 max=200 step=10 rotate-start=30 rotate-end=150>
```

```css
  input { 
  	-bis-kit: knob;
  	border-radius: 50%; 
  }
```

#####Defines a progress bar

-bis-kit: progress;

This type only apply to \<progress> element. The default orientation is horizontal. You can get a vertical progress bar by setting 'orient' attribute to 'vertical'. It provides 2 pseudo-elements for customization:
'::progress-bar', '::progress-value'. 

For example:

```html
  <progress max="100" value="50"></progress>
```

```css
  progress::progress-bar { background: orange; }
  progress::progress-value { background: red; }
```


###Lazy iteration

This feature allows you to create repeating values on some certain properties, such as box-shadow, text-shadow, background-image(multi-gradient) and -bis-shadow-copy.

#####Single-loop: (+|-)an(+|-)b

The <i>a</i> and <i>b</i> values must be integers, the <i>n</i> value starts from 0. For example:

```css
  box-shadow: 3 (2n+3)px 0 white;
```

compiles to:

```css
  box-shadow: 3px 0 white, 5px 0 white, 7px 0 white;
```

In this example, we specified 3 times repeatition. The formula is equivalent to:

```javascript
  for(n=0; n<3; n++){
    output( (2n+3) + 'px 0 white' );
  }
``` 

#####Two-nested-loop: (+|-)am(+|-)b  (+|-)an(+|-)b

The <i>a</i> and <i>b</i> values must be integers, the <i>m</i> and <i>n</i> values start from 0. For example:

```css
  box-shadow: 2 2 (4m)px (2n+3)px white;
```

compiles to:

```css
  box-shadow: 0px 0px white, 0px 3px white, 4px 0px white, 4px 3px white;
```

In this example, the formula is equivalent to:

```javascript
  for(m=0; m<2; m++){
  	for(n=0; n<2; n++){
  	  output( (4m) + 'px ' + (2n+3) + 'px white');
  	}
  }
``` 


###@-bis-to-em rule

With this rule, px to em conversion made simple. The syntax is @-bis-to-em <i>base-size</i>{ seletor{ css-style } }

Let's say we styled a element base on a 64*64 canvas, we can write this way:

```css
  @-bis-to-em 64{
    div{
	  width: 64px;
	  height: 32px;
    }
  }
``` 

compiles to:

```css
  div{
	width: 1em;
	height: .5em;
  }
``` 

After compilation, we can scale this element to any size by the 'font-size' property.


###Prefix free

Bisque lets you use only unprefixed CSS properties. As for gradient, bisque make IE9 support it, and make some legacy browsers display exactly the same as W3C standard. But there're a few limitations:

*  Just use 'background-image' for cross browser compatibility
*  Color stop must be in the range of 0 - 100%
*  Circle shape is supported, but ellipse shape is not currently supported in radial gradient












