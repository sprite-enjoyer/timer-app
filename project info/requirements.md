# Requirements



## Legend

[PROTO] - Requirements which are marked with this are required to be implemented for the prototype version of the application.   
[ALPHA] - Requirements with this mark will be implemented in the alpha stage of the application.  
[BETA] - Requirements with this mark will be implemented in the alpha stage of the application.  
[RELEASE] - Requirements with this mark will be implemented in final release version of the application.  
[TBD] - To be decided. 


## General

The application has client/server architecture, and is a single page app.  It must have ordinary Pomodoro timer capabilities and some more on top. 


## Views



### [PROTO] For every view...

```
1. [PROTO] An application has a global header.
	1.1 [PROTO] The header contains application's name and logo(maybe on the left).
	1.2 [PROTO] The header contains stats button.
		1.2.1 [BETA] The button opens stats page/view.
	1.3 [PROTO] The header contains settings button.
		1.3.1 [ALPHA] Settings button opens settings page/view.
	1.4 [PROTO] The header contains account button.
		1.4.1 [BETA] Account button redirects the user to account page/view if
		logged in.
		1.4.2 [BETA] Account button redirects the user to login page/view if 
		not logged in.
	
```

### [PROTO] Main page

```
1. [PROTO] There is a pomodoro timer box in the middle  
    1.1 [PROTO] Timer box displays how much time there is left for current pomodoro/rest
    session.  
    1.2 [PROTO] Timer box contains start/stop pomodoro button.  
    1.3 [PROTO] Timer box contains skip pomodoro button.  
    1.5 [ALPHA] Timer box counts displays the current session number.
	1.6 [BETA] It is possible to set today's goal from the timer box.
	1.7 [BETA] If set, timer box must display the number of pomodoros left to reach
	today's goal.
	1.8 [PROTO] Timer box contains discard pomodoro button.
	1.9 [TBD] Timer box contains music player. 
	
2. [ALPHA] There is a subheader at the top of the page.
	2.1 [ALPHA] With subheader user can edit the pomodoro configuration.
        2.1.1 [ALPHA] The user can edit work/rest time.
        2.1.2 [TBD] The user has access to advanced mode.
	        2.4.2.1 In advanced mode, there is a model of the future time blocks:
	        Little rectangles, with different colors, are aligned horizontally to
	        represent future work/rest sessions.
				2.1.2.1.1 User can rearrange rectangles by dragging and dropping them.
				2.1.2.1.2 User can change the colors of the different modes.
				2.1.2.1.3 User can add new modes or delete the existing ones.

3. [BETA] Somewhere(maybe in a subheader) there should be notification settings.
	3.1 [BETA] User can change pomodoro start/end notification sounds.
	3.2 [BETA] User can change break start/end notification sounds.
	3.3 [TBD] User can change custom session start/end notification sounds.
	3.4 [BETA] User can allow notifications to be received on desktop also.

```

### [ALPHA] Settings view

### [BETA] Stats view

### [BETA] Account view
### [BETA] Login view
### [BETA] Register view


---
