#bisque 0.2.0

Bisque is a small JavaScript-based CSS extension. It provides some new CSS properties and features that helps you to easily craft graphical interface by using CSS3 instead of images. 

Stand-alone, cross-browser and easy to learn. There's nothing to do on the JavaScript part. 

#####The advantages of CSS3 graphics:

*  Minimum file size;
*  Easy to modify;
*  Responsive;

#####Browser Compatibility: IE9+ and modern browsers

Here are some [demos with source code](http://uhear.me/bisque/). This might give you a feeling of how stuff works.

#Getting Started

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

####The 'bis-shape' Property

This property is actually a shorthand for drawing a shape.  

######Draws a rectangle

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

Note: 
*  Any unit isn't required. If unit exist, it will treat as 'px'. Just use number for clarity.
*  If you define position/left/top/width/height/background-color after shape property, it will be overriden.
*  These also apply to other shape functions.

######Draws a circle

-bis-shape: circle(type, x, y, r, color);
*  type: type of the circle. If this argument is omitted, the circle defaults to be a full circle. The following keywords is accepted: lh(left half), rh(right half), th(top half), bh(bottom half), tlq(top left quarter), trq(top right quarter), blq(bottom left quarter), brq(bottom right quarter)
*  x: x coordinate of the center
*  y: y coordinate of the center
*  r: radius of the circle
*  color: color of the circle

######Draws a ellipse

-bis-shape: ellipse(type, x, y, rx, ry, color);
*  type: type of the circle. If omitted, the circle defaults to be a full circle. The following keywords is accepted: lh(left half), rh(right half), th(top half), bh(bottom half), tlq(top left quarter), trq(top right quarter), blq(bottom left quarter), brq(bottom right quarter).
*  x: x coordinate of the center
*  y: y coordinate of the center
*  rx: horizontal radius of the ellipse
*  ry: vertical radius of the ellipse
*  color: color of the circle

######Draws a triangle

-bis-shape: triangle(type, x, y, width, height, color);
*  type: type of the triangle. This argument is required. The following keywords is accepted: up, down, left, right.
*  x: x coordinate of the top left point
*  y: y coordinate of the top left point
*  width: width of the triangle
*  height: height of the triangle
*  color: color of the triangle

######Draws a sector of a circle, it should be in the range 0-90 degree

-bis-shape: sector(x, y, r, angle, start-angle, color);
*  x: x coordinate of the center of the circle
*  y: y coordinate of the center of the circle
*  r: radius of the circle
*  angle: angle of the sector
*  start-angle: start-angle of the sector, optional
*  color: color of the ellipse

######Draws a line

-bis-shape: line(x1, y1, x2, y2, width, color, style);
*  x1: x coordinate of the start point
*  y1: y coordinate of the start point
*  x2: x coordinate of the end point
*  y2: y coordinate of the end point
*  width: width of the line
*  color: color of the line
*  style: style of the line, optional. This argument is equivalent to 'border-style' property.

####The 'bis-shadow-copy' Property

This property is similar with 'box-shadow' property, but attaches one or more shadow copies to the elements. The copies are exact same shape with the elements. 

Note: This property only applies to elements that is absolute position. Pseudo elements will not effective.

-bis-shadow-copy: offset-x offset-y color transform / transform-origin
*  offset-x: horizontal offset of the copy
*  offset-y: vertical offset of the copy
*  color: color of the copy
*  transform: applies a transformation to the copy, equivalent to 'transform' property
*  transform-origin: changes the position on the transformed copy, equivalent to 'transform-origin' property

For example:

```css
  -bis-shadow-copy: 10px 20px white rotate(30deg) / top left;
```

####The 'bis-kit' Property




















