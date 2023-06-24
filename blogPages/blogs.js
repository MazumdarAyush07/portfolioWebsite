if (document.getElementById("title").innerHTML === "JAVA") {
  document.getElementById("head").innerHTML =
    "JAVA - An Object Oriented Programming Language";
  document.getElementById("about").innerHTML =
    "Java is a high level, robust, object-oriented and secure programming language. Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, James Gosling and his team changed the name from Oak to Java. Platform: Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.";
  document.getElementById("pic1").src = "../Assets/java2.jpeg";
  document.getElementById("topic1").innerHTML = "Types of Java Application";
  document.getElementById("topicDesc1").innerHTML =
    "There are mainly 4 main types of applications that can be created using Java Programming:";
  document.getElementById("topicDesc2").innerHTML =
    "Standalone Application: Standalone applications are also known as desktop applications or window-based applications. These are traditional software that we need to install on every machine.";
  document.getElementById("topicDesc3").innerHTML =
    "Web Application: An application that runs on the server side and creates a dynamic page is called a web application.";
  document.getElementById("topicDesc4").innerHTML =
    "Enterprise Application: An application that is distributed in nature, such as banking applications, etc. is called an enterprise application. It has advantages like high-level security, load balancing, and clustering. In Java, EJB is used for creating enterprise applications.";
  document.getElementById("topicDesc5").innerHTML =
    "Mobile Application: An application which is created for mobile devices is called a mobile application. Currently, Android and Java ME are used for creating mobile applications.";
  document.getElementById("pic2").src = "../Assets/java1.png";
}

if (document.getElementById("title").innerHTML === "DSA") {
  document.getElementById("head").innerHTML = "Data Structures and Algorithms";
  document.getElementById("about").innerHTML =
    "A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.";
  document.getElementById("pic1").src = "../Assets/DSA2.jpeg";
  document.getElementById("topic1").innerHTML = "Types of Data Structures";
  document.getElementById("topicDesc1").innerHTML =
    "Linear Data Structure: Data Structures in which the data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements.";
  document.getElementById("topicDesc2").innerHTML =
    "Static data structure: Fixed memory size.";
  document.getElementById("topicDesc3").innerHTML =
    "Dynamic data structure: Size is not fixed.";
  document.getElementById("topicDesc4").innerHTML =
    "Non-Linear Data structures: Data structures where data elements are not placed sequentially or linearly are called non-linear data structures. In a non linear data structure, we can’t traverse all the elements in a single run.";
  document.getElementById("pic2").src = "../Assets/DSA1.jpeg";
}

if (document.getElementById("title").innerHTML === "Computer Networks") {
  document.getElementById("head").innerHTML = "Computer Networks";
  document.getElementById("about").innerHTML =
    "A computer network is a set of devices connected through links. A node can be computer, printer, or any other device capable of sending or receiving the data. The links connecting the nodes are known as communication channels. Computer Network uses distributed processing in which task is divided among several computers. Instead, a single computer handles an entire task, each separate computer handles a subset.";
  document.getElementById("pic1").src = "../Assets/CN2.jpeg";
  document.getElementById("topic1").innerHTML = "Important Concepts";
  document.getElementById("topicDesc1").innerHTML =
    "Data communication refers to the process of transmitting data from one device to another through a transmission medium. Networking involves connecting multiple devices and enabling communication between them.";
  document.getElementById("topicDesc2").innerHTML =
    "Data representation in computer networks is the process of converting data from its original form into a form that can be transmitted over a network. This process involves encoding and decoding data using various techniques";
  document.getElementById("topicDesc3").innerHTML =
    "A protocol is defined as a set of rules that govern data communications. A protocol defines what is to be communicated and when it is to be communicated.";
  document.getElementById("pic2").src = "../Assets/CN1.jpeg";
}
