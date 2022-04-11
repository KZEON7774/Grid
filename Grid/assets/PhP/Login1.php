<html>
    <body>
        <?php
        $uname = $_POST['usname'];
        $pword = $_POST['psword'];

        $con = mysqli_connect("localhost","root","")
        or die("Couldn't Connect to the Server.");

        $db = mysqli_select_db($con,"userinformation")
        or die("<b>Connection Failed.");

        $query = "SELECT * FROM users WHERE username = '$uname'";
        
        if($result = mysqli_query($con,$query)){
            if(!($row = mysqli_fetch_array($result))){
                echo "<b><i>Invalid Username.<a href='form.html'>Click Here</a></i>";
            }
            else{
                $password = $row[2];
                if($password == $pword){
                    echo "<a href='../index/account1.html'></a>";
                }
                else{
                    echo "<b><i>Incorrect Password.<a href='.$error.html'>Go Back</a></i>";
                }
            }
        }
        else
        echo mysqli_error($con);
        mysqli_close($con);

        ?>
    </body>
</html>