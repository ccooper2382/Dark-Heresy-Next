# Dark-Heresy-Next
Dark Heresy reference with Next.js


dark-heresy-refrence A web based reference for the RPG Dark Heresy

6/12/22  Doing the tables in csv files then using a csv to html converter is going to work very well.  Thank the Machine God for Reddit.  The task of making all the tables just went from soul shredding to mearly time consuming.

6/10/22  After many tutorials and false starts I beleive that I am finally ready to develop this in ernest.  Next.js seems to be a good tool for my needs. I figured out the basic navigation but I still need to figure out how to do nested links 

12/5/21 Made some progress getting JavaScript loaded dynamically with jQuery. Got it to log to console but haven't managed to get click event handlers to work

12/2/21 Removed the url parameter from the pushState method call. Now when it reloads it goes to the home page. Not ideal but better than a 404. Also got some of the styling for the nav bar squared away. It now takes up the height of the screen rather than taking on the height of the content of the body.

11/28/21 Made some progress with basic styling and layout. Looks like I'll have to do the accordion effect for the nav bar manually

11/27/21 Tried to get routing working with the history API. Made a little progress but the previous urls dont clear so I just get a string of urls. Each time the link is clicked the new url is appended to the end of the old.

For future reference the History API pushState() doesn't like using long file paths in the url parameter

After being unable to let it go I got it working... mostly. The navagation works but bookmarking is still an issue.

11/21/21 Learned about the history API. Might solve my navagation issues

11/15/21 Overwrote the README file so I got to learn a little about rolling back a file change.

11/12/21 Spent two hours trying to get tailwind to work with webstorm some progress but not much.

11/11/21 I started working on the tables for the Adept advances. There are going to be a lot of tables in this section. Do I want to load them all at once in the HTML or would this be a good time to revisit AJAX?

11/7/2021 Made some small changes to the HTML to accomidate the new navagation scheme. Mostly worked on getting git to work with Webstorm. Made some progress. Was able to clone from Github but not able to push.

11/5/2021 After doing some reading it seems that AJAX is somewhat over kill for what I'm trying to do so I'm likley to abandon it for loading most of the site. On the plus side this will make my concerns over navigation and dynamic loading of JS moot. On the down side this makes the project seem somewhat simpler than I had hoped limiting the learning opportunities. Still seems a worthy project so I will continue.

10/31/2021 Added jQuery functionality. I've heard tell that jQuery can be used to dynamically load JS which will be usefull for the dice roll functionality. It also makes the JS much more concise. Three lines to load information with AJAX instead of 8

10/30/2021 Conversion of PDF to HTML is nonviable so I am building the pages from scratch. Loading JS with AJAX is also nonviable will need to research alternate methods. Ajax will work with longer filepaths and not just the folder that index is in.

10/26/2021 First attempt to use AJAX Learned that it is posible to load pictures and HTML files with AJAX
