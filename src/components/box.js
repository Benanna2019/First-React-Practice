import React from "react";

function Box() {
  return (
    <div class="box">
      <div className="myInfoCard">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHwAgTzZOMqoA/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=j9WWDL2OAdBDw7qTtKATd082zfnPIHUNzKkbLd2n-k0"
          alt="Me"
          width="200px"
        />
        <h1>Welcome to my site!</h1>
      </div>
      <p className="infoText">
        My name is Ben Patton. I am a Full-stack Javascript Developer in
        Charleston South Carolina
      </p>
      <div className="randomFactoid">
        <label>Favorite Book:</label>
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1lFQme0oMaZ94GjUGG3QMLpLCcY-nbHqCHA&usqp=CAU">
          Lord of The Rings
        </a>
      </div>
    </div>
  );
}

export default Box;
