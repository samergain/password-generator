# Password Generator
This application generates a random password based on criteria selected by the user. 

# How Does It Work?
One page application with popup windows (enable popup's in your browser to test the application).
"Generate Password" button triggers a series of popups that require the user to enter password desired length and criteria of characters. 

Length should be between 8 and 128.

And, at least one criteria should be selected.

Finally, a password is generated on screen based on user selections.

# Links:

* [repo on GitHub](https://github.com/samergain/password-generator)
* [deployed application](https://samergain.github.io/password-generator/)

# Screenshot 
![screenshot](passwordG.png)

# Future Improvements:
* Expand the special characters array to include the whole set without causing errors when generating the password.
* The user can **choose to exclude** some of the special characters. 
* The generated password **must** include all the criteria chosen by the user.
* Find a better way to merge arrays.
* Use bootstrap/DOM to replace the popup windows with something more stylish :)
