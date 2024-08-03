# AdjustUsernameColors

A BetterDiscord plugin that adjusts username colors based on brightness.

Some role colors make it too difficult to see usernames, this plugin makes those names brighter without affecting already bright names.

Code converts RGB value of usernames to HSV and checks if the V value is below 25% (default value, can be changed in the code)
If it is, set the V value to 25%, convert the new values back to RGB and apply them.
Names above 25% value are not affected.
## Features
- Adjusts colors to ensure visibility against dark backgrounds.

![image before adjustment/0%](https://github.com/user-attachments/assets/88f9a96d-09b0-4910-a5b0-fe2f08f40bac)
Before adjustment or at 0%, has value: rgb(17, 4, 4) == HSV 0°, 76%, 7%

![image at 25%](https://github.com/user-attachments/assets/c1f8daac-2c68-403d-a9cc-b5554765c4c5)
After adjustment at 25%, has value: rgb(64, 15, 15) == HSV 0°, 76%, 25%

![image at 75%](https://github.com/user-attachments/assets/27810bd4-cccb-4fd5-aa4c-9f1051e78a01)
After adjustment at 75%, has value: rgb(191, 46, 46) == HSV 0°, 76%, 75%

![image at 100%](https://github.com/user-attachments/assets/ee9e8a8f-2860-41a1-99c6-690ed9a0a80b)
After adjustment at 100%, has value: rgb(255, 61, 61) == HSV 0°, 76%, 100%

## Installation
1. Download the plugin file.
2. Place it in your BetterDiscord plugins folder.

## Usage
- The plugin automatically adjusts colors as usernames are rendered.
- If 25 is too low, open discord settings > plugins > Edit AdjustUsernameColors and change const thresholdV = 25; to any other number you'd like between 1 - 100. Higher number makes it brighter. Putting it at 100 will make all the names maximum brightness.
- You can also do the inverse, if your background is bright and you want the names to be darker edit the code and look for 'if (hsvArray[2] < thresholdV)' change the '<' into '>' and save the file. Adjust the value accordingly as mentioned above. (Higher number is still brighter)

*Switch channel or server for changes to apply.

## Note
This plugin is entirely made by ChatGPT. I provided my wishes in the best way, and the AI delivered. 
I have no clue what the majority of the code does and whether it is efficient or not. I also don't know how Github works... So please don't ask me for help.
Feel free to branch off to adjust/improve whatever.

## License
This project is licensed under the MIT License.
