# AdjustUsernameColors

A BetterDiscord plugin that adjusts username colors based on brightness.

Code converts RGB value of usernames to HSV and checks if the V value is below 25% (default value, can be changed in the code)
If it is, set the V value to 25%, convert the new values back to RGB and apply them.
Names above 25% value are not affected.
## Features
- Adjusts colors to ensure visibility against dark backgrounds.

![Image before adjustment](https://github.com/user-attachments/assets/1b0ebce3-efb5-4f44-b7dc-d93abaf757b4)
Before adjustment, has value: rgb(17, 4, 4) == HSV 0°, 76%, 7%

![image after adjustment](https://github.com/user-attachments/assets/5977f844-0c56-41c3-be59-eadf2fe15722)
After adjustment, has value: rgb(64, 15, 15) == HSV 0°, 78%, 25%

## Installation
1. Download the plugin file.
2. Place it in your BetterDiscord plugins folder.

## Usage
- The plugin automatically adjusts colors as usernames are rendered.
- If 25 is too low, open discord settings > plugins > Edit AdjustUsernameColors and change const thresholdV = 25; to any other number you'd like between 1 - 100. Higher number makes it brighter.

## License
This project is licensed under the MIT License.

## Note
This plugin is entirely made by ChatGPT. I provided my wishes in the best way, and the AI delivered. 
I have no clue what the majority of the code does and whether it is efficient or not. I also don't know how Github works...
Feel free to branch off to adjust/improve whatever.
