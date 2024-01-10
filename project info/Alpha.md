# Alpha requirements

## Legend

[PROTO] - Requirements which are marked with this are required to be implemented for the prototype version of the application.   
[ALPHA] - Requirements with this mark will be implemented in the alpha stage of the application.  
[BETA] - Requirements with this mark will be implemented in the alpha stage of the application.  
[RELEASE] - Requirements with this mark will be implemented in final release version of the application.  
[TBD] - To be decided. 

<mark>Requirements without version annotation belong to this version </mark>

---

##### Note: All of the requirements below are of the prototype, although some of the subrequirements are intended for alpha, beta or release versions.


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
	1.10 [ALPHA] Timer box counts displays the current session number.
```


### [ALPHA] Settings view (Modal)

```
1. There is a timer configuration in the settings.
		1.1 User can change session and break times.
		1.2 User choose if the timer should start automatically.
		1.3 User can choose the timer over alarm sound.
		1.4 User can configure alarm sound volume
		
1. There is a theme configuration in the settings.
	2.1 User can choose application theme from theme presets.
	2.2 User can customize application theme 
		2.2.1 User can choose main color
		2.2.2 User can choose secondary color
		2.2.3 User can choose accent color
		2.2.4 User cna choose text color
	2.3 There is an option with which colors can be reset to applciation default.

3. There is a button with which all settings can be reset to default

```

### [ALPHA] Account view (Modal)

```
1. If logged in, dropdown should display basic user information and some options.
	1.1 Dropdown displays user's icon.
	1.2 Dropdown displays user's name.
	1.3 Dropdown displays user's email.
	1.4 Dropdown contains log out button.
	
2. If logged out, dropdown displays placeholder information.
	2.1 Dropdown displays grayed out generic user icon.
	2.2 Dropdown states the fact that the user is not logged in.
	2.3 Dropdown contains log in button which will open up login view.
```

