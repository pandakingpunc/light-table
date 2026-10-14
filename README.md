# Light Table

An interactive optics playground in the browser. Put light sources and glass on a table and watch real ray optics happen: a prism splits white light into a spectrum, lenses focus and spread beams, a diamond sparkles through total internal reflection, and soap bubbles shimmer with thin-film interference colors.

The interface is in English by default; switch to Turkish with the **EN / TR** toggle in the top right (or open with `?lang=tr`).

## Features

- **Light sources:** parallel white beam, point light, single-wavelength laser (400 to 700 nm)
- **Objects:** prism (adjustable apex angle), convex and concave lenses (adjustable focal length), cut diamond, soap bubbles
- **Materials:** water, crown glass, flint glass, diamond, with dispersion from real refractive indices and Abbe numbers (Cauchy model)
- **Physics:** refraction, Fresnel reflection, total internal reflection, wavelength-dependent dispersion, thin-film interference on bubbles
- **Rendering:** WebGL2 with progressive light accumulation and bloom; switch between soft light beams and ray lines
- **Presets:** Mix, Prism, Lens, Diamond, Bubbles
- Save the current view as PNG

## Run

No build step and no dependencies. Open `index.html` in a browser with WebGL2 (Chrome recommended), or serve the folder:

```bash
python -m http.server 8000
```

then go to `http://localhost:8000/`.

## Controls

| Action | Input |
|---|---|
| Move | Drag |
| Rotate | Mouse wheel, or the round handle |
| Resize | Shift + wheel, or the corner handle |
| Pop a bubble | Double-click |
| Delete / duplicate | Del / D |
| Nudge | Arrow keys (Shift for bigger steps) |
| Rotate step | Q / E |

Add new objects from the dock at the bottom: click to drop one, or drag it onto the table.

## How it was made

Built with Claude Sonnet 5.5 (Claude Code) from a single one-line prompt: "Make me a table where I can play with light: prism, lens, soap bubble, diamond." The English interface was added afterwards.

## Türkçe

Tarayıcıda çalışan etkileşimli bir optik masası: prizma, mercek, elmas ve sabun köpükleriyle ışıkla oynayın. Arayüz varsayılan olarak İngilizce; sağ üstteki **EN / TR** düğmesiyle Türkçeye geçebilirsiniz. Çalıştırmak için `index.html` dosyasını açmanız yeterli.

## License

Apache License 2.0, see [`LICENSE`](LICENSE). Attribution for the original MIT-licensed code is in [`NOTICE`](NOTICE).
