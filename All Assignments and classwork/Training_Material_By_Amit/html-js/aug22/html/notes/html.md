### HTML

- hypertext markup language
- used to designing the web ui
- invented by sir Tim Bernerse Lee on a NextStep Workstation

- **markup language**

  - which is made up of

    - tag

      - word enclosed by < and >
      - also known as element
      - e.g.
        - \<p\>: paragraph
        - \<table\>: table
      - used as an instruction to perform some operation
      - types

        - opening
          - used to start an instruction
          - also known as starting tag
          - e.g.
            - \<p\>
        - closing
          - used to end the instruction
          - also known as ending tag
          - e.g.
            - \</p\>
        - empty
          - tag without having any data
          - e.g.
            - \<p\>\</p>
          - shorthand
            - \<br/\>
        - root
          - which starts and ends the document
          - e.g.
            - in html, the \<html\> is the root tag`

      - attribute
        - more information about the tag
        - attributes are optional
        - if used then attribute must be used in the name = value format
          - e.g.
            - \<input type="text" >
            - where
              - input is a tag
              - type is an attribute
              - text is the value for attribute type
        - for html5 attributes
          - if attribute name and value is same then one can use the shorthand attribute
          - e.g.
            - \<input required="required">
            - \<input required>
        - every html tag has following attributes
          - **id**: used to identify the tag uniquely
          - **name**:
            - used to add the name for a tag
            - used while submitting the form
          - **style**:
            - used to inline style to a tag
          - **class**:
            - used to add css class to a tag

    - data
      - also known as content
      - information enclosed by opening and closing tags
      - e.g.
        - \<p\>This is my paragraph\</p\>
        - where
          - \<p\>: starting tag
          - this is my paragraph: data
          - \</p\>: closing tag

  - is not a programming language

### dev environment

- editor: Visual Studio Code
  - extensions
    - html snippets (https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
    - html boilerplate (https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate)
    -

### html tags

- comment

  - ignored while rendering the html
  - used to write single or multi line comments
  - e.g.
    - \<!-- this is the head section --\>
    - \<!--
      this is the comment 1
      this is the comment 2
      this is the comment 3
      this is the comment 4
      --\>

- **head section**

  - contains the meta data of the page
  - the tags are not meant to display any output
  - tags
    - **title**: used to change the tab title
    - **style**: used to add internal CSS code
    - **script**: used to add javascript code
    - **meta**: used to add meta (extra) information
    - **link**: used to link external documents
    - **base**: used for setting the base url for the website

- **body section**

  - **text tags**

    - heading tags

      - used to add headings
      - block tags
      - types
        - h1:
          - > \<h1>this is heading 1 \</h1>
        - h2
          - > \<h2>this is heading 2 \</h2>
        - h3
          - > \<h3>this is heading 3 \</h3>
        - h4
          - > \<h4>this is heading 4 \</h4>
        - h5
          - > \<h5>this is heading 5 \</h5>
        - h6
          - > \<h6>this is heading 6 \</h6>

    - paragraph

      - used to add a pragraph
      - a block tag
      - > \<p>this is para \</p>

    - div

      - divsion used to group the contents
      - can be also used for grouping the tags
      - adds new line character after finishing the data
      - a block tag
      - > \<div>this is div 1\</div>

    - span
      - used to add textual information
      - does not add new line character after finishing the data
      - an inline tag
      - > \<span>this is a span\</span>

  - **formatting tags**

    - bold

      - used to make the content bold
      - > \<div>\<b>India\</b> is my country.\</div>
        > \<div>\<strong>India\</strong> is my country.\</div>

    - italic

      - used to make the content italic
      - > \<div>\<i>India\</i> is my country.\</div>

    - underline

      - used to make the cotent underline
      - > \<div>\<u>India\</u> is my country.\</div>

    - strike

      - used to make the content strike through
      - > \<div>\<strike>China\</strike> is spreading Covid-19.\</div>

    - monospaced

      - used to create a monospaced content
      - > \<div>\<tt>China\</tt> is spreading Covid-19.\</div>

    - superscript

      - used to add the content above the line
      - > \<div>x\<sup>2\</sup>\<div>

    - subscript

      - used to add the content below the line
      - > \<div>x\<sub>2\</sub>\<div>

    - pre

      - used to add pre-formatted text
      - e.g.

        > \<pre>

        this is already formatted text

        \</pre>

    - marquee
      - used to show the moving text
      - e.g.
        >

  - **lists**

    - ordered
      - used to create an ordered list
      - types
        - 1: latin numbers
        - A: upper case letter
        - a: lower case letter
        - I: upper case roman numbers
        - i: lower case roman numbers
      - e.g.
        > \<ol type="1">
            \<li>this is list item 1\</li>
            \<li>this is list item 2\</li>
            \<li>this is list item 3\</li>
        \</ol>
    - unordered
      - used to create unordered list
      - types
        - disc: filled circle
        - circle: empty circle
        - square: square
      - e.g.
        > \<ul type="disc">
            \<li>this is list item 1\</li>
            \<li>this is list item 2\</li>
            \<li>this is list item 3\</li>
        \</ul>
    - definition
      - used to add the definitions along with the information about them
      - dt: definition term
      - dd: definition definition
      - e.g.
        > \<dl>
            \<dt>HTML\</dt>
            \<dd>Hyper Text Markup Language\<dd>
        \</dl>

  - **resources**

    - images
      - used to render images in the web page
      - e.g.
        > \<img src="cat.1.jpg">
    - audio
      - used to play audio
      - e.g.
        > \<audio src="audio.mp3">
    - video
      - used to play video files
      - e.g.
        > \<video src="movie.mov">

  - **table**
  - **anchor**
  - **white space**

    - br

      - used to add a line break
      - e.g.
        > \<br>
        > \<br/>

    - hr

      - used to add line break with a horizontal rular
      - e.g.
        > \<hr>
        > \<hr/>

    - \&nbsp;
      - used to add a space
      - e.g.
        > \&nbsp;

  - **form tags**
    - used for getting input values from user
    - tags
      - input
        - used to get single line input from user
        - types
          - **text**: get textual (characters + numbers) input from user
          - **date**: get date input from user (browser may show a calendar control to select the date)
          - **time**: get time input from user
          - **number**: get only number input from user
          - **submit**
            - converts the input tag to a button
            - used to send the information filled by user to the server
          - **reset**:
            - converts the input tag to a button
            - resets every tag inside the form
          - **button**
            - converts the input tag to a button
            - used to perform an action locally (form will not be submitted or reset)
          - **radio**
            - used to get one of the options from user
          - **checkbox**
            - used to get mulitple options from user
          - **file**:
            - used to select a file
          - **password**:
            - used to accept password from user
            - masks the characters (displays \* instead of real characters)
          - **tel**:
            - used to get telephone number input from user
          - **email**:
            - used to get email address from user
        - attributes
          - **readonly**: makes the input readonly
          - **required**: user must enter the value in the input tag
          - **placeholder**: shows a hint to the user
          - **maxlength**: used to limit the number of characters entered by user
          - **value**: used to show the tag's title
          - **checked**:
            - use to select an option by default
            - only used along with radio and checkbox
          - **accept**:
            - used to allow certain type of files
            - used only with type = file
      - textarea
        - used to get multi-line input from user
      - select
        - used to get one or more options from the given list of options
