# Shaders Explanation

**Options → Frontend → Screen Sharpness**

First, let’s talk a little about this option.  
The GPU in your device basically has two modes to upscale an image to the final screen size.

The first is **NEAREST**, which is faster because it’s less complex. It simply upscales the image by doubling each pixel. This looks very sharp, but it can make an image look *too* sharp, especially if the input (the output of your emulator core) is at a very small resolution. NEAREST just doubles the pixels until it reaches the desired size.

The second option is **LINEAR**. This costs a little more performance-wise, but instead of just doubling pixels, it applies linear interpolation between pixels, creating a smoother, softer look.  
This can definitely create a more even, pleasant image — but again, it depends heavily on what the original source image looks like. If your emulator is outputting a very small image, LINEAR interpolation has to invent a lot of new pixels to fill the screen, and the result can look very blurry.

The takeaway here is simple:  
**The smaller the original image the GPU receives to upscale to your screen’s resolution, the worse it will look.**  
Neither NEAREST nor LINEAR can magically make a tiny 320×240 image look amazing on a big 1024×768 screen.  
That’s just been a fact of life since the early days of computers.

![NEAREST](https://github.com/user-attachments/assets/7ba31112-f778-4426-860f-2b39b7966121)
![LINEAR](https://github.com/user-attachments/assets/21fd9408-2d80-429b-9bf8-9114baeb6f6b)


---

Now, if you really just want to *rawdog* the tiny emulator output directly to the screen for maximum performance, I recommend using **NEAREST**.  
LINEAR usually just ends up looking too blurry, while NEAREST faithfully replicates the pixels from the source, simply making the image bigger — simple and sharp.

---


So, does that mean old games will *always* look like crap on modern screens?

**Well, no, not really! Welcome to the world of shaders!**

---

## A Note on the Word "Shader"

Before we dive in, a quick note:  
The word *shader* is actually kind of wrong in this context. In emulation, "shaders" have become synonymous with "effects," but technically speaking, shaders are just small programs that tell your GPU what to do with pixel data.  
**Every image you see on your screen — even a simple one without effects — is being drawn by a shader.**  
Even the most basic output still runs a shader that simply says: "draw a rectangle the size of the screen and fill it with the emulator's pixel data."

Okay, with that out of the way — since we already use shaders to draw the screen, **we can also use them to alter the look of the image!**

---

## Making LINEAR Look Good

Let's start with a very basic idea that already looks great for most systems and might even be all you need:

Remember how I said NEAREST is better because LINEAR gets too blurry?  
Well, **LINEAR can actually be awesome — if we prepare the image a little first.**

Here’s the problem:  
When you scale a small image directly up to a big resolution with LINEAR interpolation, the GPU has to invent a *lot* of made-up pixels, which makes everything blurry.  
(For example, scaling a 320×240 image up to 1024×768 — almost two-thirds of the final pixels are *imaginary!* No wonder it looks so bad.)

---

**So what if we first scale the image sharply with NEAREST — and *then* apply LINEAR interpolation afterward?**

In other words:  
First, double (or triple) the sharp pixels with NEAREST, then let LINEAR smooth out only the small leftover gaps.  
Best of both worlds!

Example:
- Emulator outputs 320×240.  
- First, upscale to 640×480 using NEAREST. (Or even 960×720 if you want.)
- Then, apply LINEAR interpolation when stretching it the rest of the way to your screen’s full resolution.

**Result?**  
It looks *way* better!  
Because LINEAR now only has to invent half as many pixels, and it’s working with a much sharper, more detailed starting point.

![LINEAR with 2x NEAREST prescale](https://github.com/user-attachments/assets/a4c9b575-d010-493b-93c8-d1dd7b666b79)

---

## How to Set This Up

First, let’s set a shader to upscale the image 2× using NEAREST:

**Go to:**
> Options → Shaders

And set the following:  
- **Number of shaders:** 1 (we only need one)  
- **Shader 1:** `stock.glsl` (basic shader that just outputs the input image)  
- **Filter:** NEAREST (very important — we want a sharp, clean NEAREST upscale first!)  
- **Source type:** Relative or Source (doesn’t matter — they’re the same for the first shader)  
- **Texture type:** Relative or Source  
- **Scale:** 2 or 3  
  (Use 2× for SNES, MD, etc., or 3× for very small images like GB/GBC.)

---

**What this shader does:**  
It takes the emulator's output, scales it up 2× or 3× using NEAREST, and passes it on to the next stage (in this case, directly to the screen, since we’re only using one shader).

---

Now, let’s apply the final LINEAR smoothing when outputting to the screen:

**Go to:**
> Options → Frontend → Screen Sharpness

And set this to **LINEAR**.

---

**So now:**
- First, the shader upscales the image 2× or 3× sharply with NEAREST.
- Then, the frontend upscales the rest of the way using LINEAR to smooth it out slightly.

**And the result already looks MUCH better, right?**

---

## A Few Final Notes

The "world of shaders" is all about **chaining small steps together** — each shader alters the image slightly before passing it along.

- **Choosing NEAREST or LINEAR only matters when the step involves resizing.**  
If a shader step uses a Scale of 1 (no scaling), the NEAREST or LINEAR setting has no effect at all.

There are tons of shaders out there (`.glsl` files) that do all kinds of fun things:
- Simulate CRT screens
- Mimic Game Boy Advance LCD looks
- Apply different smoothing/sharpening algorithms
- Add scanlines, fake grid patterns, etc.

**Feel free to experiment!**  
Try different shaders, different combinations, and find the look that feels best for your games.

**Enjoy! 🎮**

## BONUS: GB/GBC/GBA Tip!

Want to make your Game Boy, Game Boy Color, and Game Boy Advance games look even cooler? Here's a quick bonus trick!

Set everything up the same way as above, **but now set the number of shaders to 2** and configure the second shader like this:

- **Number of shaders:** 2  
- **Shader 2:** `lcd3x.glsl` (a shader that overlays a pixel grid, simulating old handheld screens)  
- **Filter:** NEAREST (NEAREST recommended for a sharp grid, but LINEAR could work more for you)  
- **Source type:** Source (important — I’ll explain why below)  
- **Texture type:** Source  
- **Scale:** Screen  

---

### What This Does

This setup applies an additional shader called `lcd3x`, which overlays a grid on the image to mimic the look of original Game Boy, Game Boy Color, and GBA screens.  
It’s a simple effect, but it adds a lot of nostalgic charm!

![lcd3x](https://github.com/user-attachments/assets/6ef9bd8c-e192-4861-975f-00d2ec165649)


---

### Why Use **Source** and **Screen**?

Here's the idea:

- Setting **Source** as the texture tells the shader to look at the original output from the emulator — the real, original pixels.
- Setting the **Scale** to **Screen** means the shader will stretch that grid to match the full screen size.

So, the `lcd3x` shader creates a grid scaled at the source original pixel size but then displayed over the entire screen.

---

### Important Note About Filtering

Since Shader 2 is already stretching the image up to full screen, **the frontend's Screen Sharpness setting no longer matters.**  
At this point, the image is already at its final size before it even reaches the frontend’s final filter.

That means:

> **The final image sharpness is controlled inside Shader 2 itself, not by the frontend option anymore.**

Because we’re overlaying a grid and we want to keep the pixel edges nice and clean, **I recommend using NEAREST** for Shader 2's filter.  
(If you used LINEAR here, it would blur the grid itself, which usually doesn't look as good.)

However, feel free to try LINEAR too — since we already did a NEAREST upscale in Shader 1, a slight blur from LINEAR in Shader 2 can sometimes create a softer, blended look that you might prefer.  
**It's totally up to your personal taste!**

---

That's it — now you’ve got a sharp, beautiful pixel grid overlay just like an old-school Game Boy screen! 🎮🖤

