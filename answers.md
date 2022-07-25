Fake Resume & Github Practice
    cd example_repo
    touch answers.md
    open answers.md
    

Git & Github- Questions
    Answer the following questions

What command do you use to setup a git repository inside of your folder?
git init

What command do you use to ask git to start tracking a file?
git add <filename>

What command do you use to get updates from the class repository?
git fetch

What command do you use to push your work to your homework repository?
git push

**Answers from https://docs.github.com/en **

Commands used for this section:
    git add ../answers.md
    git status
    git commit -m ""
    clear


Fake Resume Page - Getting Started
    mkdir resume_page
    cd resume_page
    touch index.html style.css projects.html
    open index.html
    code .

git add resume_page
git status
git commit -m "resume index and main file set up"

VS Code commands:
    ! (tab) - for boilerplate


Fake Resume Page - Adding content

    Professional image of Grumpy Cat
    <h1>Grumpy Cat</h1>
    
    <img src="https://static.dw.com/image/18463014_303.jpg" alt ="Grumpy Cat in brown fedora ">
   <nav></nav> 
   
   Body
   <div> 
    Grumpy Cat soared to fame and became a worldwide sensation in 2012 when her frowning face was shared on the internet. When viewers said the image was photoshopped the first video of Grumpy Cat was shared on YouTube. With more than 1.5 million views in the first 36 hours, a star and popular meme was born.
    
        </div>
    
    
    Past three work positions
        
        2019-2022   Celestial SR. Developer
        2017-2019   Sr. Developer for CatBook
        2014-2017   Jr. Developer for HumansMart
        
        
   <h3>My Greatest Hits</h3>     
        <ul>
        <li>2019-2022   Celestial SR. Developer</li>
        <li>2017-2019   Sr. Developer for CatBook</li>
        <li>2014-2017   Jr. Developer for HumansMart</li>
        </ul>
        
        
    <h3>Get At Me on my Socials</h3>    
    Social Media Links
    FB: https://www.facebook.com/TheOfficialGrumpyCat
    IG: https://www.instagram.com/RealGrumpyCat/
    LinkedIn: https://www.linkedin.com/in/grumpy-cat-a7a09b1b8/
    
    <a href="https://www.facebook.com/TheOfficialGrumpyCat" alt= "Grumpy Cat Facebook Page"</a>
    
    <link rel="FB.icon" type="image" href="https://icons.iconarchive.com/icons/yootheme/social-bookmark/512/social-facebook-button-blue-icon.png"> 
    
    <a href="https://www.instagram.com/RealGrumpyCat/" alt= "Grumpy Cat IG Page"</a>
    <a href="https://www.linkedin.com/in/grumpy-cat-a7a09b1b8/" alt= "Grumpy Cat LinkedIn Page"</a>
    
    https://iconarchive.com/download/i75878/martz90/circle/linkedin.ico
    https://i.pinimg.com/736x/5e/ff/6c/5eff6c25d920f6a78fda288e6589bf8b.jpg

Fake Resume Page - Adding Style

Font color h3 in CSS:
h3{
color: #b58;

}

Background in CSS:
    body {
  background-color: lightblue;
}
Center h1 in CSS:
Font h1 in CSS:
h1{
text-align: center;
font-family: "Lucinda Handwriting", cursive;

}



Table Spacing in CSS:

table, th, td {
  border:1px solid black;
}

Spacing in CSS:
body{

text-indent: 50px;

}

Navigation Bar:
    <ul>
  <li><a href=index.html">Home</a></li>
  <li><a href="projects.html">Projects</a></li>
    <li><a href="https://www.instagram.com/RealGrumpyCat/">Instagram</a></li>
      <li><a href="https://www.facebook.com/TheOfficialGrumpyCat">Catbook</a></li>
        <li><a href="https://www.linkedin.com/in/grumpy-cat-a7a09b1b8/">LinkedIn</a></li>
</ul>

Projects.html page

Project                          Description

KnockItOff                       A fun time waster which matches up items, and                                 surfaces to knock them off of.    

How to get away with Catnip      A catnip navigation app which not only shows the                              location of catnip, but how to get it and blame                               it on squirrels  

Catbook DogMessenger             A secret messaging system for the well known                                  Catbook.  This allows you to communicate with                                 your dog friends without being shamed by                                      fellow cats.

    


<table>

<tr>
<th>Project</th>
<th>Description</th>
</tr>
<tr>
<td>KnockItOff </td>
<td>A fun time waster which matches up items, and                                 surfaces to knock them off of.</td>
</tr>

<tr>
<td>How to get away with Catnip</td>
<td> A catnip navigation app which not only shows the                              location of catnip, but how to get it and blame                               it on squirrels</td>
</tr>

<tr>
<td>Catbook DogMessenger</td>
<td> A secret messaging system for the well known                                  Catbook.  This allows you to communicate with                                 your dog friends without being shamed by                                      fellow cats.
</td>
</tr>

</table>



Codes for Loops (chosing 5)

First Loop

for(let i = 0; i <= 99; i++) {
  console.log(i);
}

Expected result, numbers 0 - 99 will print to the console

Second Loop

for(let i = 99; i >= 0; i--) {
  console.log(i);
}

expected result: numbers 99-0 will print to the console

Third Loop

for(let i = 3; i <= 90; i++) {
  const multipleOf3 = i % 3 === 0;
  if(multipleOf3) {
    console.log(i);
  }
  }
  expected result: multiples of 3 are printed to the console up to 90
  
  
  Fourth Loop
  
  for(let i = 0; i <= 99; i++) {
   const isOdd = i % 2 === 1;
   if(isOdd) {
     console.log(i);
 }
 }
  
Fifth Loop

for(let i = 0; i <= 98; i++) {
  const isEven = i % 2 === 0;
  if(isEven) {
    console.log(i);
  }
}

expected results: even numbers print from 2-98
