<html>
<head>
<link rel="stylesheet" type="text/css" href="login_style.css">
<script type="text/javascript">
var login_attempts=3;
function check_form()
{
 var name=document.getElementById("name").value;
 var pass=document.getElementById("pass").value;
 if(name=="jstudshowemp" && pass=="D00FST3R")
 {
  alert("jstudiosshow.weebly.com");
  document.getElementById("name").value="";
  document.getElementById("pass").value="";
 }
 else
 {
  if(login_attempts==0)
  {
   alert("No Login Attempts Available");
  }
  else
  {
   login_attempts=login_attempts-1;
   alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
   if(login_attempts==0)
   {
    document.getElementById("name").disabled=true;
    document.getElementById("pass").disabled=true;
    document.getElementById("form1").disabled=true;
   }
  }
 }
 
 return false;
}	
</script>
</head>
<body>
<div id="wrapper">

<form id="form1" method="post" action="" onsubmit="return check_form();">
 <p id="login_label">USER LOGIN</p>
 <input type="text" id="name" placeholder="Enter Username">
 <br>
 <input type="password" id="pass" placeholder="Enter Password">
 <br>
 <input type="submit" value="SUBMIT FORM">
 <p>J Studios Show Employees Only</p>
 <br>
</form>

</div>
</body>
</html>