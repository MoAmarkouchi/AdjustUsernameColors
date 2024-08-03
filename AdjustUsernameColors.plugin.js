/**
 * @name AdjustUsernameColors
 * @description Adjusts username colors based on brightness.
 * @author Papa ChatGPT and gangstamo13
 * @version 1.0.0
 */

class AdjustUsernameColors {
    constructor() {
        this.observer = null;
    }

    start() {
        this.applyColorAdjustments();
        // Observe the document body or a specific part of the DOM
        this.observer = new MutationObserver(this.applyColorAdjustments.bind(this));
        this.observer.observe(document.body, { childList: true, subtree: true });
    }

    stop() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }

    applyColorAdjustments() {
        const thresholdV = 25; // 25% brightness

        document.querySelectorAll('[class*=username]').forEach(el => {
            const color = window.getComputedStyle(el).color;
            const rgbArray = this.rgbStringToArray(color);

            const hsvArray = this.rgbToHsv(...rgbArray);

            if (hsvArray[2] < thresholdV) {
                hsvArray[2] = thresholdV; // Set V to 25%
                const newRgbArray = this.hsvToRgb(...hsvArray);
                el.style.color = `rgb(${Math.round(newRgbArray[0])}, ${Math.round(newRgbArray[1])}, ${Math.round(newRgbArray[2])})`;
            }
        });
    }

    rgbStringToArray(rgbString) {
        return rgbString.match(/\d+/g).map(Number);
    }

    rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, v = max;
        let d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
            h = 0; // Achromatic
        } else {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h * 360, s * 100, v * 100];
    }

    hsvToRgb(h, s, v) {
        h /= 360; s /= 100; v /= 100;
        let r, g, b;
        let i = Math.floor(h * 6);
        let f = h * 6 - i;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);
        i %= 6;

        switch (i) {
            case 0: r = v; g = t; b = p; break;
            case 1: r = q; g = v; b = p; break;
            case 2: r = p; g = v; b = t; break;
            case 3: r = p; g = q; b = v; break;
            case 4: r = t; g = p; b = v; break;
            case 5: r = v; g = p; b = q; break;
        }

        return [r * 255, g * 255, b * 255];
    }
}

// Export the class instance
module.exports = new AdjustUsernameColors();