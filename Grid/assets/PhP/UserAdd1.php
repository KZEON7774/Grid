<html>
    <body>
        <?php
        
        $uname = $_POST['uname'];
        $email = $_POST['email'];
        $pword = $_POST['pword'];


        $con = mysqli_connect("localhost","root","")
        or die("Couldn't Connect to the Server.");

        $db = mysqli_select_db($con,"userinformation")
        or die("<b>Connection Failed.");

        //Start the server validations
        $query = "SELECT * FROM users WHERE username = '$uname'";

        if($result = mysqli_query($con,$query)){
            if($row = mysqli_fetch_array($result)){
                echo "<b><i>Username is already exist<br><a href='form.html'>CLICK HERE</a></i>";
            }
            else{
                $query = "INSERT INTO users(username,email,password)values('$uname','$email','$pword')";
                if($result = mysqli_query($con,$query)){
                    echo "<b><i><center>User Record added in the Database.</center></i></b><p>"; 
                }
                else
                echo mysqli_error($con);
            }
        }
        else{
            echo mysqli_error($con);
        }
        mysqli_close($con);
        ?>
    </body>
</html>