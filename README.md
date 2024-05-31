# Web3Ladies Take Home Project

<u>Question</u> <br>

> What are some of the Nodes built-in modules and what are they use for?<br>
<table>
  <tr>
    <th>Module</th>
  	<th>Usage</th>
  </tr>
  <tr>
  	<td>http</td>
  	<td>To make Node.js act as an HTTP server</td>
  </tr>

  <tr>
  	<td>https</td>
  	<td>To make Node.js act as an HTTPS server.</td>
  </tr>

  <tr>
  	<td>net</td>
  	<td>To create servers and clients</td>
  </tr>

  <tr>
  	<td>url</td>
  	<td>To parse URL strings</td>
  </tr>

  <tr>
  	<td>tty</td>
  	<td>Provides classes used by a text terminal</td>
  </tr>

  <tr>
  	<td>vm</td>
  	<td>To compile JavaScript code in a virtual machine</td>
  </tr>

  <tr>
  	<td>events</td>
  	<td>To handle events</td>
  </tr>

</table>


## Coding Exercise
The project is about how you can track your repository activities (i.e: push, pull, fork, star etc) when github users interact with it.

TODO:
- How you can monitor and track who interact with the repo by connecting GitHub and the app together for them to be able to send and receive requests.
- The information of tracked users with their activities should be saved on the database. You will need to create an endpoint for this.
- You should be able to fetch all the activities stored on the database, also you should be able to fetch each activities based on their ID and also based on their username.